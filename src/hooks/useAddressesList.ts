import {useEffect, useState} from "react";
import {useActions} from "./useActions";
import {useTypedSelector} from "./useTypedSelector";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {useAuth} from "./useAuth";
import {fetchMapStateAC, setMapStateCenter} from "../store/actionCreators/MapState";
import {MapStateCenter} from "../types/mapState";

export const useAddressesList = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    fetchPointsAC,
    addPoint,
    deleteCheckedPoints,
    setMapStateCenter,
    setMapStateZoom,
    openDialogModal
  } = useActions()
  const {redirect} = useAuth()
  const {points, checkedPoints} = useTypedSelector(state => state.points)
  const mapState = useTypedSelector(state => state.mapState)

  const deletePoints = () => {
    if (checkedPoints.length > 0) {
      const newArrayPoints = points.filter(point => !checkedPoints.find(checkPoint => point.id === checkPoint.id))
      deleteCheckedPoints(newArrayPoints, [])
    }
  }

  const validateZoom = (e: any, value: string, callback: Function) => {
    if (Number(value) > 20) {
      callback("20")
    } else if (Number(value) < 1) {
      callback("1")
    } else {
      callback(value)
    }
  }

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    switch (id) {
      case "1": {
        const newCenter = inputValue.split(", ").map(coordinate => Number(coordinate))
        setMapStateCenter({center: newCenter})
        break
      }
      case "2": {
        setMapStateZoom({zoom: Number(inputValue)})
        break
      }
      default:
        break
    }
  }

  const fetch = async () => {
    setLoading(true)
    await fetchPointsAC()
    await fetchMapStateAC()
    setLoading(false)
  }

  useEffect(() => {
    redirect()
    fetch()
  }, [])

  return {loading, addPoint, mapState, deletePoints, validateZoom, openDialogModal, onClickSave, points, checkedPoints}
}