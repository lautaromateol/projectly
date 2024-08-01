"use client"
import { CreateOrEditProjectForm } from "@/app/(app)/projects/ui/CreateOrEditProjectForm";
import { HiOutlinePlus } from "react-icons/hi";
import { Button } from "./button";
import { Modal } from "./Modal";

export function CreateProjectButton() {
  return (
      <Modal>
        <Modal.Opens opens="create-project-form">
          <Button className="w-full flex items-center gap-2" variant="outline">
            Create <HiOutlinePlus />
          </Button>
        </Modal.Opens>
        <Modal.Window window="create-project-form">
          <CreateOrEditProjectForm />
        </Modal.Window>
      </Modal>
  )
}
