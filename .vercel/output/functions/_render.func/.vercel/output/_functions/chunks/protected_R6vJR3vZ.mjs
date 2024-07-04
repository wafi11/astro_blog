const get = (ctx) => {
  return new Response(
    JSON.stringify({
      message: "You're logged in!"
    }),
    { status: 200 }
  );
};

export { get };
