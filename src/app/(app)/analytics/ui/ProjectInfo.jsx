import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import { isBefore } from "date-fns";
import { Badge } from "@/components/ui/badge";

export function ProjectInfo({ project }) {

  const time = isBefore(new Date(), new Date(project.dueDate)) ? "On Time" :
    formatDate(new Date()) === formatDate(new Date(project.dueDate)) ? "Deliver Today" :
      "Out of Time";

  const { UserStory: userStories, Requirement: requirements, Task: tasks } = project

  const usPercentage = isNaN(Math.round((userStories.filter((story) => story.status === "Complete").length / userStories.length) * 100)) ? 0 : Math.round((userStories.filter((story) => story.status === "Complete").length / userStories.length) * 100)
  const tasksPercentage = isNaN(Math.round((tasks.filter((task) => task.status === "Complete").length / tasks.length) * 100)) ? 0 : Math.round((tasks.filter((task) => task.status === "Complete").length / tasks.length) * 100)
  const requiremensPercentage = isNaN(Math.round((requirements.filter((req) => req.status === "Complete").length / requirements.length) * 100)) ? 0 : Math.round((requirements.filter((req) => req.status === "Complete").length / requirements.length) * 100)

  const usData = `${userStories.filter((story) => story.status === "Complete").length}/${userStories.length}`
  const tasksData = `${tasks.filter((task) => task.status === "Complete").length}/${tasks.length}`
  const requirementsData = `${requirements.filter((req) => req.status === "Complete").length}/${requirements.length}`

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex items-center gap-2">
          <Badge className={`${time === "On Time" ? "bg-green-500 hover:bg-green-600" : time === "Deliver Today" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-red-500 hover:bg-red-500"} text-white`}>{time}</Badge>
          <div className="text-muted-foreground text-sm">Due: {formatDate(new Date(project.dueDate))}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">User Stories</div>
              <div className="text-lg font-bold">{usData}</div>
            </div>
            <div className="text-muted-foreground text-sm">{usPercentage}% completed</div>
            {/* <Progress value={72} className="w-32" /> */}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Tasks</div>
              <div className="text-lg font-bold">{tasksData}</div>
            </div>
            <div className="text-muted-foreground text-sm">{tasksPercentage}% completed</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Functional Requirements</div>
              <div className="text-lg font-bold">{requirementsData}</div>
            </div>
            <div className="text-muted-foreground text-sm">{requiremensPercentage}% completed</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
