"use client";
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/Modal"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Task } from "./Task"
import { AddTaskForm } from "../forms/AddTaskForm";

export function Tasks({ tasks, projectId }) {

  const toDoTasks = tasks.filter(({ status }) => status === "ToDo")
  const doingTasks = tasks.filter(({ status }) => status === "Doing")
  const doneTasks = tasks.filter(({ status }) => status === "Done")

  return (
    <section className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Task Board</h2>
        <Modal>
          <Modal.Opens opens="tasks-form">
            <Button size="sm">Add Task</Button>
          </Modal.Opens>
          <Modal.Window window="tasks-form">
            <AddTaskForm projectId={projectId}/>
          </Modal.Window>
        </Modal>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>To Do</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {toDoTasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Doing</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {doingTasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Done</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {doneTasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
