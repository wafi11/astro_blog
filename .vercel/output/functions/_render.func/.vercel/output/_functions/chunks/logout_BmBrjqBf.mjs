import { T as TOKEN } from './constant_DrEFqsfb.mjs';

const POST = async (ctx) => {
  try {
    ctx.cookies.set(TOKEN, "", {
      httpOnly: true,
      maxAge: 0,
      path: "/"
    });
    return new Response(
      JSON.stringify({
        message: "You're logged out!"
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.debug(error);
    return new Response(
      JSON.stringify({
        message: "Logout failed"
      }),
      {
        status: 500
      }
    );
  }
};

export { POST };
