import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const authOptions = {
  pages: {
    signIn: "/auth/login"
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {

        const { password, callbackUrl, ...rest } = credentials

        return rest
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },

    session({ session, token, user }) {
      session.user = token.data
      return session;
    },
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)