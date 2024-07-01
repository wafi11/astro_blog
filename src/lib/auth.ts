import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { Collection, MongoClient } from "mongodb";

// Ensure the DATABASE_URL environment variable is correctly set
const databaseUrl = import.meta.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
}

const client = new MongoClient(databaseUrl);
await client.connect();

const db = client.db();
const User = db.collection<UserDoc>("User");
const Session = db.collection<SessionDoc>("sessions");

const adapter = new MongodbAdapter(Session, User);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: import.meta.env.PROD,
            sameSite: "strict", // Adjust according to your needs
        }
    },
    getUserAttributes: (attributes) => {
        return {
            name: attributes.name,
            email: attributes.email,
            hashedPassword: attributes.hashedPassword,
            image: attributes.image,
        };
    }
});

// Type declarations
declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: UserDoc;
    }
}

interface UserDoc {
    _id: string;
    name: string;
    email: string;
    hashedPassword: string;
    image: string;
}

interface SessionDoc {
    _id: string;
    expires_at: Date;
    user_id: string;
}
