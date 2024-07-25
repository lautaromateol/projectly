import { getTasks } from "@/actions";
import { TasksPage } from "./TasksPage";

export default async function Tasks() {

  const response = await getTasks()

  if (response.ok) {

    const { tasks } = response

    console.log(tasks)

    return (
      <TasksPage tasks={tasks} />
    )
  }

}
