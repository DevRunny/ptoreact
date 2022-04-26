export enum AboutActions {
  FETCH_ABOUT = "FETCH_ABOUT",
  FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS",
  FETCH_ABOUT_ERROR = "FETCH_ABOUT_ERROR"
}

export interface AboutState {
  nameCompany: string
  requisites: Requisites
  loading: boolean
  error: string | null
}

export type Requisites = {
  numRegistry: number | null,
  inn: number | null,
  ogrn: number | null
}

export type AboutAction = FetchAbout | FetchAboutSuccess | FetchAboutError

interface FetchAbout {
  type: AboutActions.FETCH_ABOUT
}

interface FetchAboutSuccess {
  type: AboutActions.FETCH_ABOUT_SUCCESS
  payload: PayloadFetchAboutSuccess
}

export type PayloadFetchAboutSuccess = {
  nameCompany: string,
  requisites: Requisites
}

interface FetchAboutError {
  type: AboutActions.FETCH_ABOUT_ERROR
  payload: string
}

