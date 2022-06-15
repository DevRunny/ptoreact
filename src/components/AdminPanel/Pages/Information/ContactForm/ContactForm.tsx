import React from 'react';
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import style from "./ContactForm.module.css"
import {useActions} from "../../../../../hooks/useActions";
import AddFieldButton from "../../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {updateEmails, updatePhones} from "../../../../../API/contacts";

type Props = {
  data: any[]
  labelText: LabelText
  inputType: InputType
}

type LabelText = "Телефон:" | "Электронная почта:"

const ContactForm: React.FC<Props> = ({data, labelText, inputType}) => {

  const {setEmails, setPhones, addEmail, addPhone, deleteEmail, deletePhone} = useActions()

  const addField = () => {
    switch (labelText) {
      case "Телефон:":
        addPhone((data.length + 1).toString())
        break
      case "Электронная почта:":
        addEmail((data.length + 1).toString())
        break
      default:
        break
    }
  }

  const deleteField = (id: string) => {
    switch (labelText) {
      case "Телефон:":
        deletePhone(id)
        break
      case "Электронная почта:":
        deleteEmail(id)
        break
      default:
        break
    }
  }

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    switch (inputType) {
      case "tel":
        const currentPhone = data.find(phone => phone.id === id)
        const newPhones = data.map(phone => {
          if (currentPhone && phone.id === currentPhone.id) {
            return {id: phone.id, phoneNumber: inputValue}
          } else {
            return {id: phone.id, phoneNumber: phone.value}
          }
        })
        updatePhones(inputValue, id)
        setPhones(newPhones)
        break
      case "email":
        const currentEmail = data.find(email => email.id === id)
        const newEmails = data.map(email => {
          if (currentEmail && email.id === currentEmail.id) {
            return {id: email.id, email: inputValue}
          } else {
            return {id: email.id, email: email.value}
          }
        })
        updateEmails(inputValue, id)
        setEmails(newEmails)
        break
      default:
        break
    }
  }

  return (
      <form className={style.form}>
        {data && data.map((item, index) => {
          if (index === 0) {
            return <AdminFormItem key={item.id}
                                  mainStyle={"formItem"}
                                  inputStyle={style.contact}
                                  inputType={inputType}
                                  labelText={labelText}
                                  required={true}
                                  value={item.value}
                                  id={item.id}
                                  onClickSaveFunc={onClickSave}
            />
          } else {
            return <AdminFormItem key={item.id}
                                  mainStyle={"formItem"}
                                  inputStyle={style.contact}
                                  inputType={inputType}
                                  value={item.value}
                                  id={item.id}
                                  onClickSaveFunc={onClickSave}
                                  onClickDeleteFunc={deleteField}
            />
          }
        })}
        <AddFieldButton
            icon={adminPanelImages.plusButton.blue.src}
            textButton={"Добавить поле"}
            onClickFunc={addField}
            buttonStyle={style.addBottomButton}
        />
      </form>
  );
};

export default ContactForm;
