import React, {useEffect} from 'react';
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

const AddressesList = () => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }
  const {fetchPointsAC, addPoint, deletePoint, deleteCheckPoint} = useActions()
  const {points, checkedPoints} = useTypedSelector(state => state.points)

  const deletePoints = () => {
    const newArrayPoints = points.filter(point => !checkedPoints.find(checkPoint => point.id === checkPoint.id))
    deletePoint(newArrayPoints)
    deleteCheckPoint([])
  }

  useEffect(() => {
    fetchPointsAC()
  }, [])


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
                  value={"56.326802, 44.006506"}
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
                  value={10}
                  inputStyle={classNames(style.inputCoordinate, style.inputZoom)}
                  id={"2"}
                  onClickSaveFunc={onClickSave}
                  required={true}
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
              {checkedPoints.length
                  ?
                  <AddFieldButton
                      textButton={"Удалить выбранные адреса"}
                      onClickFunc={deletePoints}
                      icon={adminPanelImages.basketTrash.src}
                      buttonStyle={style.deleteButton}
                  />
                  :
                  <></>
              }
            </div>
            {points.map((point, index) => <PointForm key={point.id} point={point} index={index} />)}
          </div>
        </div>
      </div>
  );
}

export default AddressesList;