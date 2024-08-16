import { useSidebarContext } from "@/context/SidebarContext"
import Link from "next/link"

export function NavItem({ title, href, icon }) {

  const { close } = useSidebarContext()

  return (
    <Link
      onClick={close}
      href={href}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}
