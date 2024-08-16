"use client"
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  
  return(
    <SidebarContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  return useContext(SidebarContext)
}