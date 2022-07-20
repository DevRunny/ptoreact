// Enum наименований мессенджеров

export enum MessengersName {
  TELEGRAM = "Telegram",
  VIBER = "Viber",
  VK = "VK (Вконтакте)",
  WHATSAPP = "WhatsApp"
}

// State мессенджеров

export type MessengersState = {
  messengers: Messenger[]
  loading: boolean
  error: string | null
}

export type Messenger = {
  icon: string
  messengerName: string
  value: string,
  id: string
}

// Экшены

export enum MessengersActions {
  FETCH_MESSENGERS = "FETCH_MESSENGERS",
  FETCH_MESSENGERS_SUCCESS = "FETCH_MESSENGERS_SUCCESS",
  FETCH_MESSENGERS_ERROR = "FETCH_MESSENGERS_ERROR",
  DELETE_MESSENGER = "DELETE_MESSENGER",
  SET_MESSENGER = "SET_MESSENGER",
}

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
  payload: string
}

type SetMessenger = {
  type: MessengersActions.SET_MESSENGER,
  payload: { id: string, value: string }
}

// Экспорт всех экшенов

export type MessengersAction =
    FetchMessengers |
    FetchMessengersSuccess |
    FetchMessengersError |
    DeleteMessenger |
    SetMessenger

// Response от API

export type ResponseFetchMessengers = Messenger[]
