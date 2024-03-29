// State реквизитов организации

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
  numRegistry: string;
  inn: string;
  ogrn: string;
  isOgrnip: boolean;
}

// Response от API

export type PayloadFetchAboutSuccess = {
  nameCompany: string;
  requisites: Requisites;
}


// Экшены

export enum AboutActions {
  FETCH_ABOUT = "FETCH_ABOUT",
  FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS",
  FETCH_ABOUT_ERROR = "FETCH_ABOUT_ERROR",
  SET_NAME_COMPANY = "SET_NAME_COMPANY",
  SET_NUM_REGISTRY = "SET_NUM_REGISTRY",
  SET_INN = "SET_INN",
  SET_OGRN = "SET_OGRN",
  TOGGLE_OGRNIP = "TOGGLE_OGRNIP"
}

interface FetchAbout {
  type: AboutActions.FETCH_ABOUT
}

interface FetchAboutSuccess {
  type: AboutActions.FETCH_ABOUT_SUCCESS
  payload: PayloadFetchAboutSuccess
}

type SetNameCompany = {
  type: AboutActions.SET_NAME_COMPANY;
  payload: string;
}

type SetNumRegistry = {
  type: AboutActions.SET_NUM_REGISTRY,
  payload: string;
}

type SetInn = {
  type: AboutActions.SET_INN,
  payload: string;
}

type SetOgrn = {
  type: AboutActions.SET_OGRN,
  payload: string;
}

type ToggleOgrnip = {
  type: AboutActions.TOGGLE_OGRNIP
  payload: boolean;
}

interface FetchAboutError {
  type: AboutActions.FETCH_ABOUT_ERROR
  payload: string
}

// Экспорт всех экшенов

export type AboutAction =
    FetchAbout
    | FetchAboutSuccess
    | FetchAboutError
    | SetNameCompany
    | SetNumRegistry
    | SetInn
    | SetOgrn
    | ToggleOgrnip
