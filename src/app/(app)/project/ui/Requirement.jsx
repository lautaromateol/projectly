import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AddOrEditFunctionalRequirementsForm } from "../forms/AddOrEditFunctionalRequirementsForm";
import { deleteFunctionalRequirement, updateRequirementStatus } from "@/actions";
import { MoveHorizontalIcon } from "@/icons";
import { ConfirmDelete } from "@/components/ui/ConfirmDelete";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";

export function Requirement({ requirement: { id, title, description, Requirement: requirements }, projectId }) {

  const [isPending, setIsPending] = useState(false)

  async function handleEditRequirement(req) {

    setIsPending(true)

    const status = req.status === "Complete" ? "Incomplete" : "Complete"

    const response = await updateRequirementStatus(projectId, req.id, status)

    if(!response.ok) {
      setIsPending(false)
      return
    }

    setIsPending(false)
    
  }

  return (
    <Modal>
      <Card className="relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
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
            {requirements.map((req) => (
              <li key={req.id}>
                <div className="flex items-center gap-2">
                  <input onChange={() => handleEditRequirement(req)} type="checkbox" disabled={isPending} defaultChecked={req.status === "Complete"} className="w-4 h-4" />
                  <span className={`${req.status === "Complete" ? "line-through" : ""}`}>{req.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Modal.Window window="edit-requirement-form">
        <AddOrEditFunctionalRequirementsForm projectId={projectId} requirementToEdit={{ id, title, description, requirements }} />
      </Modal.Window>
      <Modal.Window window="delete-requirement">
        <ConfirmDelete resourceName="Requirement" onClick={() => deleteFunctionalRequirement(projectId, id)} />
      </Modal.Window>
    </Modal>
  )
}
