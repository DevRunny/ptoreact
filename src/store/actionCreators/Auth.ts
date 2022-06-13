import {AuthAction, AuthActions} from "../../types/auth";
import {Dispatch} from "redux";
import {fbAuthUser, fbGetEmail} from "../../API/auth";

export const setToken = (token: string): AuthAction => {
  return {type: AuthActions.SET_TOKEN_ID, payload: token};
};

export const setAuth = (auth: boolean): AuthAction => {
  return {type: AuthActions.SET_AUTH, payload: auth};
};

export const setExpiresToken = (expDate: string) => {
  return {type: AuthActions.SET_EXPIRES_TOKEN, payload: expDate}
}

const setLoading = (loading: boolean): AuthAction => {
  return {type: AuthActions.SET_LOADING, payload: loading};
};

const setError = (error: string): AuthAction => {
  return {type: AuthActions.SET_ERROR, payload: error};
};

export const setEmail = (email: string): AuthAction => {
  return {type: AuthActions.SET_EMAIL, payload: email}
}

export const fetchEmail = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch(setLoading(true))
    const token = localStorage.getItem("token")
    const response = await fbGetEmail(token || "")
    dispatch(setEmail(response.data.users[0].email))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(error))
    dispatch(setLoading(false))
  }
}

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
              setExpiresToken(response.data.expiresIn)
              setAuth(true)
            } else if (response.status === 400) {
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
  dispatch(setToken(""))
}