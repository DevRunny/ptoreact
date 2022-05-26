import React, {useEffect, useState} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./AddressesList.module.css"
import {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import PointForm from "./PointForm/PointForm";
import classNames from "classnames";
import Preloader from "../../../Preloader/Preloader";

const AddressesList = () => {
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

  console.log(mapState.center)
  console.log(mapState.zoom)

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

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Адрес и режим работы ПТО:"} />
        <div className={style.contentBlock}>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Укажите координаты города:"} />
            <div className={style.wrap}>
              <FormItemWithNotation
                  textNotation={"Координаты города вы можете уточнить в сервисе"}
                  styleNotation={style.notation}
                  labelText={"Координаты города:"}
                  mainStyle={style.formItem}
                  inputType={"text"}
                  value={mapState.center.join(", ")}
                  inputStyle={style.inputCoordinate}
                  id={"1"}
                  onClickSaveFunc={onClickSave}
                  required={true}
                  link="https://yandex.ru/maps/"
                  textLink="Яндекс.Карты"
              />
              <FormItemWithNotation
                  textNotation={"Выберите размер карты от 1 до 20 (по умолчанию: 10)"}
                  styleNotation={style.notation}
                  labelText={"Размер карты (zoom):"}
                  mainStyle={style.zoomItem}
                  inputType={"number"}
                  value={mapState.zoom}
                  inputStyle={classNames(style.inputCoordinate, style.inputZoom)}
                  id={"2"}
                  onClickSaveFunc={onClickSave}
                  required={true}
                  onBlurFunc={validateZoom}
              />
            </div>
          </div>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Список адресов ПТО:"} />
            <div className={style.buttonWrap}>
              <AddFieldButton
                  textButton={"Добавить адрес и режим работы"}
                  onClickFunc={() => {
                    addPoint(points)
                  }}
                  icon={adminPanelImages.plusButton.white.src}
                  buttonStyle={style.addButton}
              />
              <AddFieldButton
                  textButton={"Удалить выбранные адреса"}
                  onClickFunc={deletePoints}
                  icon={adminPanelImages.basketTrash.src}
                  buttonStyle={
                    checkedPoints.length
                        ?
                        style.deleteButton
                        :
                        classNames(style.deleteButton, style.deleteButtonDisabled)
                  }
              />
            </div>
            {points.map((point, index) => <PointForm key={point.id} point={point} index={index} />)}
          </div>
        </div>
      </div>
  );
}

export default AddressesList;