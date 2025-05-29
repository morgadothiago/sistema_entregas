import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { User } from "@/app/types/User";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  interface User {
    token: string;
  }
}

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not defined");
}

export const authOptions: NextAuthConfig = {
  trustHost: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          // Realiza a requisição de login diretamente usando axios
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          const { token, user } = response.data;

          // Retorna o usuário com o token para ser armazenado no JWT
          return {
            ...user,
            id: String(user.id), // Garante que o id seja string
            token,
          } as User & { token: string; id: string };
        } catch (error) {
          console.error("Erro na autorização:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      session.accessToken = token.accessToken as typeof session.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
