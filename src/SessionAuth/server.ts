import NextAuth from "next-auth";
import { getServerSession } from "next-auth";
import { authOptions } from "./AuthOptions";

const handler = NextAuth(authOptions);
const auth = () => getServerSession(authOptions);

export { handler, auth };