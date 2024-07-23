import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label, Input, Textarea, Select, SelectTrigger, SelectValue, SelectItem, SelectContent, DatePickerWithPresets } from "@/components/ui/forms"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { addProject, editProject } from "@/actions"

export function CreateOrEditProjectForm({ projectToEdit = {}, onCloseModal }) {

  const { id, title, startDate, dueDate, status } = projectToEdit

  const [start, setStartDate] = useState(startDate ? new Date(startDate) : null)
  const [due, setDueDate] = useState(dueDate ? new Date(dueDate) : null)
  const [error, setError] = useState(false)

  const isEditSession = Boolean(id)

  const { handleSubmit, control, register } = useForm({
    defaultValues: isEditSession ?
      {
        title,
        status
      }
      :
      {}
  })

  async function onSubmit({ title, status }) {

    if(!start || !due) {
      setError(true)
      return
    }

    const payload = {
      title,
      status,
      startDate: new Date(start),
      dueDate: new Date(due)
    }

    const response = isEditSession ? await editProject(payload, id) : await addProject(payload)

    if(!response.ok) return 

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
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={(value) => field.onChange(value)} value={field.value} id="status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="InProgress">In Progress</SelectItem>
                    <SelectItem value="Complete">Complete</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Due date</Label>
            <DatePickerWithPresets date={start} setDate={setStartDate} setError={setError} />
            {error ? <p className="text-sm text-red-500">Please select a start date</p> : ""}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Due date</Label>
            <DatePickerWithPresets date={due} setDate={setDueDate} setError={setError} />
            {error ? <p className="text-sm text-red-500">Please select a due date</p> : ""}
          </div>
          <Button className="mt-2" type="submit">{isEditSession ? "Edit" : "Create"} Project</Button>
        </form>
      </CardContent>
    </Card>
  )
}
