import { AnalyticsPage } from "./AnalyticsPage";
import { getAnalytics } from "@/actions";
import { isBefore } from "date-fns";

export default async function Analytics() {

  const response = await getAnalytics()

  if(!response.ok) return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-2">
        <p>There was an error obtaining the analytics</p>
      </div>
    </div>
  )

  const { tasks, userStories, requirements, projects } = response

  const tasksInfo = {
    title: "Completed Tasks",
    data: `${tasks.filter((task) => task.status === "Complete").length}/${tasks.length}` ,
  }

  const userStoriesInfo = {
    title: "Completed User Stories",
    data: `${userStories.filter((story) => story.status === "Complete").length}/${userStories.length}` ,
  }

  const requirementsInfo = {
    title: "Completed Functional Requirements",
    data: `${requirements.filter((req) => req.status === "Complete").length}/${requirements.length}` ,
  }

  const projectsInfo = {
    title: "Upcoming Projects",
    data: projects.filter((project) => isBefore(new Date(), new Date(project.dueDate))).length
  } 

  const chartsInfo = {
    tasksInfo,
    userStoriesInfo,
    requirementsInfo,
    projectsInfo
  }

  return (
    <AnalyticsPage
      chartsInfo={chartsInfo}
      projects={projects}
    />
  )
}
