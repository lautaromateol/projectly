"use client"
import { useState } from "react"
import { Label, Input, Textarea, Select, SelectTrigger, SelectValue, SelectItem, SelectContent, DatePickerWithPresets } from "@/components/ui/forms"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { addUserStory, editUserStory } from "@/actions"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"

export function AddOrEditUserStoryForm({ projectId, onCloseModal, storyToEdit = {} }) {

  const { id, title, description, status, due, Task: tasks } = storyToEdit

  const [date, setDate] = useState(due ? new Date(due) : null)

  const [error, setError] = useState(false)
  
  const [isPending, setIsPending] = useState(false)

  const isEditSession = Boolean(id)

  const { handleSubmit, register, control } = useForm({
    defaultValues: isEditSession
      ?
      {
        title,
        description,
        status,
        due,
      }
      :
      {}
  })

  async function onSubmit(data) {

    setIsPending(true)

    if (!date) {
      setError(true)
      setIsPending(false)
      return
    }

    const payload = {
      ...data,
      due: new Date(date)
    }

    const response = isEditSession ? await editUserStory(projectId, id, payload) : await addUserStory(projectId, payload)

    if (!response.ok) {
      setIsPending(false)
      return
    }

    if (response.ok) {
      onCloseModal()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditSession ? "Edit" : "Add"} User Story</CardTitle>
        <CardDescription>Fill out the form {isEditSession ? "inputs to edit this user story." : "add a new user story to this project."}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input {...register("title", { required: true })} id="title" placeholder="Enter user story title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea {...register("description", { required: true })} id="description" placeholder="Describe the user story" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select onValueChange={(value) => field.onChange(value)} value={field.value} id="status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="InProgress">In Progress</SelectItem>
                    <SelectItem value="Complete">Complete</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Due date</Label>
            <DatePickerWithPresets date={date} setDate={setDate} />
            {error ? <p className="text-sm text-red-500">Please select a due date</p> : ""}
          </div>
          <Button disabled={isPending} className="mt-2" type="submit">{isEditSession ? "Edit" : "Add"} User Story</Button>
        </form>
      </CardContent>
    </Card>
  );
}

