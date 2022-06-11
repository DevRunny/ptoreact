export interface AuthState {
  isAuth: boolean;
  tokenId: string
  loading: boolean;
  error: string | null;
  isAuthenticated: () => string
};

export type User = {
  login: string;
  password: string;
};

export interface fbAuthResponse {
  expiresIn: string
  tokenId: string
}

export enum AuthActions {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  SET_TOKEN_ID = "SET_TOKEN_ID",
}

type SetAuth = {
  type: AuthActions.SET_AUTH;
  payload: boolean;
};

type SetToken = {
  type: AuthActions.SET_TOKEN_ID;
  payload: string;
};

type SetError = {
  type: AuthActions.SET_ERROR;
  payload: string | null;
};

type SetLoading = {
  type: AuthActions.SET_LOADING;
  payload: boolean;
};

export type AuthAction = SetAuth | SetToken | SetLoading | SetError;
