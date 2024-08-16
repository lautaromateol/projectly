"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { usePaginate } from "@/context/PaginateContext";
import { Paginate } from "./Paginate";
import { Task } from "./Task"

export function Tasks({ tasks }) {

  const RESULTS_PER_PAGE = 3

  const incomplete = tasks.filter(({ status }) => status === "Incomplete")
  const complete = tasks.filter(({ status }) => status === "Complete")

  const { incompleteTasksPage, completeTasksPage } = usePaginate()

  const startIncomplete = (incompleteTasksPage - 1) * RESULTS_PER_PAGE
  const endIncomplete = incompleteTasksPage * RESULTS_PER_PAGE

  const startComplete = (completeTasksPage - 1) * RESULTS_PER_PAGE
  const endComplete = completeTasksPage * RESULTS_PER_PAGE

  const incompleteResults = incomplete.slice(startIncomplete, endIncomplete)
  const completeResults = complete.slice(startComplete, endComplete)


  return (
    <div className="w-full">
      <Tabs defaultValue="complete" className="w-full">
        <TabsList className="border-b">
          <TabsTrigger value="incomplete">Incomplete</TabsTrigger>
          <TabsTrigger value="complete">Complete</TabsTrigger>
        </TabsList>
        <TabsContent value="incomplete" className="py-6">

          {incomplete.length > 0 ? (
            <div className="space-y-4">
              <div className="grid gap-4">
                {
                  incompleteResults.map((task) => (
                    <Task key={task.id} task={task} />
                  ))
                }
              </div>
              <Paginate context="incomplete-tasks" results={incomplete.length} />
            </div>
          )
            :
            <div className="flex flex-col items-center justify-center h-[40vh] bg-background">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">There are not tasks at this moment!</h2>
                <p className="text-muted-foreground">
                  Start creating new tasks and organize your day in an efficient way!
                </p>
              </div>
            </div>
          }
        </TabsContent>
        <TabsContent value="complete" className="py-6">
          {complete.length > 0 ? (
            <div className="space-y-4">
              <div className="grid gap-4">
                {
                  completeResults.map((task) => (
                    <Task key={task.id} task={task} />
                  ))
                }
              </div>
              <Paginate context="complete-tasks" results={complete.length} />
            </div>
          )
            :
            <div className="flex flex-col items-center justify-center h-[40vh] bg-background">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">You don&apos;t have completed tasks!</h2>
                <p className="text-muted-foreground">
                  Start completing the tasks you have created!
                </p>
              </div>
            </div>
          }
        </TabsContent>
      </Tabs>
    </div>
  );
}