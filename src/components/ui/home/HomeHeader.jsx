import { auth } from "@/lib/auth.config";
import { Logo } from "../Logo";
import Link from "next/link";

export async function HomeHeader() {

  const session = await auth()

  const isAuthenticated = !!session?.user

  return (
    <header className="bg-white max-w-7xl mx-auto py-4 fixed top-0 left-0 right-0 z-50 px-4 lg:px-0">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-4">
          <li className="font-medium text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="font-medium text-sm">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium text-sm">
            {
              isAuthenticated ?
                <Link href="/projects">Dashboard</Link>
                :
                <Link href="/auth/login">Sign in</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}
