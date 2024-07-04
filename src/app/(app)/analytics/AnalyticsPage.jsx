"use client"
import Link from "next/link"
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

export function AnalyticsPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Package2Icon className="h-6 w-6" />
          <span className="text-lg font-semibold">Project Analytics</span>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-6 grid gap-6">
        <div>
          <h1 className="text-2xl font-bold">Project Performance</h1>
          <p className="text-muted-foreground">Get a high-level overview of your project portfolio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Active Projects</CardDescription>
              <CardTitle>24</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Overall Progress</CardDescription>
              <CardTitle>78%</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Tasks Completed</CardDescription>
              <CardTitle>1,234</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>On-Time Delivery</CardDescription>
              <CardTitle>92%</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-xl font-bold">Project Details</h2>
          <p className="text-muted-foreground">View the status of each individual project.</p>
          <div className="grid gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project A</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div
                      className="bg-primary rounded-full px-2 py-1 text-xs text-primary-foreground">In Progress</div>
                    <div className="text-muted-foreground text-sm">Due: June 30, 2024</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Progress</div>
                      <div className="text-lg font-bold">72%</div>
                    </div>
                    <Progress value={72} className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Tasks</div>
                      <div className="text-lg font-bold">142/200</div>
                    </div>
                    <div className="text-muted-foreground text-sm">71% completed</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Team</div>
                      <div className="text-lg font-bold">8</div>
                    </div>
                    <div className="flex -space-x-2">
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <div className="bg-muted rounded-full px-2 py-1 text-xs text-muted-foreground">+5</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project B</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div
                      className="bg-secondary rounded-full px-2 py-1 text-xs text-secondary-foreground">
                      Completed
                    </div>
                    <div className="text-muted-foreground text-sm">Completed: May 15, 2024</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Progress</div>
                      <div className="text-lg font-bold">100%</div>
                    </div>
                    <Progress value={100} className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Tasks</div>
                      <div className="text-lg font-bold">200/200</div>
                    </div>
                    <div className="text-muted-foreground text-sm">100% completed</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Team</div>
                      <div className="text-lg font-bold">6</div>
                    </div>
                    <div className="flex -space-x-2">
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <div className="bg-muted rounded-full px-2 py-1 text-xs text-muted-foreground">+3</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project C</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="bg-muted rounded-full px-2 py-1 text-xs text-muted-foreground">On Hold</div>
                    <div className="text-muted-foreground text-sm">Due: September 30, 2024</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Progress</div>
                      <div className="text-lg font-bold">32%</div>
                    </div>
                    <Progress value={32} className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Tasks</div>
                      <div className="text-lg font-bold">64/200</div>
                    </div>
                    <div className="text-muted-foreground text-sm">32% completed</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Team</div>
                      <div className="text-lg font-bold">4</div>
                    </div>
                    <div className="flex -space-x-2">
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <img
                        src="/placeholder.svg"
                        width="32"
                        height="32"
                        className="rounded-full border"
                        alt="Avatar" />
                      <div className="bg-muted rounded-full px-2 py-1 text-xs text-muted-foreground">+2</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}
