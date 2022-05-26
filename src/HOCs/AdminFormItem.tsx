import AdminFormItem, {AdminFormItemProps} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import React from "react";

interface InjectedProps extends AdminFormItemProps {
  textNotation: string
  styleNotation: string
  link?: string
  textLink?: string
  isExample?: boolean
}

export const withNotation = (Component: React.ComponentType<AdminFormItemProps>) => {
  return (props: InjectedProps) => {
    return (
        <div>
          <Component
              id={props.id}
              onClickSaveFunc={props.onClickSaveFunc}
              onClickDeleteFunc={props.onClickDeleteFunc}
              value={props.value}
              inputType={props.inputType}
              labelText={props.labelText}
              required={props.required}
              inputStyle={props.inputStyle}
              mainStyle={props.mainStyle}
              disabled={props.disabled}
              onBlurFunc={props.onBlurFunc}
          />
          <p className={props.styleNotation}>
            {props.isExample ?
                <>Пример: <b>{props.textNotation}</b>
                  <a href={props.link} target={"_blank"}><b>{props.textLink}</b></a></>
                :
                <>{props.textNotation + " "} <a href={props.link} target={"_blank"}><b>{props.textLink}</b></a></>
            }
          </p>
        </div>
    )
  }
}

export const FormItemWithNotation = withNotation(AdminFormItem)