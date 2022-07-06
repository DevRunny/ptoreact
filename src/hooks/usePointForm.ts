import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";
import {useState} from "react";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {Point} from "../types/points";


export const usePointForm = (point: Point) => {
  const {checkedPoints} = useTypedSelector(state => state.points)
  const {addSelectedCheckPoint, deleteSelectedCheckPoint, setAddress, setCoordinate, setWorkingMode} = useActions()

  const verifyItemInCheckedPoints = (): boolean => {
    const item = checkedPoints.find(item => point.id === item.id)
    return !!item;
  }

  const [checked, setChecked] = useState<boolean>(verifyItemInCheckedPoints)

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(id)
    switch (id) {
      case point.address + point.id:
        setAddress(inputValue, point.id)
        break
      case getUniqueId() + point.id:
        const arrayCoordinate = inputValue.split(", ").map(coordinate => Number(coordinate))
        setCoordinate(arrayCoordinate, point.id)
        console.log("gay")
        break
      case point.workingMode + point.id:
        setWorkingMode(inputValue, point.id)
        console.log("mem")
        break
      default:
        break
    }
  }

  const changeChecked = () => {
    if (checked) {
      setChecked(false)
      deleteSelectedCheckPoint(point)
    } else {
      setChecked(true)
      addSelectedCheckPoint(point)
    }
  }

  const getUniqueId = () => {
    return point.coordinate.reduce((prev, curr) => prev + curr).toString()
  }

  return {checked, changeChecked, onClickSave, getUniqueId}
}