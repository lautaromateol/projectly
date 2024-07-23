"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoveHorizontalIcon } from "@/icons";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { deleteProject } from "@/actions";
import { CreateOrEditProjectForm } from "./CreateOrEditProjectForm";

export default function Project({ project }) {

  const status = project.status === "InProgress" ? "In Progress" : "Complete"

  return (
    <Modal>
      <TableRow>
        <TableCell>{project.title}</TableCell>
        <TableCell>
          <Badge variant="secondary">{status}</Badge>
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