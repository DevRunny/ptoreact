import React from 'react';
import style from "./AdminFormItem.module.css"
import classNames from "classnames";
import Button from "../../../Button/Button";
import {useAdminFormItem} from "../../../../hooks/useAdminFormItem";

export type AdminFormItemProps = {
    labelText?: string
    disabled?: boolean
    mainStyle: string
    inputType?: InputType
    inputStyle?: string
    required?: boolean
    value: string | number
    id: string
    onClickSaveFunc: (id: string, inputValue: string, inputType?: InputType) => void
    onClickDeleteFunc?: (id: string) => void
    itemType?: "input" | "textArea"
}

export type InputType = "number" | "text" | "email" | "tel" | "password" | "file" | "checkbox"

const AdminFromItem: React.FC<AdminFormItemProps> = ({
                                                         disabled = true,
                                                         labelText,
                                                         mainStyle,
                                                         inputType = "text",
                                                         inputStyle,
                                                         required,
                                                         value = "",
                                                         id,
                                                         onClickSaveFunc,
                                                         onClickDeleteFunc,
                                                         itemType = "input"
                                                     }) => {

    const formItem = useAdminFormItem(disabled, value, inputType, id, onClickSaveFunc, onClickDeleteFunc)

    const checkItemType = () => {
        switch (itemType) {
            case "input":
                return (
                    <input
                        id={id}
                        disabled={formItem.disabledElement}
                        className={inputStyle ? classNames(style.input, inputStyle) : style.input}
                        type={inputType}
                        value={formItem.localValue}
                        onChange={(e) => {
                            formItem.changeInputValue(e)
                        }}/>
                )
            case "textArea":
                return (
                    <textarea
                        id={id}
                        disabled={formItem.disabledElement}
                        className={inputStyle ? classNames(style.input, inputStyle) : style.input}
                        style={{resize: "none"}}
                        value={formItem.localValue}
                        onChange={(e) => {
                            formItem.changeInputValue(e)
                        }}/>
                )
            default:
                break
        }
    }

    return (
        <div className={mainStyle}>
            {labelText && <label className={style.label} htmlFor={id}>{labelText}</label>}
            <div className={style.wrap}>
                {checkItemType()}
                {formItem.isChange ?
                    <>
                        <Button
                            text={"Сохранить"}
                            mainStyle={classNames(style.changeButton, style.saveButton)}
                            type={"button"}
                            func={formItem.onClickSaveButton}
                        />
                        <Button
                            text={"Отмена"}
                            mainStyle={classNames(style.changeButton, style.cancelButton)}
                            type={"button"}
                            func={formItem.onClickCancelButton}
                        />
                    </>
                    : required ?
                        <Button
                            text={"Изменить"}
                            mainStyle={style.changeButton}
                            type={"button"}
                            func={() => {
                                formItem.setIsChange(true)
                                formItem.setDisabledElement(false)
                            }}/>
                        :
                        <>
                            <Button
                                text={"Изменить"}
                                mainStyle={style.changeButton}
                                type={"button"}
                                func={formItem.onClickChangeButton}
                            />
                            <Button
                                text={"Удалить"}
                                type={"button"}
                                mainStyle={classNames(style.changeButton, style.deleteButton)}
                                func={formItem.onClickDeleteButton}
                            />
                        </>
                }
            </div>
        </div>
    )
}

export default AdminFromItem
