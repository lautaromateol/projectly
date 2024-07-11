"use client"
import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Overlay } from "./Overlay";

const ModalContext = createContext()

export function Modal({ children }) {

  const [name, setName] = useState("")

  const open = setName
  const close = () => setName("")

  return (
    <ModalContext.Provider value={{ open, close, name }}>
      {children}
    </ModalContext.Provider>
  )
}

function Opens({ children, opens }) {

  const { open } = useContext(ModalContext)

  return (
    <div>
      {cloneElement(children, { onClick: () => open(opens) })}
    </div>
  )
}

function Window({ children, window }) {

  const { name, close } = useContext(ModalContext)

  if (window !== name) return null

  return (
    <Overlay>
      <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tremor-background-muted dark:bg-dark-tremor-background-muted rounded-lg shadow-md px-6 py-4 transition-all dark:text-white">
        <button className="absolute right-8 top-6" onClick={close}><HiXMark className="text-tremor-title dark:text-white" /></button>
        {cloneElement(children, { onCloseModal: () => close() })}
      </div>
    </Overlay>
  )
}

Modal.Opens = Opens
Modal.Window = Window
