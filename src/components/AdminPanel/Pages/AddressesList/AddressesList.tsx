import React, {useEffect} from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./AddressesList.module.css"
import AdminFormItem, {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import PointForm from "./PointForm/PointForm";

const AddressesList = () => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }
  const {fetchPointsAC, addPoint} = useActions()
  const {points} = useTypedSelector(state => state.points)
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
              <AdminFormItem
                  labelText={"Размер карты (zoom):"}
                  mainStyle={style.formItem}
                  inputType={"number"}
                  value={"10"}
                  id={"2"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
            </div>
          </div>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Список адресов ПТО:"} />
            {points.map(point => <PointForm key={point.id} point={point} />)}
            <AddFieldButton textButton={"Добавить адрес и режим работы"} onClickFunc={() => {
              addPoint(points)
            }} icon={adminPanelImages.plusButton.blue.src} />
          </div>
        </div>
      </div>
  );
}

export default AddressesList;