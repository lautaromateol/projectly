import { HandleSidebarBtn } from "@/components/ui/HandleSidebarBtn";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/ui/Sidebar"
import { Header } from "@/components/ui/Header"
import { auth } from "@/lib/auth.config";

export default async function AppLayout({ children }) {

  const session = await auth()

  const isAuthenticated = !!session?.user

  if (!isAuthenticated) redirect("/auth/login")

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
     <HandleSidebarBtn context="open" />
    </div>
  );
}

