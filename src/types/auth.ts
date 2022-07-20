// State аутентификации

export interface AuthState {
  email: string
  isAuth: boolean
  tokenId: string
  expiresToken: string
  loading: boolean
  error: string | null
}

export type User = {
  login: string;
  password: string;
}

export interface fbAuthResponse {
  expiresIn: string
  tokenId: string
}

// Экшены

export enum AuthActions {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_TOKEN_ID = "SET_TOKEN_ID",
  SET_EXPIRES_TOKEN = "SET_EXPIRES_TOKEN",
  SET_EMAIL = "SET_EMAIL"
}

type SetAuth = {
  type: AuthActions.SET_AUTH;
  payload: boolean;
}

type SetToken = {
  type: AuthActions.SET_TOKEN_ID;
  payload: string;
}

export type SetError = {
  type: AuthActions.SET_ERROR;
  payload: string | null;
}

type SetLoading = {
  type: AuthActions.SET_LOADING;
  payload: boolean;
}

type SetExpiresToken = {
  type: AuthActions.SET_EXPIRES_TOKEN
  payload: string
}
type SetEmail = {
  type: AuthActions.SET_EMAIL,
  payload: string
}

// Экспорт всех экшенов

export type AuthAction = SetAuth | SetToken | SetLoading | SetError | SetExpiresToken | SetEmail
