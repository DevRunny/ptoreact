import {ChangeEvent, useCallback, useState} from "react";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";

export const useAdminFormItem = (disabled: boolean,
                                 inputValue: string | number,
                                 inputType: InputType,
                                 id: string,
                                 onClickSaveFunc: (id: string, inputValue: string, inputType?: InputType) => void,
                                 onClickDeleteFunc?: (id: string) => void) => {
    const [localInputValue, setLocalInputValue] = useState<string>(inputValue ? inputValue.toString() : "")
    const [disabledInput, setDisabledInput] = useState<boolean>(disabled)
    const [isChange, setIsChange] = useState<boolean>(false)

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalInputValue(e.target.value)
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
        setDisabledInput(false)
    }

    const onClickCancelButton = (e: any) => {
        e.preventDefault()
        setIsChange(false)
        setDisabledInput(true)
        setLocalInputValue(inputValue.toString())
    }

    const onClickSaveButton = (e: any) => {
        e.preventDefault()
        setIsChange(false)
        setDisabledInput(true)
        if (inputType === "tel" || "email") {
            onClickSaveFunc(id, localInputValue, inputType)
        } else {
            onClickSaveFunc(id, localInputValue)
        }
    }

    return {
        disabledInput,
        isChange,
        localInputValue,
        changeInputValue,
        onClickDeleteButton,
        onClickCancelButton,
        onClickChangeButton,
        onClickSaveButton,
        setIsChange,
        setDisabledInput
    }
}