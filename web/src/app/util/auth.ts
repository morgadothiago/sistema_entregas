import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/app/services/api";
import { User } from "@/app/types/User";

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
      async authorize(
        credentials: Partial<Record<"email" | "password", unknown>>
      ) {
        if (
          !credentials
        ) {
          return null;
        }
        try {
          if (!credentials) {
            return null;
          }

          const res = await api.login(credentials.email as string, credentials.password as string);

          if ("status" in res) return null;

          const { token, user } = res;

          api.setToken(token);

          return {
            ...user,
            id: user.id.toString(), // Ensure the 'id' is a string as required by next-auth
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      (session as unknown as { user: User }).user = token.user as User;

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin", // Página de login personalizada
    error: "/signin", // Redireciona erros de volta para o login
  },
};

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth(authOptions);