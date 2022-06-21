import {Messenger, MessengersAction, MessengersActions, MessengersState} from "../../types/messengers";

const initialState: MessengersState = {
  messengers: [
    {
      messengerName: "",
      value: "",
      icon: "",
      id: ""
    }
  ] as Messenger[],
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
        messengers: action.payload
      }
    case MessengersActions.FETCH_MESSENGERS_ERROR:
      return {...state, error: action.payload}
    case MessengersActions.DELETE_MESSENGER:
      return {
        ...state,
        messengers: state.messengers.map(mes => {
          if (mes.id === action.payload) {
            return {...mes, value: ""}
          } else {
            return mes
          }
        })
      }
    case MessengersActions.SET_MESSENGER:
      return {
        ...state, messengers: state.messengers.map(mes => {
          if (mes.id === action.payload.id) {
            return {...mes, value: action.payload.value}
          } else {
            return mes
          }
        })
      }
    default:
      return state
  }
}