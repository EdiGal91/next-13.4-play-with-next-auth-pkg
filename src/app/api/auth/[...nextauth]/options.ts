import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email) return null;
        if (!credentials?.password) return null;

        interface IUser {
          id: string;
          email: string;
          password?: string;
        }

        // have a user
        const user: IUser = {
          id: "123",
          email: "edi@sec.gov",
          password: "asd123",
        };

        const isEmailOk = credentials.email === user.email;
        const isPassOk = credentials.password === user.password;
        if (isEmailOk && isPassOk) {
          delete user.password;
          return user;
        }
        return null;
      },
    }),
  ],
};
