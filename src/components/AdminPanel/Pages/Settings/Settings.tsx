import React from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./Settings.module.css"
import AdminFormItem, {InputType} from "../AdminFormItem/AdminFormItem";

const Settings = () => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Настройки"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Учетная запись:"} />
          <div className={style.wrap}>
            <AdminFormItem
                mainStyle={"formItem"}
                inputStyle={style.inputSettings}
                inputType={"text"}
                inputValue={"admin@admin.ru"}
                id={"1"}
                onClickSaveFunc={onClickSave}
                labelText={"Логин(email):"}
                required={true}
            />
            <AdminFormItem
                mainStyle={"formItem"}
                inputStyle={style.inputSettings}
                inputType={"password"}
                inputValue={"admin123"}
                id={"2"}
                onClickSaveFunc={onClickSave}
                labelText={"Пароль:"}
                required={true}
            />
          </div>
        </div>
      </div>
  );
}


export default Settings;