"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { addUserStory } from "@/actions"

export function AddUserStoryForm({ projectId, onCloseModal }) {

  const { handleSubmit, register, control } = useForm()

  async function onSubmit(data) {
    const response = await addUserStory(projectId, data)

    if (!response.ok) return

    if (response.ok) {
      onCloseModal()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto py-4">
      <CardHeader>
        <CardTitle>Add User Story</CardTitle>
        <CardDescription>Fill out the form to add a new user story to your project.</CardDescription>
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
          <Button className="mt-2" type="submit">Add User Story</Button>
        </form>
      </CardContent>
    </Card>
  );
}

