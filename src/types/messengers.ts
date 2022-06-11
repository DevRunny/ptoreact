export enum MessengersActions {
  FETCH_MESSENGERS = "FETCH_MESSENGERS",
  FETCH_MESSENGERS_SUCCESS = "FETCH_MESSENGERS_SUCCESS",
  FETCH_MESSENGERS_ERROR = "FETCH_MESSENGERS_ERROR",
  DELETE_MESSENGER = "DELETE_MESSENGER"
}


export type MessengersState = {
  telegram: string
  vk: string
  whatsapp: string
  viber: string
  loading: boolean
  error: string | null
}

export type MessengersList = {
  telegram: string
  vk: string
  whatsapp: string
  viber: string
}

export type ResponseFetchMessengers = MessengersList

export type MessengersAction =
    FetchMessengers |
    FetchMessengersSuccess |
    FetchMessengersError |
    DeleteMessenger

type FetchMessengers = {
  type: MessengersActions.FETCH_MESSENGERS
}

type FetchMessengersSuccess = {
  type: MessengersActions.FETCH_MESSENGERS_SUCCESS
  payload: ResponseFetchMessengers
}

type FetchMessengersError = {
  type: MessengersActions.FETCH_MESSENGERS_ERROR
  payload: string
}

type DeleteMessenger = {
  type: MessengersActions.DELETE_MESSENGER
  payload: MessengersList
}