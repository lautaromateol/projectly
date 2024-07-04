import Link from "next/link";
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineClipboard, HiOutlineViewGrid } from "react-icons/hi";

export function Sidebar() {
  return (
    <aside
        className="bg-background border-r border-border flex flex-col w-64 p-4 gap-4">
        <div className="flex items-center gap-2">
          <MountainIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Project Manager</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
            <HiOutlineViewGrid className="w-5 h-5" />
            <span>Proyectos</span>
          </Link>
          <Link
            href="/tasks"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
            <HiOutlineClipboard className="w-5 h-5" />
            <span>Tareas</span>
          </Link>
          <Link
            href="/calendar"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
            <HiOutlineCalendar className="w-5 h-5" />
            <span>Calendario</span>
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
            <HiOutlineChartBar className="w-5 h-5" />
            <span>Analiticas</span>
          </Link>
        </nav>
      </aside>
  )
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}