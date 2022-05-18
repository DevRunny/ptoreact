export enum ContactsActions {
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
  SET_PHONES = "SET_PHONES",
  SET_EMAILS = "SET_EMAILS",
  ADD_PHONE = "ADD_PHONE",
  ADD_EMAIL = "ADD_EMAIL",
  DELETE_PHONE = "DELETE_PHONE",
  DELETE_EMAIL = "DELETE_EMAIL"
}

export type ContactsState = {
  addresses: Address[]
  emails: Email[]
  phones: Phone[]
  workingModes: WorkingMode[]
  mapState: MapState
  coordinates: Coordinate[]
  loading: boolean
  error: null | string
}

export type ContactsResponse = {
  addresses: Address[]
  emails: Email[]
  phones: Phone[]
  workingModes: WorkingMode[]
  mapState: MapState
  coordinates: Coordinate[]
}

export type Address = {
  address: string
  id: number
}

export type Email = {
  email: string
  id: string
}

export type Phone = {
  phoneNumber: string
  id: string
}

export type WorkingMode = {
  workingMode: string
  id: number
}

export type MapState = {
  center: number[]
  zoom: number
}

export type Coordinate = {
  coordinate: number[]
  id: number
}

export type ContactsAction =
    FetchContacts |
    FetchContactsSuccess |
    FetchContactsError |
    SetPhones |
    SetEmails |
    AddPhone |
    AddEmail |
    DeletePhone |
    DeleteEmail

type FetchContacts = {
  type: ContactsActions.FETCH_CONTACTS,
}

type FetchContactsSuccess = {
  type: ContactsActions.FETCH_CONTACTS_SUCCESS,
  payload: ContactsResponse
}

type FetchContactsError = {
  type: ContactsActions.FETCH_CONTACTS_ERROR,
  payload: string
}

type SetPhones = {
  type: ContactsActions.SET_PHONES,
  payload: Phone[]
}

type SetEmails = {
  type: ContactsActions.SET_EMAILS,
  payload: Email[]
}

type AddPhone = {
  type: ContactsActions.ADD_PHONE
}

type AddEmail = {
  type: ContactsActions.ADD_EMAIL
}

type DeletePhone = {
  type: ContactsActions.DELETE_PHONE
  payload: Phone[]
}

type DeleteEmail = {
  type: ContactsActions.DELETE_EMAIL
  payload: Email[]
}