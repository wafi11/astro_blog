import { Cookie } from "lucia"
import jwt, { type JwtPayload } from 'jsonwebtoken';
import prisma from "../../lib/db"
import { error } from "console"
import Cookies from "js-cookie"

export async function BlogsData(){
    try {
        const data = await prisma.blog.findMany()
        return data 
    }
    catch {
        throw new Error('Internal Server Errorr')
    }
}
export async function BlogsDataById(id : string){
    try {
        const data = await prisma.blog.findMany({
            where : {
                id
            }
        })
        return data 
    }
    catch {
        throw new Error('Internal Server Errorr')
    }
}

export async function GetUser(token : string){
    try  {
       
        const jwtKey = import.meta.env.AUTH_SECRET;
        if (!token) {
          throw new Error('Token Not Found');
        }
        if (!jwtKey) {
          throw new Error('JWT key not found in environment variables');
        }
    
        // Verify the token
        const decoded = jwt.verify(token, jwtKey);
        if (typeof decoded === 'string') {
          throw new Error('Invalid token payload');
        }
    
        // Get the userId from the decoded token
        const userId = (decoded as JwtPayload).userId as string;
        if (!userId) {
          throw new Error('User ID not found in token');
        }
    
        // Fetch the user from the database
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          include: {
            accounts: true,
            sessions: true,
            likes: true,
          },
        });
    
        if (!user) {
          throw new Error('User not found');
        }
    
        return user;
        }catch{
        console.log("internal Server Erorr")
    }
}










