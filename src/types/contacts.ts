// State контактной информации

export type ContactsState = {
  emails: Email[]
  phones: Phone[]
  // mapState: MapState
  loading: boolean
  error: null | string
}

export interface IEmailsAndPhonesResponse {
  phones: Phone[];
  emails: Email[];
}

export type ContactsResponse = {
  emails: Email[]
  phones: Phone[]
  // mapState: MapState
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

// export type MapState = {
//   center: number[]
//   zoom: number
// }

// Экшены

export enum ContactsActions {
  FETCH = "FETCH",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
  SET_PHONE = "SET_PHONE",
  SET_EMAIL = "SET_EMAIL",
  ADD_PHONE = "ADD_PHONE",
  ADD_EMAIL = "ADD_EMAIL",
  DELETE_PHONE = "DELETE_PHONE",
  DELETE_EMAIL = "DELETE_EMAIL",
  // SET_MAP_STATE_CENTER = "SET_MAP_STATE_CENTER",
  // SET_MAP_ZOOM = "SET_MAP_ZOOM"
}

type Fetch = {
  type: ContactsActions.FETCH,
}

type FetchSuccess = {
  type: ContactsActions.FETCH_SUCCESS
}

type FetchError = {
  type: ContactsActions.FETCH_ERROR,
  payload: string
}

type FetchContactsSuccess = {
  type: ContactsActions.FETCH_CONTACTS_SUCCESS,
  payload: IEmailsAndPhonesResponse
}

type FetchContactsError = {
  type: ContactsActions.FETCH_CONTACTS_ERROR,
  payload: string
}

type SetPhone = {
  type: ContactsActions.SET_PHONE,
  payload: Phone
}

type SetEmail = {
  type: ContactsActions.SET_EMAIL,
  payload: Email
}

type AddPhone = {
  type: ContactsActions.ADD_PHONE
  payload: Phone
}

type AddEmail = {
  type: ContactsActions.ADD_EMAIL,
  payload: Email
}

type DeletePhone = {
  type: ContactsActions.DELETE_PHONE
  payload: string
}

type DeleteEmail = {
  type: ContactsActions.DELETE_EMAIL
  payload: string
}

// type SetMapStateCenter = {
//   type: ContactsActions.SET_MAP_STATE_CENTER,
//   payload: number[]
// }
//
// type SetMapZoom = {
//   type: ContactsActions.SET_MAP_ZOOM,
//   payload: number
// }

// Экспорт всех экшенов

export type ContactsAction =
    Fetch |
    FetchContactsSuccess |
    FetchContactsError |
    SetPhone |
    SetEmail |
    AddPhone |
    AddEmail |
    DeletePhone |
    DeleteEmail |
    // SetMapStateCenter |
    // SetMapZoom |
    FetchSuccess |
    FetchError