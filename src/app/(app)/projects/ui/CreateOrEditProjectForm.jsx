import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label, Input, Textarea, DatePickerWithPresets } from "@/components/ui/forms"
import { addProject, editProject } from "@/actions"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

export function CreateOrEditProjectForm({ projectToEdit = {}, onCloseModal }) {

  const { id, title, description, startDate, dueDate } = projectToEdit

  const [start, setStartDate] = useState(startDate ? new Date(startDate) : null)
  const [due, setDueDate] = useState(dueDate ? new Date(dueDate) : null)
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const isEditSession = Boolean(id)

  const { handleSubmit, register, formState: { isDirty } } = useForm({
    defaultValues: isEditSession ?
      {
        title,
        description,
      }
      :
      {}
  })

  async function onSubmit({ title, description }) {

    setIsPending(true)

    if (!start || !due) {
      setError(true)
      setIsPending(false)
      return
    }

    const payload = {
      title,
      description,
      startDate: new Date(start),
      dueDate: new Date(due)
    }

    const response = isEditSession ? await editProject(payload, id) : await addProject(payload)

    if (!response.ok) {
      setIsPending(false)
      return
    }

    onCloseModal()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditSession ? "Edit" : "Add"} Project</CardTitle>
        <CardDescription>Fill out the form {isEditSession ? "inputs to edit this project." : "to create a new project."}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input {...register("title", { required: true })} id="title" placeholder="Enter project title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description", { required: true })} id="description" placeholder="Enter project description" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Start date</Label>
            <DatePickerWithPresets date={start} setDate={setStartDate} setError={setError} />
            {error ? <p className="text-sm text-red-500">Please select a start date</p> : ""}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Due date</Label>
            <DatePickerWithPresets date={due} setDate={setDueDate} setError={setError} />
            {error ? <p className="text-sm text-red-500">Please select a due date</p> : ""}
          </div>
          <Button disabled={isPending || !isDirty} className="mt-2" type="submit">{isEditSession ? "Edit" : "Create"} Project</Button>
        </form>
      </CardContent>
    </Card>
  )
}
