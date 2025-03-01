import { A as ApiContextStorage, c as callSafely } from './shared_DMwlq4GL.mjs';
import { getAction, hasContentType, formContentTypes } from './utils_DbN6-Hwl.mjs';

const POST = async (context) => {
  const { request, url } = context;
  const action = await getAction(url.pathname);
  if (!action) {
    return new Response(null, { status: 404 });
  }
  const contentType = request.headers.get("Content-Type");
  const contentLength = request.headers.get("Content-Length");
  let args;
  if (contentLength === "0") {
    args = void 0;
  } else if (contentType && hasContentType(contentType, formContentTypes)) {
    args = await request.clone().formData();
  } else if (contentType && hasContentType(contentType, ["application/json"])) {
    args = await request.clone().json();
  } else {
    return new Response(null, { status: 415 });
  }
  const result = await ApiContextStorage.run(context, () => callSafely(() => action(args)));
  if (result.error) {
    return new Response(
      JSON.stringify({
        ...result.error,
        message: result.error.message,
        stack: void 0 
      }),
      {
        status: result.error.status,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(JSON.stringify(result.data), {
    status: result.data ? 200 : 204,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { POST };
