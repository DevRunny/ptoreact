import AdminFormItem, {AdminFormItemProps} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import React from "react";

interface InjectedProps extends AdminFormItemProps {
  textNotation: string
  styleNotation: string
}

export const withNotation = (Component: React.ComponentType<AdminFormItemProps>) => {
  return (props: InjectedProps) => {
    return (
        <div>
          <Component
              id={props.id}
              onClickSaveFunc={props.onClickSaveFunc}
              onClickDeleteFunc={props.onClickDeleteFunc}
              inputValue={props.inputValue}
              inputType={props.inputType}
              labelText={props.labelText}
              required={props.required}
              inputStyle={props.inputStyle}
              mainStyle={props.mainStyle}
              disabled={props.disabled}
          />
          <p className={props.styleNotation}><b>{props.textNotation}</b></p>
        </div>
    )
  }
}

export const FormItemWithNotation = withNotation(AdminFormItem)