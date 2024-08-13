import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineFolder } from "react-icons/hi";

export function HomeFeatures() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-4 lg:px-0">
      <div className="space-y-1 mb-12">
        <p className="text-sm font-semibold tracking-tight uppercase text-gray-500">How It Works</p>
        <h2 className="text-4xl font-bold">Application Features</h2>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center gap-2">
            <HiOutlineFolder className="size-10" />
            <h3 className="text-lg font-bold leading-tight">Organize your projects in a efficient way</h3>
          </div>
          <p className="text-base text-gray-500">Create user stories, tasks, functional requirements and define a tech stack to organize your projects in a clear way.</p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="size-10" />
            <h3 className="text-lg font-bold leading-tight">Track your projects dates with a calendar</h3>
          </div>
          <p className="text-base text-gray-500">Remind your projects due dates by a calendar to deliver them in time and don&apos;t miss a release date.</p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center gap-2">
            <HiOutlineChartBar className="size-10" />
            <h3 className="text-lg font-bold leading-tight">Review important information with analytics</h3>
          </div>
          <p className="text-base text-gray-500">Access important data such as the percentage of tasks, user stories, functional requirements completed and more.</p>
        </div>
      </div>
    </section>
  )
}
