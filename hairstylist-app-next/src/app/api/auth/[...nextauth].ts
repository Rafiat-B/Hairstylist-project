import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        const stylist = await prisma.stylist.findUnique({
          where: { email },
        });

        if (!stylist) {
          throw new Error("No user found with this email");
        }

        const isValid = await bcrypt.compare(password ?? "", stylist.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: stylist.id.toString(),
          email: stylist.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);