import { Sidebar } from "@/components/ui/Sidebar"
import { Header } from "@/components/ui/Header"

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

