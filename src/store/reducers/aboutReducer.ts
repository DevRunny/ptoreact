import {AboutAction, AboutActions, AboutState} from "../../types/about";

const initialState: AboutState = {
  nameCompany: "",
  requisites: {
    numRegistry: "",
    inn: "",
    ogrn: "",
    isOgrnip: false
  },
  loading: false,
  error: null
}

export const aboutReducer = (state = initialState, action: AboutAction): AboutState => {
  switch (action.type) {
    case AboutActions.FETCH_ABOUT:
      return {...state, loading: true, error: null}
    case AboutActions.FETCH_ABOUT_SUCCESS:
      return {
        loading: false,
        error: null,
        nameCompany: action.payload.nameCompany,
        requisites: {
          inn: action.payload.requisites.inn,
          ogrn: action.payload.requisites.ogrn,
          numRegistry: action.payload.requisites.numRegistry,
          isOgrnip: action.payload.requisites.isOgrnip
        }
      }
    case AboutActions.FETCH_ABOUT_ERROR:
      return {...state, loading: false, error: action.payload}
    case AboutActions.SET_NAME_COMPANY:
      return {...state, nameCompany: action.payload}
    case AboutActions.SET_NUM_REGISTRY:
      return {...state, requisites: {...state.requisites, numRegistry: action.payload}}
    case AboutActions.SET_INN:
      return {...state, requisites: {...state.requisites, inn: action.payload}}
    case AboutActions.SET_OGRN:
      return {...state, requisites: {...state.requisites, ogrn: action.payload}}
    case AboutActions.TOGGLE_OGRNIP: // TODO: Lebedev M. Написать экшен успешной и провальной отправки данных
      return {...state, requisites: {...state.requisites, isOgrnip: action.payload}}
    default:
      return state
  }
}