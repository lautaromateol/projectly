import Link from "next/link"

export function NavItem({ title, href, icon }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}
