import {MessengersAction, MessengersActions, MessengersState} from "../../types/messengers";

const initialState: MessengersState = {
  telegram: "",
  vk: "",
  whatsapp: "",
  viber: "",
  loading: false,
  error: null
}

export const messengersReducer = (state = initialState, action: MessengersAction): MessengersState => {
  switch (action.type) {
    case MessengersActions.FETCH_MESSENGERS:
      return {...state, loading: true}
    case MessengersActions.FETCH_MESSENGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        telegram: action.payload.telegram,
        vk: action.payload.vk,
        whatsapp: action.payload.whatsapp,
        viber: action.payload.viber
      }
    case MessengersActions.FETCH_MESSENGERS_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}