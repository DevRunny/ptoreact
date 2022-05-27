import {ChangeEvent, useState} from "react";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";

export const useAdminFormItem = (disabled: boolean,
                                 inputValue: string | number,
                                 inputType: InputType,
                                 id: string,
                                 onClickSaveFunc: (id: string, inputValue: string, inputType?: InputType) => void,
                                 onClickDeleteFunc?: (id: string) => void) => {
  const [localValue, setLocalValue] = useState<string>(inputValue ? inputValue.toString() : "")
  const [disabledElement, setDisabledElement] = useState<boolean>(disabled)
  const [isChange, setIsChange] = useState<boolean>(!disabled)

  const changeInputValue = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value)
  }

  const onClickDeleteButton = (e: any) => {
    e.preventDefault()
    if (onClickDeleteFunc) {
      onClickDeleteFunc(id)
    }
  }

  const onClickChangeButton = (e: any) => {
    e.preventDefault()
    setIsChange(true)
    setDisabledElement(false)
  }

  const onClickCancelButton = (e: any) => {
    e.preventDefault()
    setIsChange(false)
    setDisabledElement(true)
    setLocalValue(inputValue.toString())
  }

  const onClickSaveButton = (e: any) => {
    e.preventDefault()
    setIsChange(false)
    setDisabledElement(true)
    if (inputType === "tel" || "email") {
      onClickSaveFunc(id, localValue, inputType)
    } else {
      onClickSaveFunc(id, localValue)
    }
  }

  return {
    disabledElement,
    isChange,
    localValue,
    changeInputValue,
    onClickDeleteButton,
    onClickCancelButton,
    onClickChangeButton,
    onClickSaveButton,
    setIsChange,
    setDisabledElement,
    setLocalValue
  }
}