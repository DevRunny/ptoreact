import React, {useEffect} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./Settings.module.css"
import AdminFormItem from "../AdminFormItem/AdminFormItem";
import {useSettings} from "../../../../hooks/useSettings";

const Settings = () => {

const settings = useSettings()

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
                value={settings.getUserLogin()}
                id={"login"}
                onClickSaveFunc={settings.onClickSave}
                labelText={"Логин(email):"}
                required={true}
            />
            <AdminFormItem
                mainStyle={"formItem"}
                inputStyle={style.inputSettings}
                inputType={"password"}
                value={settings.getUserPassword()}
                id={"password"}
                onClickSaveFunc={settings.onClickSave}
                labelText={"Пароль:"}
                required={true}
            />
          </div>
        </div>
      </div>
  );
}


export default Settings;