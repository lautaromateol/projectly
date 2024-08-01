"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreateOrEditProjectForm } from "./CreateOrEditProjectForm";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoveHorizontalIcon } from "@/icons";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { deleteProject } from "@/actions";
import { formatDate } from "@/lib/utils";
import { isBefore } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";

export function Project({ project }) {

  const time = isBefore(new Date(), new Date(project.dueDate)) ? "On Time" :
    formatDate(new Date()) === formatDate(new Date(project.dueDate)) ? "Deliver Today" :
      "Out of Time";

  return (
    <Modal>
      <TableRow>
        <TableCell>{project.title}</TableCell>
        <TableCell>
          <Badge className={`${time === "On Time" ? "bg-green-500 hover:bg-green-600" : time === "Deliver Today" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-red-500 hover:bg-red-500"} text-white`}>{time}</Badge>
        </TableCell>
        <TableCell>{formatDate(project.startDate)}</TableCell>
        <TableCell>{formatDate(project.dueDate)}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoveHorizontalIcon className="w-5 h-5" />
                <span className="sr-only">Más opciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={`/project/${project.id}`}>Details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Modal.Opens opens="edit-project-form">
                  <button>Edit</button>
                </Modal.Opens>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Modal.Opens opens="delete-project">
                  <button>Delete</button>
                </Modal.Opens>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <Modal.Window window="edit-project-form">
        <CreateOrEditProjectForm projectToEdit={project} />
      </Modal.Window>
      <Modal.Window window="delete-project">
        <ConfirmDelete onClick={() => deleteProject(project.id)} resourceName="Project" />
      </Modal.Window>
    </Modal>
  )
}