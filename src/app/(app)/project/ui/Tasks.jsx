import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Task } from "./Task"

export function Tasks({ tasks }) {

  const incomplete = tasks.filter(({ status }) => status === "Incomplete")
  const complete = tasks.filter(({ status }) => status === "Complete")

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Tabs defaultValue="complete" className="w-full">
        {complete.length > 0 || incomplete.length > 0 && (
          <TabsList className="border-b">
            <TabsTrigger value="incomplete">Incomplete</TabsTrigger>
            <TabsTrigger value="complete">Complete</TabsTrigger>
          </TabsList>
        )}
        <TabsContent value="incomplete" className="py-6">

          {incomplete.length > 0 ? (

            <div className="grid gap-4">
              {
                incomplete.map((task) => (
                  <Task key={task.id} task={task} />
                ))
              }
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
            <div className="grid gap-4">
              {
                complete.map((task) => (
                  <Task key={task.id} task={task} />
                ))
              }
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