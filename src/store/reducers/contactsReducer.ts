import {
  ContactsAction,
  ContactsActions,
  ContactsState,
  Email,
  MapState,
  Phone,
} from "../../types/contacts";

const initialState: ContactsState = {
  emails: [] as Email[],
  phones: [] as Phone[],
  mapState: {} as MapState,
  loading: false,
  error: null
}


export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
  switch (action.type) {
    case ContactsActions.FETCH_CONTACTS:
      return {...state, loading: true}

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

    case ContactsActions.SET_EMAILS:
      return {...state, emails: action.payload}

    case ContactsActions.SET_PHONES:
      return {...state, phones: action.payload}

    case ContactsActions.ADD_PHONE:
      return {...state, phones: [...state.phones, {id: (state.phones.length + 1).toString(), phoneNumber: ""}]}

    case ContactsActions.ADD_EMAIL:
      return {...state, emails: [...state.emails, {id: (state.emails.length + 1).toString(), email: ""}]}

    case ContactsActions.DELETE_PHONE:
      return {...state, phones: action.payload}

    case ContactsActions.DELETE_EMAIL:
      return {...state, emails: action.payload}

    default:
      return state
  }
}