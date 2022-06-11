import {useLocation, useNavigate} from "react-router-dom";
import {RoutesName} from "../routes";
import {logout} from "../store/actionCreators/Auth";

export const useAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = () => {
    if (localStorage.getItem("auth") && location.pathname === RoutesName.LOGIN) {
      navigate(RoutesName.ADMIN)
    }
    if (Number(localStorage.getItem("expiresToken")) < new Date().getTime()) {
      logout()
      navigate(RoutesName.LOGIN)
    }
  }

  return {redirect}
}