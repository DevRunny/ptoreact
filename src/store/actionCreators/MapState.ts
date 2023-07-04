import {Dispatch} from "redux";
import {MapStateAction, MapStateActions, MapStateCenter, MapStateZoom} from "../../types/mapState";
import {editMapStateCenter, editMapStateZoom, getMapState} from "../../API/mapState";
import {ModalsAction, ModalsActions} from "../../types/modals";

export const fetchMapStateAC = () => {
  return async (dispatch: Dispatch<MapStateAction>) => {
    try {
      dispatch({type: MapStateActions.FETCH_MAPSTATE})
      const response = await getMapState()
      dispatch({type: MapStateActions.FETCH_MAPSTATE_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: MapStateActions.FETCH_MAPSTATE_ERROR, payload: error.message})
    }
  }
}

export const setMapStateCenter = (center: MapStateCenter) => {
  return async (dispatch: Dispatch<MapStateAction | ModalsAction>) => {
    try {
      dispatch({type: MapStateActions.FETCH_MAPSTATE})
      const response = await editMapStateCenter(center)
      if (response.status === 201){
        dispatch({type: MapStateActions.SET_MAPSTATE_CENTER, payload: center.center})
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Кординаты города успешно изменены"})
      }
    } catch (error) {
      dispatch ({type: MapStateActions.FETCH_MAPSTATE_ERROR, payload: error.message})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении кординат города"})
    }
  }
}

export const setMapStateZoom = (zoom: MapStateZoom) => {
  return async (dispatch: Dispatch<MapStateAction | ModalsAction>) => {
    try {
      dispatch({type: MapStateActions.FETCH_MAPSTATE})
      const response = await editMapStateZoom(zoom)
      if (response.status === 201){
        dispatch({type: MapStateActions.SET_MAPSTATE_ZOOM, payload: zoom.zoom})
        dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_SUCCESS, payload: "Зум карты успешно изменены"})
      }
    } catch (error) {
      dispatch ({type: MapStateActions.FETCH_MAPSTATE_ERROR, payload: error.message})
      dispatch({type: ModalsActions.SET_RESPONSE_MODAL_OPEN_FAIL, payload: "Произошла ошибка при изменении зума карты"})
    }
  }
}
