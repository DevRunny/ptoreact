import { AuthAction, AuthActions, User } from "../../types/auth";
import { Dispatch } from "redux";
import { getUser } from "../../API/auth";

const setUser = (user: User): AuthAction => {
  return { type: AuthActions.SET_USER, payload: user };
};

const setAuth = (auth: boolean): AuthAction => {
  return { type: AuthActions.SET_AUTH, payload: auth };
};

const setLoading = (loading: boolean): AuthAction => {
  return { type: AuthActions.SET_LOADING, payload: loading };
};

const setError = (error: string): AuthAction => {
  return { type: AuthActions.SET_ERROR, payload: error };
};

export const login =
  (username: string, password: string) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch(setLoading(true));
      const user = await getUser();
      if (user && user.login === username && user.password === password) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", user.login);
        dispatch(setAuth(true));
        dispatch(setUser(user));
        dispatch(setError(""));
      } else {
        dispatch(setError("Неккоректный логин или пароль"));
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Произошла ошибка при входе"));
      dispatch(setLoading(false));
    }
  };
