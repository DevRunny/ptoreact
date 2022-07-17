import React from 'react';
import {Button, Modal} from "react-rainbow-components"
import style from "./DialogModal.module.css"
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";

const DialogModal = () => {

  const {deleteAlertModal} = useTypedSelector(state => state.modals)
  const {closeDialogModal} = useActions()

  return (
      <Modal
          isOpen={deleteAlertModal.isOpen}
          size={"small"}
          title={"Подтвердите действие"}
          className={style.dialogModal}
          hideCloseButton={true}
      >
        <div className={style.dialogContent}>
          <p className={style.alert}>Эта операция удалит этот/эти элемент(ы) и это действие не может быть отменено!</p>
          <div className={style.buttons}>
            <Button className={style.cancelButton} size={"medium"} onClick={closeDialogModal}>Отмена</Button>
            <Button className={style.deleteButton} size={"medium"} onClick={async () => {
              if (deleteAlertModal.deleteFunc) {
                await deleteAlertModal.deleteFunc(deleteAlertModal.id)
                closeDialogModal()
              }
            }}>Удалить</Button>
          </div>
        </div>
      </Modal>
  );
};

export default DialogModal;
