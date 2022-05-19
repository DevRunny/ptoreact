import React from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./AddressesList.module.css"
import AdminFormItem, {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";

const AddressesList = () => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Адрес и режим работы ПТО:"} />
        <div className={style.contentBlock}>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Укажите координаты города:"} />
            <div className={style.wrap}>
              <FormItemWithNotation
                  textNotation={"Координаты города вы можете уточнить в сервисе Яндекс.Карты"}
                  styleNotation={style.notation}
                  labelText={"Координаты города:"}
                  mainStyle={style.formItem}
                  inputType={"text"}
                  inputValue={"56.326802, 44.006506"}
                  inputStyle={style.inputCoordinate}
                  id={"1"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
              <AdminFormItem
                  labelText={"Размер карты (zoom):"}
                  mainStyle={style.formItem}
                  inputType={"number"}
                  inputValue={"10"}
                  id={"2"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
            </div>
          </div>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Список адресов ПТО:"} />
            <form className={style.formWrap}>
              <AdminFormItem
                  labelText={"Адрес ПТО 1:"}
                  mainStyle={"formItem"}
                  inputStyle={style.inputAddress}
                  inputType={"text"}
                  inputValue={"603105, Нижегородская обл., г.Нижний Новгород, ул.Генкиной, д.23"}
                  id={"1"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
              <AdminFormItem
                  labelText={"Координаты ПТО 1:"}
                  mainStyle={"formItem"}
                  inputStyle={style.inputCoordinatePTO}
                  inputType={"text"}
                  inputValue={"56.310318, 44.009867"}
                  id={"2"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
              <AdminFormItem
                  labelText={"Режим работы ПТО 1:"}
                  mainStyle={"formItem"}
                  inputStyle={style.inputWorkingMode}
                  inputType={"text"}
                  inputValue={"Понедельник-Пятница: 9:00-18:00 \n" +
                      "Суббота-Воскресенье: выходные"}
                  id={"3"}
                  onClickSaveFunc={onClickSave}
                  required={true}
              />
            </form>
            <AddFieldButton textButton={"Добавить адрес и режим работы"} onClickFunc={() => {
              console.log("Добавил элемент")
            }} icon={adminPanelImages.plusButton.blue.src} />
          </div>
        </div>
      </div>
  );
}

export default AddressesList;