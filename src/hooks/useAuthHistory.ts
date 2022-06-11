import {useLocation, useNavigate} from "react-router-dom";
import {RoutesName} from "../routes";
import {useActions} from "./useActions";
import {logout} from "../store/actionCreators/Auth";

export const useAuthHistory = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = () => {
    if (localStorage.getItem("auth") && location.pathname === RoutesName.LOGIN) {
      navigate(RoutesName.ADMIN)
    }
    if (!localStorage.getItem("auth") && location.pathname === RoutesName.ADMIN) {
      logout()
      navigate(RoutesName.LOGIN)
    }
  }

  return {redirect}
}