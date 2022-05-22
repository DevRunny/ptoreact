import {Dispatch} from "redux";
import {Point, PointsAction, PointsActions} from "../../types/points";
import {getPoints} from "../../API/points";

export const fetchPointsAC = () => async (dispatch: Dispatch<PointsAction>) => {
  try {
    dispatch({type: PointsActions.FETCH_POINTS})
    const response = await getPoints()
    dispatch({type: PointsActions.FETCH_POINTS_SUCCESS, payload: response})
  } catch (error) {
    dispatch({type: PointsActions.FETCH_POINTS_ERROR, payload: error.message})
  }
}

export const addPoint = (points: Point[]) => {
  return {
    type: PointsActions.ADD_POINT,
    payload: {id: points.length + 1, address: "", workingMode: "", coordinate: [0, 0]}
  }
}