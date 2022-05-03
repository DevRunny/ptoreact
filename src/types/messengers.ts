export enum MessengersActions {
  FETCH_MESSENGERS = "FETCH_MESSENGERS",
  FETCH_MESSENGERS_SUCCESS = "FETCH_MESSENGERS_SUCCESS",
  FETCH_MESSENGERS_ERROR = "FETCH_MESSENGERS_ERROR"
}


export type MessengersState = {
  telegram: string
  vk: string
  whatsapp: string
  viber: string
  loading: boolean
  error: string | null
}

export type ResponseFetchMessengers = {
  telegram: string
  vk: string
  whatsapp: string
  viber: string
}

export type MessengersAction = FetchMessengers | FetchMessengersSuccess | FetchMessengersError

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