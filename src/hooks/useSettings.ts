import {useActions} from "./useActions";
import {useNavigate} from "react-router-dom";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {useEffect} from "react";

export const useSettings = () => {
  const {logout} = useActions()
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
    // switch (id) {
    //   case "login":
    //     const responseLogin = await changeAdminAccount(inputValue, getUserPassword())
    //     localStorage.setItem("login", inputValue)
    //     break
    //   case "password":
    //     const responsePassword = await changeAdminAccount(getUserLogin(), inputValue)
    //     localStorage.setItem("password", inputValue)
    //     break
    //   default:
    //     break
    // }
  }

  useEffect(() => {
  }, [])

  return {
    getUserLogin,
    getUserPassword,
    onClickSave
  }
}