import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {useEffect} from "react";
import {useAuth} from "./useAuth";
import {fbChangeEmailUser, fbGetEmail} from "../API/auth";
import {useActions} from "./useActions";
import {useTypedSelector} from "./useTypedSelector";
import {setAuth, setExpiresToken, setToken} from "../store/actionCreators/Auth";

export const useSettings = () => {

  const {redirect} = useAuth()
  const {fetchEmail, setEmail} = useActions()
  const {loading, error, email} = useTypedSelector(state => state.auth)

  const onClickSave = async (id: string, inputValue: string, inputType?: InputType) => {
    switch (id) {
      case "login":
        const token = localStorage.getItem("token")
        const response = await fbChangeEmailUser(token || "", inputValue)
        if (response.status === 200) {
          const expDate = (new Date().getTime() + +response.data.expiresIn * 1000).toString()
          localStorage.setItem("token", response.data.idToken)
          localStorage.setItem("expiresToken", expDate)
          localStorage.setItem("auth", "true")
          setToken(response.data.idToken)
          setExpiresToken(response.data.expiresIn)
          setAuth(true)
        }
        setEmail(inputValue)
    }
  }

  useEffect(() => {
    redirect()
    fetchEmail()
  }, [])

  return {
    onClickSave,
    loading,
    error,
    email
  }
}