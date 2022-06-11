import {AuthAction, AuthActions, User} from "../../types/auth";
import {Dispatch} from "redux";
import {fbAuthUser, getUser} from "../../API/auth";

export const setToken = (token: string): AuthAction => {
  return {type: AuthActions.SET_TOKEN_ID, payload: token};
};

export const setAuth = (auth: boolean): AuthAction => {
  return {type: AuthActions.SET_AUTH, payload: auth};
};

const setLoading = (loading: boolean): AuthAction => {
  return {type: AuthActions.SET_LOADING, payload: loading};
};

const setError = (error: string): AuthAction => {
  return {type: AuthActions.SET_ERROR, payload: error};
};

export const login =
    (username: string, password: string) =>
        async (dispatch: Dispatch<AuthAction>) => {
          try {
            dispatch(setLoading(true));
            const response = await fbAuthUser({login: username, password})
            if (response.status === 200) {
                const expDate = (new Date().getTime() + +response.data.expiresIn * 1000).toString()
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("expiresToken", expDate)
                localStorage.setItem("auth", "true")
                setToken(response.data.idToken)
                setAuth(true)
            } else if(response.status === 400){
              dispatch(setError("Неверный логин или пароль"));
            }
            dispatch(setLoading(false));
          } catch (error) {
            dispatch(setError("Произошла ошибка при входе"));
            dispatch(setLoading(false));
          }
        };

export const logout = () => async (dispatch: Dispatch<AuthAction>) => {
  localStorage.removeItem("auth")
  localStorage.removeItem("token")
  localStorage.removeItem("expiresToken")
  dispatch(setAuth(false))
}