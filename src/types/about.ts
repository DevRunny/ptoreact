export enum AboutActions {
  FETCH_ABOUT = "FETCH_ABOUT",
  FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS",
  FETCH_ABOUT_ERROR = "FETCH_ABOUT_ERROR",
  SET_NAME_COMPANY = "SET_NAME_COMPANY",
  SET_NUM_REGISTRY = "SET_NUM_REGISTRY",
  SET_INN = "SET_INN",
  SET_OGRN = "SET_OGRN"
}

export interface AboutState {
  nameCompany: string
  requisites: Requisites
  loading: boolean
  error: string | null
}

export type AboutDataAdmin = {
  nameCompany: string
  requisites: Requisites
}

export type Requisites = {
  numRegistry: number | null,
  inn: number | null,
  ogrn: number | null
}

export type AboutAction =
    FetchAbout
    | FetchAboutSuccess
    | FetchAboutError
    | SetNameCompany
    | SetNumRegistry
    | SetInn
    | SetOgrn

interface FetchAbout {
  type: AboutActions.FETCH_ABOUT
}

interface FetchAboutSuccess {
  type: AboutActions.FETCH_ABOUT_SUCCESS
  payload: PayloadFetchAboutSuccess
}

type SetNameCompany = {
  type: AboutActions.SET_NAME_COMPANY,
  payload: string
}

type SetNumRegistry = {
  type: AboutActions.SET_NUM_REGISTRY,
  payload: number
}

type SetInn = {
  type: AboutActions.SET_INN,
  payload: number
}

type SetOgrn = {
  type: AboutActions.SET_OGRN,
  payload: number
}

interface FetchAboutError {
  type: AboutActions.FETCH_ABOUT_ERROR
  payload: string
}

export type PayloadFetchAboutSuccess = {
  nameCompany: string,
  requisites: Requisites
}

