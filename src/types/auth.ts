export type AuthState = {
  isAuth: boolean
  user: User
  loading: boolean,
  error: string | null
}

export type User = {
  login: string
  password: string
}

export enum AuthActions {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_USER = "SET_USER"
}

type SetAuth = {
  type: AuthActions.SET_AUTH,
  payload: boolean
}

type SetUser = {
  type: AuthActions.SET_USER,
  payload: User
}

type SetError = {
  type: AuthActions.SET_ERROR,
  payload: string | null
}

type SetLoading = {
  type: AuthActions.SET_LOADING
}

export type AuthAction = SetAuth | SetUser | SetLoading | SetError