import React from 'react';
import {Calendar, Modal} from "react-rainbow-components";
import style from "./Modal.module.css"

interface IModalWindow {
  handleChangeDate: (value: Date) => void
  isOpen: boolean,
  closeModalWindow: () => void
}

const ModalWindow: React.FC<IModalWindow> = ({handleChangeDate, isOpen, closeModalWindow}) => {

  const getMaxDate = () => {
    const today = new Date()
    const maxDateYear = today.getFullYear()
    const maxDateMonth = today.getMonth() + 2
    const maxDateDay = today.getDay()
    return new Date(maxDateYear, maxDateMonth, maxDateDay)
  }

  return (
      <Modal isOpen={isOpen} hideCloseButton={true} className={style.modal}>
        <Calendar minDate={new Date()} maxDate={getMaxDate()} onChange={(date) => {
          handleChangeDate(date)
          closeModalWindow()
        }} />
      </Modal>
  );
};

export default ModalWindow;
