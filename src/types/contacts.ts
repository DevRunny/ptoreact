export enum ContactsActions {
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR"
}

export type ContactsState = {
  addresses: Address[]
  emails: Email[]
  phones: Phone[]
  workingModes: WorkingMode[]
  mapState: MapState
  coordinates: Coordinate[]
  messengers: Messenger
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
  messengers: Messenger
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

export type Messenger = {
  telegram: string
  vk: string
  whatsapp: string
  viber: string
}

export type ContactsAction = FetchContacts | FetchContactsSuccess | FetchContactsError

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