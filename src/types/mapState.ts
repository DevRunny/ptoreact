export type MapState = {
  center: number[]
  zoom: number
  loading: boolean
  error: null | string
}

export type MapStateResponse = {
  center: number[],
  zoom: number
}

export type MapStateCenter = {
  center: number[]
}

export type MapStateZoom = {
  zoom: number
}

export enum MapStateActions {
  FETCH_MAPSTATE = "FETCH_MAPSTATE",
  FETCH_MAPSTATE_SUCCESS = "FETCH_MAPSTATE_SUCCESS",
  FETCH_MAPSTATE_ERROR = "FETCH_MAPSTATE_ERROR",
  SET_MAPSTATE_CENTER = "SET_MAPSTATE_CENTER",
  SET_MAPSTATE_ZOOM = "SET_MAPSTATE_ZOOM"
}

type FetchMapState = {
  type: MapStateActions.FETCH_MAPSTATE
}

type FetchMapStateSuccess = {
  type: MapStateActions.FETCH_MAPSTATE_SUCCESS,
  payload: MapStateResponse;
}

type FetchMapStateError = {
  type: MapStateActions.FETCH_MAPSTATE_ERROR,
  payload: string;
}

type SetMapStateCenter = {
  type: MapStateActions.SET_MAPSTATE_CENTER,
  payload: number[]
}

type SetMapZoom = {
  type: MapStateActions.SET_MAPSTATE_ZOOM,
  payload: number
}

export type MapStateAction =
    FetchMapState |
    FetchMapStateSuccess |
    FetchMapStateError |
    SetMapStateCenter |
    SetMapZoom
