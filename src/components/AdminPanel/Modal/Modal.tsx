import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import style from "./Modal.module.css"

interface Props {
  isActive: boolean
  type: ModalType
} 

type ModalType = "response" | "deleteAlert"

const Modal: React.FC<Props> = ({isActive, type, children}) => {

  const ref = useRef<HTMLDivElement>(null)
  const {closeResponseModal} = useActions()

  useEffect(() => {
    if (type === "response" && isActive) {
      setTimeout(() => { 
        closeResponseModal()
      }, 8000)
      setTimeout(() => {
        ref.current?.classList.add(style.modalActiveContentClose)
      }, 5000)
      setTimeout(() => {
        ref.current?.classList.add(style.modalActiveContentresponseOpen)
      }, 0)
    }
  }, [isActive])

  return (
    <div className={isActive && type? style.modalActive : style.modal}>
      <div ref={ref} className={
        isActive && type? classNames(style.modalActiveContent, style[`modalActiveContent${type}`]) : classNames(style.modalContent, style[`modalContent${type}`])
    }>
        {children}
      </div>
    </div>
  )
}

export default Modal