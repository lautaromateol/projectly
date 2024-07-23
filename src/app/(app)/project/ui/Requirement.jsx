import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AddOrEditFunctionalRequirementsForm } from "../forms/AddOrEditFunctionalRequirementsForm";
import { CheckIcon, MoveHorizontalIcon } from "@/icons";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { deleteFunctionalRequirement } from "@/actions";

export function Requirement({ requirement, projectId }) {
  return (
    <Modal>
      <Card className="relative">
        <CardHeader>
          <CardTitle>{requirement.title}</CardTitle>
          <CardDescription>
            {requirement.description}
          </CardDescription>
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
                  <Modal.Opens opens="edit-requirement-form">
                    <button>Edit</button>
                  </Modal.Opens>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Modal.Opens opens="delete-requirement">
                    <button>Delete</button>
                  </Modal.Opens>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {requirement.requirements.map((req, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" />
                  <span>{req}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Modal.Window window="edit-requirement-form">
        <AddOrEditFunctionalRequirementsForm projectId={projectId} requirementToEdit={requirement} />
      </Modal.Window>
      <Modal.Window window="delete-requirement">
        <ConfirmDelete resourceName="Requirement" onClick={() => deleteFunctionalRequirement(projectId, requirement.id)} />
      </Modal.Window>
    </Modal>
  )
}
