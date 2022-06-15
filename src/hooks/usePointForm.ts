import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";
import {useState} from "react";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {Point} from "../types/points";


export const usePointForm = (point: Point) => {
  const {checkedPoints, points} = useTypedSelector(state => state.points)
  const {addCheckPoint, deleteCheckPoint, setAddress} = useActions()

  const verifyItemInCheckedPoints = (): boolean => {
    const item = checkedPoints.find(item => point.id === item.id)
    return !!item;
  }

  const [checked, setChecked] = useState<boolean>(verifyItemInCheckedPoints)

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    switch (id) {
      case point.address:
        const newArrayAddressesWithAddress = points.map(item => {
          if (item.id === point.id) {
            return {
              id: item.id,
              address: inputValue,
              workingMode: item.workingMode,
              coordinate: [...item.coordinate]
            }
          } else {
            return item
          }
        })
        setAddress(newArrayAddressesWithAddress)
        break
      case getUniqueId():
        const arrayCoordinate = inputValue.split(", ").map(coordinate => Number(coordinate))
        const newArrayAddressesWithCoordinate = points.map(item => {
          if (item.id === point.id) {
            return {
              id: item.id,
              address: item.address,
              workingMode: item.workingMode,
              coordinate: arrayCoordinate
            }
          } else {
            return item
          }
        })
        setAddress(newArrayAddressesWithCoordinate)
        break
      case point.address + getUniqueId():
        const newArrayAddresses = points.map(item => {
          if (item.id === point.id) {
            return {
              id: item.id,
              address: item.address,
              workingMode: inputValue,
              coordinate: [...item.coordinate]
            }
          } else {
            return item
          }
        })
        setAddress(newArrayAddresses)
        break
      default:
        break
    }
  }

  const changeChecked = () => {
    if (checked) {
      setChecked(false)
      const newCheckPoints = checkedPoints.filter(item => item.id !== point.id)
      deleteCheckPoint(newCheckPoints)
    } else {
      setChecked(true)
      addCheckPoint(point)
    }
  }

  const getUniqueId = () => {
    return point.coordinate.reduce((prev, curr) => prev + curr).toString()
  }

  return {checked, changeChecked, onClickSave, getUniqueId}
}