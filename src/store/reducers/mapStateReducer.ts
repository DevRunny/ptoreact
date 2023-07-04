import {MapState, MapStateAction, MapStateActions} from "../../types/mapState";

const initialState: MapState = {
  center: [55.755793, 37.617134],
  zoom: 10,
  loading: false,
  error: null
}

export const mapStateReducer = (state = initialState, action: MapStateAction): MapState => {
  switch (action.type) {
    case MapStateActions.FETCH_MAPSTATE:
      return {...state, loading: true}

    case MapStateActions.FETCH_MAPSTATE_SUCCESS:
      return {...state,
        center: action.payload.center,
        zoom: action.payload.zoom,
        loading: false
      }

    case MapStateActions.FETCH_MAPSTATE_ERROR:
      return {...state, loading: false, error: action.payload}

    case MapStateActions.SET_MAPSTATE_CENTER:
      return {...state, center: action.payload}

    case MapStateActions.SET_MAPSTATE_ZOOM:
      return {...state, zoom: action.payload}
  }
}