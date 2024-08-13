"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { HiOutlineLogout, HiOutlineUser } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { Button } from "./button";
import Link from "next/link";


export function ProfileDropdown({ user }) {

  const name = user.name

  const initials = name.split(' ').length === 1 ? name.slice(0, 2).toUpperCase() : name.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="sr-only">User Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex items-center cursor-pointer" href="/profile">
            <HiOutlineUser className="w-5 h-5 mr-2" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/auth/login" })}>
          <HiOutlineLogout className="w-5 h-5 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
