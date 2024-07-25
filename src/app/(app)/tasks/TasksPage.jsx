"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { HiOutlineFilter, HiOutlineViewList } from "react-icons/hi"
import { Task } from "./ui";

export function TasksPage({ tasks }) {

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <HiOutlineFilter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Incomplete</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Complete</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Asigned to</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <HiOutlineViewList className="h-4 w-4 mr-2" />
                  Order
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Order by:</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>Due date</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
}