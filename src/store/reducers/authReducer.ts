import {AuthAction, AuthActions, AuthState, User} from "../../types/auth";

const initialState: AuthState = {
  isAuth: false,
  user: {} as User,
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return {...state, isAuth: action.payload}
    case AuthActions.SET_LOADING:
      return {...state, loading: true}
    case AuthActions.SET_ERROR:
      return {...state, loading: false, error: action.payload}
    case AuthActions.SET_USER:
      return {...state, user: action.payload}
    default:
      return state
  }
}