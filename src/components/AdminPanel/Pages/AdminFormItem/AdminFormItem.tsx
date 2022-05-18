import React, {ChangeEvent, useState} from 'react';
import style from "./AdminFormItem.module.css"
import classNames from "classnames";

type Props = {
  labelText?: string
  disabled?: boolean
  mainStyle: string
  inputType: InputType
  inputStyle?: string
  required?: boolean
  inputValue: string | number
  id: string
  onClickSaveFunc: (id: string, inputValue: string, inputType?: InputType) => void
  onClickDeleteFunc?: (id: string) => void
}

export type InputType = "number" | "text" | "email" | "tel" | "password" | "file" | "checkbox"

const AdminFromItem: React.FC<Props> = ({
                                          disabled = true,
                                          labelText,
                                          mainStyle,
                                          inputType,
                                          inputStyle = style.input,
                                          required,
                                          inputValue = "",
                                          id,
                                          onClickSaveFunc,
                                          onClickDeleteFunc
                                        }) => {
  const [localInputValue, setLocalInputValue] = useState<string>(inputValue ? inputValue.toString() : "")
  const [disabledInput, setDisabledInput] = useState<boolean>(disabled)
  const [isChange, setIsChange] = useState<boolean>(false)

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(e.target.value)
  }
  return (
      <div className={mainStyle}>
        {labelText && <label className={style.label} htmlFor={id}>{labelText}</label>}
        <div className={style.wrap}>
          <input
              id={id}
              disabled={disabledInput}
              className={inputStyle}
              type={inputType}
              value={localInputValue}
              onChange={(e) => {
                changeInputValue(e)
              }} />
          {isChange ?
              <>
                <button className={classNames(style.changeButton, style.saveButton)}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsChange(false)
                          setDisabledInput(true)
                          if (inputType === "tel" || "email") {
                            onClickSaveFunc(id, localInputValue, inputType)
                          } else {
                            onClickSaveFunc(id, localInputValue)
                          }
                        }}>Сохранить
                </button>
                <button
                    className={classNames(style.changeButton, style.cancelButton)}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsChange(false)
                      setDisabledInput(true)
                      setLocalInputValue(inputValue.toString())
                    }}>Отмена
                </button>
              </>
              : required ?
                  <button className={style.changeButton} onClick={() => {
                    setIsChange(true)
                    setDisabledInput(false)
                  }}>Изменить</button>
                  :
                  <>
                    <button className={style.changeButton} onClick={(e) => {
                      e.preventDefault()
                      setIsChange(true)
                      setDisabledInput(false)
                    }}>Изменить
                    </button>
                    <button className={classNames(style.changeButton, style.deleteButton)}
                            onClick={(e) => {
                              e.preventDefault()
                              if (onClickDeleteFunc) {
                                onClickDeleteFunc(id)
                              }
                            }}>Удалить
                    </button>
                  </>
          }
        </div>
      </div>
  )
}

export default AdminFromItem
