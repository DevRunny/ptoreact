import { InputType } from "zlib"
import { LabelTextContactForm } from "../components/AdminPanel/Pages/Information/ContactForm/ContactForm"
import { Email, Phone } from "../types/contacts"
import { useActions } from "./useActions"

export const useContactForm = (data: any, labelText: LabelTextContactForm) => {
  const {setEmailContacts, setPhoneContacts, addEmail, addPhone, deleteEmail, deletePhone} = useActions()

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
        setPhoneContacts({id, phoneNumber: inputValue} as Phone)
        break
      case "email":
        setEmailContacts({id, email: inputValue} as Email)
        break
      default:
        break
    }
  }

  return {
    addField, 
    deleteField,
    onClickSave
  }
}