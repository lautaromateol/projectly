import { Charts, ProjectsCarrousel, UpcomingProjects } from "./ui"

export function AnalyticsPage({ chartsInfo, projects }) {

  return (
    <main className="space-y-4">
      <Charts chartsInfo={chartsInfo} />
      <ProjectsCarrousel projects={projects} />
      <UpcomingProjects projects={projects} />
    </main>
  )
}