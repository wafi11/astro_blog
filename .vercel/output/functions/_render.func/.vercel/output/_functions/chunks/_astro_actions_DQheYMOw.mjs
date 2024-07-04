import { c as callSafely } from './shared_DMwlq4GL.mjs';

function toActionProxy(actionCallback = {}, aggregatedPath = "/_actions/") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target) {
        return target[objKey];
      }
      const path = aggregatedPath + objKey.toString();
      const action = (param) => actionHandler(param, path);
      action.toString = () => path;
      action.safe = (input) => {
        return callSafely(() => action(input));
      };
      action.safe.toString = () => path;
      action.$$FORM_ACTION = function() {
        const data = new FormData();
        data.set("_astroAction", action.toString());
        return {
          method: "POST",
          name: action.toString(),
          data
        };
      };
      action.safe.$$FORM_ACTION = function() {
        const data = new FormData();
        data.set("_astroAction", action.toString());
        data.set("_astroActionSafe", "true");
        return {
          method: "POST",
          name: action.toString(),
          data
        };
      };
      return toActionProxy(action, path + ".");
    }
  });
}
async function actionHandler(param, path) {
  {
    const { getAction } = await import('./utils_DbN6-Hwl.mjs');
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action(param);
  }
}
const actions = toActionProxy();

export { actions as a };
