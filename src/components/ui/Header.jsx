import { HiOutlineAdjustments, HiOutlineBell, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineCheck, HiOutlineLogout, HiOutlineUser } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { Logo } from "./Logo";

export function Header() {
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HiOutlineUser className="w-5 h-5 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HiOutlineAdjustments className="w-5 h-5 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HiOutlineLogout className="w-5 h-5 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
  )
}