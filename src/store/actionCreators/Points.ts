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

export const deletePoint = (points: Point[]) => {
  return {
    type: PointsActions.DELETE_POINT,
    payload: points,
  }
}

export const addCheckPoint = (point: Point) => {
  return {
    type: PointsActions.CHECK_POINT,
    payload: point
  }
}

export const deleteCheckPoint = (checkedPoints: Point[]) => {
  return {
    type: PointsActions.DELETE_CHECK_POINT,
    payload: checkedPoints
  }
}