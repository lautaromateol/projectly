"use client"
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineViewGrid } from "react-icons/hi";
import { useSidebarContext } from "@/context/SidebarContext";
import { HandleSidebarBtn } from "./HandleSidebarBtn";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";

const navItems = [
  {
    title: "Projects",
    href: "/projects",
    icon: <HiOutlineViewGrid className="w-5 h-5" />
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

  const { isOpen, close } = useSidebarContext()

  return (
    <>
      {isOpen && (
        <aside
          className={`bg-background border-r border-border flex flex-col w-52 lg:w-64 p-4 gap-4 fixed top-0 lg:sticky lg:top-0 h-screen z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}>
          <Logo />
          <nav className="flex flex-col gap-2">
            {navItems.map(({ title, href, icon }) => (
              <NavItem key={href} title={title} href={href} icon={icon} />
            ))}
          </nav>
          <HandleSidebarBtn context="close" />
        </aside>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={close}
        />
      )}
    </>
  )
}