import React, {useEffect} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./Settings.module.css"
import AdminFormItem, {InputType} from "../AdminFormItem/AdminFormItem";
import {useActions} from "../../../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {changeAdminAccount} from "../../../../API/auth";

const Settings = () => {

    const {logout, setUser} = useActions()
    const navigate = useNavigate()

    const getUserLogin = (): string => {
        const login = localStorage.getItem("login")
        if (login) {
            return login
        } else {
            logout()
            navigate("login")
            return ""
        }
    }
    const getUserPassword = (): string => {
        const password = localStorage.getItem("password")
        if (password) {
            return password
        } else {
            logout()
            navigate("login")
            return ""
        }
    }


  const onClickSave = async (id: string, inputValue: string, inputType?: InputType) => {
    switch (id) {
        case "login":
            const responseLogin = await changeAdminAccount(inputValue, getUserPassword())
            setUser(responseLogin)
            localStorage.setItem("login", inputValue)
            break
        case "password":
            const responsePassword = await changeAdminAccount(getUserLogin(), inputValue)
            setUser(responsePassword)
            localStorage.setItem("password", inputValue)
            break
        default:
            break
    }
  }

  useEffect(() => {
      setUser({id: "1", login: getUserLogin(), password: getUserPassword()})
  }, [])

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
                value={getUserLogin()}
                id={"login"}
                onClickSaveFunc={onClickSave}
                labelText={"Логин(email):"}
                required={true}
            />
            <AdminFormItem
                mainStyle={"formItem"}
                inputStyle={style.inputSettings}
                inputType={"password"}
                value={getUserPassword()}
                id={"password"}
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