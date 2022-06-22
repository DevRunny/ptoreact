import {ContactsAction, ContactsActions, ContactsState, Email, MapState, Phone,} from "../../types/contacts";

const initialState: ContactsState = {
  emails: [
    {
      email: "",
      id: ""
    }
  ] as Email[],
  phones: [
    {
      phoneNumber: "",
      id: ""
    }
  ] as Phone[],
  mapState: {center: [55.755793, 37.617134], zoom: 10} as MapState,
  loading: false,
  error: null
}


export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
  switch (action.type) {
    case ContactsActions.FETCH:
      return {...state, loading: true}

    case ContactsActions.FETCH_SUCCESS:
      return {...state, loading: false}

    case ContactsActions.FETCH_ERROR:
      return {...state, loading: false, error: action.payload}

    case ContactsActions.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        emails: action.payload.emails,
        phones: action.payload.phones,
        mapState: action.payload.mapState,
        loading: false
      }

    case ContactsActions.FETCH_CONTACTS_ERROR:
      return {...state, loading: false, error: action.payload}

    case ContactsActions.SET_EMAIL:
      return {
        ...state, emails: state.emails.map(email => {
          if (email.id === action.payload.id) {
            return {id: email.id, email: action.payload.email}
          } else {
            return email
          }
        })
      }

    case ContactsActions.SET_PHONE:
      return {
        ...state, phones: state.phones.map(phone => {
          if (phone.id === action.payload.id) {
            return {id: phone.id, phoneNumber: action.payload.phoneNumber}
          } else {
            return phone
          }
        })
      }

    case ContactsActions.ADD_PHONE:
      return {...state, phones: [...state.phones, {id: (state.phones.length + 1).toString(), phoneNumber: ""}]}

    case ContactsActions.ADD_EMAIL:
      return {...state, emails: [...state.emails, {id: (state.emails.length + 1).toString(), email: ""}]}

    case ContactsActions.DELETE_PHONE:
      return {...state, phones: state.phones.filter(phone => phone.id !== action.payload)}

    case ContactsActions.DELETE_EMAIL:
      return {...state, emails: state.emails.filter(email => email.id !== action.payload)}

    case ContactsActions.SET_MAP_STATE_CENTER:
      return {...state, mapState: {...state.mapState, center: action.payload}}

    case ContactsActions.SET_MAP_ZOOM:
      return {...state, mapState: {...state.mapState, zoom: action.payload}}

    default:
      return state
  }
}