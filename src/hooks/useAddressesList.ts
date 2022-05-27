import {useEffect, useState} from "react";
import {useActions} from "./useActions";
import {useTypedSelector} from "./useTypedSelector";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";

export const useAddressesList = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    fetchPointsAC,
    addPoint,
    deletePoint,
    deleteCheckPoint,
    fetchContactsAC,
    setMapStateCenter,
    setMapZoom
  } = useActions()
  const {points, checkedPoints} = useTypedSelector(state => state.points)
  const {mapState} = useTypedSelector(state => state.contacts)

  const deletePoints = () => {
    const newArrayPoints = points.filter(point => !checkedPoints.find(checkPoint => point.id === checkPoint.id))
    deletePoint(newArrayPoints)
    deleteCheckPoint([])
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
        setMapStateCenter(newCenter)
        break
      }
      case "2": {
        setMapZoom(Number(inputValue))
        break
      }
      default:
        break
    }
  }

  const fetch = async () => {
    setLoading(true)
    await fetchPointsAC()
    await fetchContactsAC()
    setLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {loading, addPoint, mapState, deletePoints, validateZoom, onClickSave, points, checkedPoints}
}