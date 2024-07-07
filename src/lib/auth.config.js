import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "./prisma"

const authOptions = {
  pages: {
    signIn: "/auth/login"
  },
  authorized({ auth, request: { nextUrl } }) {
    return true;
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) throw new Error("This user is not registered")

        if (!bcrypt.compareSync(credentials.password, user.password)) throw new Error("Incorrect credentials")

        const { password, ...rest } = user

        return rest
      },
    }),
  ],
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)