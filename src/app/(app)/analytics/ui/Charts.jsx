import { Chart } from ".";

export function Charts({ chartsInfo: { tasksInfo, userStoriesInfo, requirementsInfo, projectsInfo } }) {

  return (
    <section className="space-y-4 max-w-6xl mx-auto">
      <div>
        <h2 className="text-xl font-semibold">Overview</h2>
        <h3 className="text-sm font-light text-gray-500">Review key statistics about your projects</h3>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Chart title={tasksInfo.title} data={tasksInfo.data} />
        <Chart title={userStoriesInfo.title} data={userStoriesInfo.data} />
        <Chart title={requirementsInfo.title} data={requirementsInfo.data} />
        <Chart title={projectsInfo.title} data={projectsInfo.data} />
      </div>
    </section>
  )
}
