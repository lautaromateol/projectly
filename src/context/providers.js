"use client"
import { PaginateProvider } from "./PaginateContext"
import { SidebarProvider } from "./SidebarContext"

export function Provider({ children }) {
  return (
    <PaginateProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </PaginateProvider>
  )
}
