import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TasksPage() {
  return (
    (<div className="flex min-h-screen">
      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Tareas</h1>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Pendientes</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Completadas</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Vencidas</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <ListOrderedIcon className="h-4 w-4 mr-2" />
                  Ordenar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ordenar por:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Fecha de vencimiento</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Prioridad</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Asignado a</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm">
              <PlusIcon className="h-4 w-4 mr-2" />
              Nueva Tarea
            </Button>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Diseñar nueva página de inicio</CardTitle>
              <CardDescription>
                Crear un diseño atractivo y moderno para la página de inicio del sitio web.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground text-sm">Diseñador UX</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Pendiente</Badge>
                  <span className="text-muted-foreground text-sm">Vence el 15/05/2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Marcar como completada
                </Button>
                <Button variant="ghost" size="sm">
                  <FilePenIcon className="h-4 w-4" />
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <TrashIcon className="h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Implementar nueva funcionalidad de búsqueda</CardTitle>
              <CardDescription>
                Agregar un campo de búsqueda en la barra de navegación para que los usuarios puedan encontrar fácilmente
                los proyectos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-muted-foreground text-sm">Desarrolladora Frontend</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Pendiente</Badge>
                  <span className="text-muted-foreground text-sm">Vence el 30/06/2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Marcar como completada
                </Button>
                <Button variant="ghost" size="sm">
                  <FilePenIcon className="h-4 w-4" />
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <TrashIcon className="h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Actualizar documentación del proyecto</CardTitle>
              <CardDescription>
                Revisar y actualizar la documentación del proyecto para asegurar que esté completa y actualizada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>LW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Lisa Wang</p>
                    <p className="text-muted-foreground text-sm">Gerente de Proyecto</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Pendiente</Badge>
                  <span className="text-muted-foreground text-sm">Vence el 01/07/2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Marcar como completada
                </Button>
                <Button variant="ghost" size="sm">
                  <FilePenIcon className="h-4 w-4" />
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <TrashIcon className="h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>)
  );
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>)
  );
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}
