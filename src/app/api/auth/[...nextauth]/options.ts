import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface IUser {
  id: string;
  email: string;
  password?: string;
}

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
        authType: { type: "text" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email) return null;
        if (!credentials?.password) return null;
        const { email, password, authType } = credentials;
        await dbConnect();
        if (authType === "register") {
          await User.create({
            email,
            password,
          });
        }
        const user: IUser | null = await User.findOne({ email });
        if (!user) return null;

        const isEmailOk = email === user.email;
        const isPassOk = password === user.password;
        if (isEmailOk && isPassOk) {
          delete user.password;
          return user;
        }
        return null;
      },
    }),
  ],
};
