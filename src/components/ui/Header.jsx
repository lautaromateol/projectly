import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { HiOutlineBell, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineCheck } from "react-icons/hi";
import { ProfileDropdown } from "./ProfileDropdown";
import { Button } from "./button";
import { Logo } from "./Logo";
import { auth } from "@/lib/auth.config";
import Link from "next/link";

export async function Header() {

  const session = await auth()

  const isAuthenticated = !!session?.user

  return (
    <header
      className="bg-background border-b border-border flex items-center justify-between px-4 h-14">
      <Logo />
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <HiOutlineBell className="w-5 h-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <HiOutlineCalendar className="w-5 h-5" />
                <div>
                  <p className="font-medium">Upcoming Meeting</p>
                  <p className="text-muted-foreground text-sm">Tomorrow at 10:00 AM</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <HiOutlineBriefcase className="w-5 h-5" />
                <div>
                  <p className="font-medium">New Project Assigned</p>
                  <p className="text-muted-foreground text-sm">Acme Inc. Website Redesign</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <HiOutlineCheck className="w-5 h-5" />
                <div>
                  <p className="font-medium">Task Due Today</p>
                  <p className="text-muted-foreground text-sm">Finish wireframes for homepage</p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {isAuthenticated ?
          <ProfileDropdown user={session.user} />
          : <Link href="/auth/login">Sign in</Link>
        }
      </div>
    </header>
  )
}