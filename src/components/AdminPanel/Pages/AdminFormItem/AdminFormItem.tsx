import React from 'react';
import style from "./AdminFormItem.module.css"

type Props = {
  labelText?: string
  disabled?: boolean
  mainStyle: string
  inputType: InputType
  inputStyle?: string
}

type InputType = "number" | "text" | "email" | "tel" | "password" | "file" | "checkbox"

const AdminFromItem: React.FC<Props> = ({
                                          disabled = true,
                                          labelText,
                                          mainStyle,
                                          inputType,
                                          inputStyle = style.input
                                        }) => {
  return (
      <div className={mainStyle}>
        {labelText && <label className={style.label}>{labelText}</label>}
        <div className={style.wrap}>
          <input disabled={disabled} className={inputStyle} type={inputType} />
          <button className={style.changeButton}>Изменить</button>
        </div>
      </div>
  )
}

export default AdminFromItem
