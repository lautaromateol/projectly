"use client"
import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Overlay } from "./Overlay";
import { Card } from "./card";

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
      <Card className="w-1/3 max-h-[700px] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="absolute right-4 top-4" onClick={close}><HiXMark className="dark:text-white" /></button>
        {cloneElement(children, { onCloseModal: () => close() })}
      </Card>
    </Overlay>
  )
}

Modal.Opens = Opens
Modal.Window = Window
