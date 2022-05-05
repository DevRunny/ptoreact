import {useLocation, useNavigate} from "react-router-dom";
import {RoutesName} from "../routes";
import {useActions} from "./useActions";

export const useAuthHistory = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {login} = useActions()

  const redirect = () => {
    if (localStorage.getItem("auth") && location.pathname === RoutesName.LOGIN) {
      const username = localStorage.getItem("login")
      const password = localStorage.getItem("password")
      if (username && password) {
        login(username, password)
        navigate(RoutesName.ADMIN)
      }
    }
    if (!localStorage.getItem("auth") && location.pathname === RoutesName.ADMIN) {
      navigate(RoutesName.LOGIN)
    }
  }

  return {redirect}
}