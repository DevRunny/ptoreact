import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {useEffect} from "react";
import {useAuth} from "./useAuth";

export const useSettings = () => {

  const {redirect} = useAuth()

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
    redirect()
  }, [])

  return {
    onClickSave
  }
}