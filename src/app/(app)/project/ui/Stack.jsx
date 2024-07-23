import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AddOrEditTechStackForm } from "../forms/AddOrEditTechStackForm";
import { MoveHorizontalIcon, CheckIcon } from "@/icons";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { deleteTechStack } from "@/actions";

export function Stack({ stack, projectId }) {
  return (
    <Modal>
      <Card className="relative">
        <CardHeader>
          <CardTitle>{stack.type}</CardTitle>
          <div className="flex items-center gap-2 absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="w-5 h-5" />
                  <span className="sr-only">Más opciones</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Modal.Opens opens="edit-stack-form">
                    <button>Edit</button>
                  </Modal.Opens>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Modal.Opens opens="delete-stack">
                    <button>Delete</button>
                  </Modal.Opens>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {
              stack.tools.map((t, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4" />
                    <span>{t}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </CardContent>
      </Card>
      <Modal.Window window="edit-stack-form">
        <AddOrEditTechStackForm stackToEdit={stack} projectId={projectId} />
      </Modal.Window>
      <Modal.Window window="delete-stack">
        <ConfirmDelete resourceName="Tech Stack" onClick={() => deleteTechStack(projectId, stack.id)} />
      </Modal.Window>
    </Modal>
  )
}
