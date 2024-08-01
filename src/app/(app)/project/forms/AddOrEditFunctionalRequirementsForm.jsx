"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { addFunctionalRequirement, editFunctionalRequirement } from "@/actions"
import { HiPlusCircle, HiOutlineTrash } from "react-icons/hi"
import { Label, Input, Textarea } from "@/components/ui/forms"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"

export function AddOrEditFunctionalRequirementsForm({ projectId, onCloseModal, requirementToEdit = {} }) {

  const [isPending, setIsPending] = useState(false)

  const { id, title, description, requirements } = requirementToEdit

  const isEditSession = Boolean(id)

  const { handleSubmit, register, control, formState: { isDirty } } = useForm({
    defaultValues: isEditSession ?
      {
        title,
        description,
        requirements: requirements.map((requirement) => {
          return { value: requirement.description, id: requirement.id }
        })
      }
      :
      {
        requirements: [{ value: "" }]
      }
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: "requirements"
  })

  async function onSubmit(data) {
    
    setIsPending(true)

    const requirementsData = isEditSession ? data.requirements : data.requirements.map((req) => req.value).filter((req) => req !== "");

    const payload = {
      title: data.title,
      description: data.description,
      requirements: requirementsData,
    };

    const response = isEditSession ? await editFunctionalRequirement(projectId, id, payload) : await addFunctionalRequirement(projectId, payload)

    if (!response.ok) {
      setIsPending(false)
      return
    }

      onCloseModal()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditSession ? "Edit" : "Add"} Functional Requirement</CardTitle>
        <CardDescription>Fill out the form {isEditSession ? "inputs to edit this functional requirement." : "add a new functional requirement to this project."}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input {...register("title", { required: true })} id="title" placeholder="Enter requirement title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description", { required: true })} id="description" placeholder="Describe requirement" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirement">Requirements</Label>
            {
              fields.map((item, index) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Input
                    {...register(`requirements.${index}.value`, { required: true })}
                    placeholder="Enter requirement feature"
                  />
                  {fields.length > 1 && (
                    <HiOutlineTrash type="button" onClick={() => remove(index)} className="cursor-pointer" />
                  )}
                </div>
              ))
            }
            <button type="button" size="sm" onClick={() => append({ value: "" })} className="flex items-center gap-1 cursor-pointer hover:underline">
              <span className="text-xs font-semibold">Add another</span>
              <HiPlusCircle />
            </button>
          </div>
          <Button disabled={isPending || !isDirty} className="mt-2" type="submit">{isEditSession ? "Edit" : "Add"} Functional Requirement</Button>
        </form>
      </CardContent>
    </Card>
  );
}

