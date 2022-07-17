import classNames from "classnames";
import React, {useEffect, useRef} from "react";
import {useActions} from "../../../hooks/useActions";
import style from "./NotificationModal.module.css"

interface Props {
  isActive: boolean
  type: ModalType
}

type ModalType = "response" | "deleteAlert"

const NotificationModal: React.FC<Props> = ({isActive, type, children}) => {

  const modalRef = useRef<HTMLDivElement>(null)
  const modalLoaderRef = useRef<HTMLDivElement>(null)
  const {closeResponseModal} = useActions()

  useEffect(() => {
    if (type === "response" && isActive) {
      setTimeout(() => {
        modalRef.current?.classList.remove(style.modalActiveContentClose)
        modalRef.current?.classList.remove(style.modalActiveContentResponseOpen)
        modalLoaderRef.current?.classList.remove(style.modalLoaderActive)
        closeResponseModal()
      }, 6000)
      setTimeout(() => {
        modalRef.current?.classList.add(style.modalActiveContentClose)
      }, 5000)
      modalRef.current?.classList.add(style.modalActiveContentResponseOpen)
      modalLoaderRef.current?.classList.add(style.modalLoaderActive)
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

export default NotificationModal