import {AuthAction, AuthActions, AuthState} from "../../types/auth";

const initialState: AuthState = {
  email: "",
  isAuth: false,
  tokenId: "",
  expiresToken: null,
  loading: false,
  error: ""
};

export const authReducer = (
    state = initialState,
    action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return {...state, isAuth: action.payload};
    case AuthActions.SET_LOADING:
      return {...state, loading: action.payload};
    case AuthActions.SET_ERROR:
      return {...state, loading: false, error: action.payload};
    case AuthActions.SET_TOKEN_ID:
      return {...state, tokenId: action.payload};
    case AuthActions.SET_EXPIRES_TOKEN:
      return {...state, expiresToken: action.payload}
    case AuthActions.SET_EMAIL:
      return {...state, email: action.payload}
    default:
      return state;
  }
};
