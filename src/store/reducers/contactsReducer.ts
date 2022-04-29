import {
    Address,
    ContactsAction,
    ContactsActions,
    ContactsState,
    Coordinate,
    Email,
    MapState,
    Messenger,
    Phone,
    WorkingMode
} from "../../types/contacts";

const initialState: ContactsState = {
  addresses: [] as Address[],
  emails: [] as Email[],
  phones: [] as Phone[],
  workingModes: [] as WorkingMode[],
  mapState: {} as MapState,
  coordinates: [] as Coordinate[],
  messengers: {} as Messenger,
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
        addresses: action.payload.addresses,
        emails: action.payload.emails,
        phones: action.payload.phones,
        workingModes: action.payload.workingModes,
        mapState: action.payload.mapState,
        coordinates: action.payload.coordinates,
        messengers: action.payload.messengers,
        loading: false
      }

    case ContactsActions.FETCH_CONTACTS_ERROR:
      return {...state, loading: false, error: action.payload}

    default:
      return state
  }
}