import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './astro/server_CyOu4KzJ.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/collect/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/collect\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"collect","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/api/collect/[Id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/collections","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/collections\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"collections","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/collections.ts","pathname":"/api/collections","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/comments","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/comments\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"comments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/comments.ts","pathname":"/api/comments","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/likes/comments/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/likes\\/comments\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"likes","dynamic":false,"spread":false}],[{"content":"comments","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/api/likes/comments/[Id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/likes/reply/[id]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/likes\\/reply\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"likes","dynamic":false,"spread":false}],[{"content":"reply","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/api/likes/reply/[Id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.ts","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/logout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/logout.ts","pathname":"/api/logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/post","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/post\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/post.ts","pathname":"/api/post","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/profile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/profile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/profile.ts","pathname":"/api/profile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/protected","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/protected\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"protected","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/protected.ts","pathname":"/api/protected","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/register.ts","pathname":"/api/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/reply","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/reply\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"reply","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/reply.ts","pathname":"/api/reply","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/category","isIndex":false,"type":"page","pattern":"^\\/category\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/category.astro","pathname":"/category","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/formblog/edit/[id]","isIndex":true,"type":"page","pattern":"^\\/formblog\\/edit\\/([^/]+?)\\/?$","segments":[[{"content":"formblog","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/formblog/edit/[id]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/formblog","isIndex":true,"type":"page","pattern":"^\\/formblog\\/?$","segments":[[{"content":"formblog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formblog/index.astro","pathname":"/formblog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/popular","isIndex":false,"type":"page","pattern":"^\\/popular\\/?$","segments":[[{"content":"popular","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/popular.astro","pathname":"/popular","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/redirected","isIndex":false,"type":"page","pattern":"^\\/redirected\\/?$","segments":[[{"content":"redirected","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/redirected.astro","pathname":"/redirected","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DPbJPXoO.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"#tgt\");let t=JSON.parse(localStorage.getItem(\"isBookmarked\")||\"false\");t&&(e.classList.add(\"text-red-500\"),e.classList.remove(\"text-black\"),e.innerHTML='Unbookmark <i class=\"fa fa-bookmark\"></i>'),e.addEventListener(\"click\",()=>{t=!t,localStorage.setItem(\"isBookmarked\",JSON.stringify(t)),e.classList.toggle(\"text-red-500\"),e.classList.toggle(\"text-black\"),e.innerHTML=t?'Unbookmark <i class=\"fa fa-bookmark\"></i>':'Bookmark <i class=\"fa fa-bookmark\"></i>',console.log(\"Hello, on client\")})});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/trending","isIndex":false,"type":"page","pattern":"^\\/trending\\/?$","segments":[[{"content":"trending","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/trending.astro","pathname":"/trending","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"Form\").addEventListener(\"submit\",async function(o){o.preventDefault();const t=o.target,r=new FormData(t);console.log(r);const n=Object.fromEntries(r.entries());console.log(n);try{(await fetch(\"/api/login\",{method:\"POST\",body:r})).ok||console.error(\"Internal Server Error\"),Astro.redirect(\"/\")}catch(e){console.error(\"Error during registration:\",e)}});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/users","isIndex":false,"type":"page","pattern":"^\\/users\\/?$","segments":[[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/users.astro","pathname":"/users","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CgDBaxGy.css"},{"type":"external","src":"/_astro/test.CdTTY0SM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/path","pattern":"^\\/path\\/?$","segments":[[{"content":"path","dynamic":false,"spread":false}]],"params":[],"component":"path","pathname":"/path","prerender":false,"redirect":"/","redirectRoute":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}},"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/astroblog/src/pages/test.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/category.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/formblog/edit/[id]/index.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/formblog/index.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/popular.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/profile.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/redirected.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/register.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/search.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/trending.astro",{"propagation":"none","containsHead":true}],["D:/astroblog/src/pages/users.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/collect/[Id]@_@ts":"pages/api/collect/_id_.astro.mjs","\u0000@astro-page:src/pages/api/collections@_@ts":"pages/api/collections.astro.mjs","\u0000@astro-page:src/pages/api/comments@_@ts":"pages/api/comments.astro.mjs","\u0000@astro-page:src/pages/api/likes/comments/[Id]@_@ts":"pages/api/likes/comments/_id_.astro.mjs","\u0000@astro-page:src/pages/api/likes/reply/[Id]@_@ts":"pages/api/likes/reply/_id_.astro.mjs","\u0000@astro-page:src/pages/api/login@_@ts":"pages/api/login.astro.mjs","\u0000@astro-page:src/pages/api/logout@_@ts":"pages/api/logout.astro.mjs","\u0000@astro-page:src/pages/api/post@_@ts":"pages/api/post.astro.mjs","\u0000@astro-page:src/pages/api/profile@_@ts":"pages/api/profile.astro.mjs","\u0000@astro-page:src/pages/api/protected@_@ts":"pages/api/protected.astro.mjs","\u0000@astro-page:src/pages/api/register@_@ts":"pages/api/register.astro.mjs","\u0000@astro-page:src/pages/api/reply@_@ts":"pages/api/reply.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/category@_@astro":"pages/category.astro.mjs","\u0000@astro-page:src/pages/formblog/edit/[id]/index@_@astro":"pages/formblog/edit/_id_.astro.mjs","\u0000@astro-page:src/pages/formblog/index@_@astro":"pages/formblog.astro.mjs","\u0000@astro-page:src/pages/popular@_@astro":"pages/popular.astro.mjs","\u0000@astro-page:src/pages/profile@_@astro":"pages/profile.astro.mjs","\u0000@astro-page:src/pages/redirected@_@astro":"pages/redirected.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/test@_@astro":"pages/test.astro.mjs","\u0000@astro-page:src/pages/trending@_@astro":"pages/trending.astro.mjs","\u0000@astro-page:src/pages/users@_@astro":"pages/users.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","D:/astroblog/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/astroblog/node_modules/astro/dist/actions/runtime/utils.js":"chunks/utils_DbN6-Hwl.mjs","D:/astroblog/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","D:/astroblog/src/actions/index.ts":"chunks/index_DZ4QRBJc.mjs","/node_modules/astro/dist/actions/runtime/route.js":"chunks/route_DdwU1MHY.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_CL5ZgDjF.mjs","/src/pages/api/collect/[Id].ts":"chunks/_Id__CulPCr7h.mjs","/src/pages/api/collections.ts":"chunks/collections_CvwZ-KoK.mjs","/src/pages/api/comments.ts":"chunks/comments_CsP1kw2i.mjs","/src/pages/api/likes/comments/[Id].ts":"chunks/_Id__RuvScjbM.mjs","/src/pages/api/likes/reply/[Id].ts":"chunks/_Id__D4IpQEMR.mjs","/src/pages/api/login.ts":"chunks/login_DtY5wmO7.mjs","/src/pages/api/logout.ts":"chunks/logout_BmBrjqBf.mjs","/src/pages/api/post.ts":"chunks/post_CUWRQake.mjs","/src/pages/api/profile.ts":"chunks/profile_rPyFi80i.mjs","/src/pages/api/protected.ts":"chunks/protected_R6vJR3vZ.mjs","/src/pages/api/register.ts":"chunks/register_CyeuOAFJ.mjs","/src/pages/api/reply.ts":"chunks/reply_DEWdMulh.mjs","/src/pages/blog/index.astro":"chunks/index_Bj2KkHUk.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__gwnhMwNr.mjs","/src/pages/category.astro":"chunks/category_D3d-dVga.mjs","/src/pages/formblog/edit/[id]/index.astro":"chunks/index_b8llgyC6.mjs","/src/pages/formblog/index.astro":"chunks/index_CsIbSAHX.mjs","/src/pages/popular.astro":"chunks/popular_BaRGhms2.mjs","/src/pages/profile.astro":"chunks/profile_BMPDg-Ed.mjs","/src/pages/redirected.astro":"chunks/redirected_B-bPOioR.mjs","/src/pages/register.astro":"chunks/register_CIqYIaL3.mjs","/src/pages/search.astro":"chunks/search_BkkcItW9.mjs","/src/pages/test.astro":"chunks/test_Dq7Nonmd.mjs","/src/pages/trending.astro":"chunks/trending_ujqW7Lui.mjs","/src/pages/users.astro":"chunks/users_BPAv017r.mjs","/src/pages/index.astro":"chunks/index_Dqd4rqeC.mjs","\u0000@astrojs-manifest":"manifest_CA91HXoM.mjs","D:/astroblog/src/components/utils/category":"_astro/category.DsTEEzv9.js","D:/astroblog/src/components/content/Content3":"_astro/Content3.E_qaU697.js","/astro/hoisted.js?q=0":"_astro/hoisted.DPbJPXoO.js","/astro/hoisted.js?q=1":"_astro/hoisted.Bz-PmRko.js","D:/astroblog/src/components/utils/Form":"_astro/Form.BQN-vgVy.js","/astro/hoisted.js?q=2":"_astro/hoisted.DIpfPKXF.js","D:/astroblog/src/components/banner/Banner":"_astro/Banner.i7jX1oXJ.js","D:/astroblog/src/components/utils/header":"_astro/header.CEaP_5XX.js","D:/astroblog/src/components/content/Profile":"_astro/Profile.BrFMik6H.js","D:/astroblog/src/components/sliderImages":"_astro/sliderImages.DJyXZNyF.js","D:/astroblog/src/components/content/ContentMid":"_astro/ContentMid.BPxCl-up.js","D:/astroblog/src/components/utils/Comment":"_astro/Comment.B7GDP8KW.js","D:/astroblog/src/components/banner/BannerPopular":"_astro/BannerPopular.BmLmeXKh.js","D:/astroblog/src/components/utils/Footer":"_astro/Footer.DCMzkLLt.js","D:/astroblog/src/components/banner/BannerTrending":"_astro/BannerTrending.Dnv8KhI4.js","@astrojs/react/client.js":"_astro/client.Bu3nMRue.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CgDBaxGy.css","/_astro/test.CdTTY0SM.css","/favicon.svg","/images.avif","/wafi.png","/_astro/Banner.i7jX1oXJ.js","/_astro/BannerPopular.BmLmeXKh.js","/_astro/BannerTrending.CSameyd-.js","/_astro/BannerTrending.Dnv8KhI4.js","/_astro/category.DsTEEzv9.js","/_astro/classProfile.DHpVDt67.js","/_astro/client.Bu3nMRue.js","/_astro/Comment.B7GDP8KW.js","/_astro/Content3.E_qaU697.js","/_astro/ContentMid.BPxCl-up.js","/_astro/Footer.DCMzkLLt.js","/_astro/Form.BQN-vgVy.js","/_astro/format.BcQETFuH.js","/_astro/header.CEaP_5XX.js","/_astro/hoisted.DPbJPXoO.js","/_astro/iconBase.B54Tpgbu.js","/_astro/index.B3PfHquH.js","/_astro/index.CNaRQafX.js","/_astro/index.DIN140D2.js","/_astro/index.DtPjFYl9.js","/_astro/jsx-runtime.dvAB8w6V.js","/_astro/motion.ZZmNLQ8w.js","/_astro/Profile.BrFMik6H.js","/_astro/sliderImages.DJyXZNyF.js","/_astro/_astro_actions.Ch1ENNOh.js","/_astro/astro/assets-service.OEvvp_4M.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
