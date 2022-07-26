import React from 'react';
import {Modal} from "react-rainbow-components";
import style from "./Modal.module.css"

interface IModalWindow {
  isOpen: boolean,
}

const ModalWindow: React.FC<IModalWindow> = ({isOpen, children}) => {
  return (
      <Modal isOpen={isOpen} hideCloseButton={true} className={style.modal} style={{
        position: "relative"
      }}>
        {children}
      </Modal>
  );
};

export default ModalWindow;
