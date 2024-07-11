import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineClipboard, HiOutlineViewGrid } from "react-icons/hi";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

const navItems = [
  {
    title: "Projects",
    href: "/projects",
    icon: <HiOutlineViewGrid className="w-5 h-5" />
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: <HiOutlineClipboard className="w-5 h-5" />
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: <HiOutlineCalendar className="w-5 h-5" />
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <HiOutlineChartBar className="w-5 h-5" />
  }
]

export function Sidebar() {
  return (
    <aside
      className="bg-background border-r border-border flex flex-col w-64 p-4 gap-4 sticky top-0 h-screen">
      <Logo />
      <nav className="flex flex-col gap-2">
        {navItems.map(({ title, href, icon }) => (
          <NavItem key={href} title={title} href={href} icon={icon} />
        ))}
      </nav>
    </aside>
  )
}
