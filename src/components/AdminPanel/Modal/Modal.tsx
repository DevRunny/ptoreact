import classNames from "classnames";
import React, {useEffect, useRef, useState} from "react";
import {useActions} from "../../../hooks/useActions";
import style from "./Modal.module.css"

interface Props {
  isActive: boolean
  type: ModalType
}

type ModalType = "response" | "deleteAlert"

const Modal: React.FC<Props> = ({isActive, type, children}) => {

  const modalRef = useRef<HTMLDivElement>(null)
  const modalLoaderRef = useRef<HTMLDivElement>(null)
  const {closeResponseModal} = useActions()

  useEffect(() => {
    if (type === "response" && isActive) {
      modalRef.current?.classList.remove(style.modalActiveContentClose)
      modalRef.current?.classList.remove(style.modalActiveContentResponseOpen)
      modalLoaderRef.current?.classList.remove(style.modalLoaderActive)
      setTimeout(() => {
        closeResponseModal()
      }, 6000)
      setTimeout(() => {
        modalRef.current?.classList.add(style.modalActiveContentClose)
      }, 5000)
      setTimeout(() => {
        modalRef.current?.classList.add(style.modalActiveContentResponseOpen)
        modalLoaderRef.current?.classList.add(style.modalLoaderActive)
      }, 0)
    }
  }, [isActive])

  return (
      <div className={isActive && type ? style.modalActive : style.modal}>
        <div ref={modalRef} className={
          isActive && type ? classNames(style.modalActiveContent, style[`modalActiveContent${type}`]) : classNames(style.modalContent, style[`modalContent${type}`])
        }>
          <div className={style.modalMessageWrap}>{children}</div>
          <span ref={modalLoaderRef} className={style.modalLoader} />
        </div>
      </div>
  )
}

export default Modal