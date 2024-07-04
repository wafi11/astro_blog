import jwt from 'jsonwebtoken';
import { c as client } from './db_C2CBN58r.mjs';

const jwtSecret = "12345";
async function GET(context) {
  const tokenCookie = context.request.headers.get("Cookie");
  if (!tokenCookie) {
    return new Response("Unauthorized", { status: 401 });
  }
  const token = tokenCookie.split(";").find((cookie) => cookie.trim().startsWith("token="));
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const authToken = token.split("=")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(authToken, jwtSecret);
  } catch (error) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = decodedToken.userId;
  const user = await client.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    return new Response("User not found", { status: 404 });
  }
  return new Response(JSON.stringify(
    user
  ), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200
  });
}

export { GET };
