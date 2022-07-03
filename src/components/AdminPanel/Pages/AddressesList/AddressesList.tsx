import React from 'react';
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./AddressesList.module.css"
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import PointForm from "./PointForm/PointForm";
import classNames from "classnames";
import Preloader from "../../../Preloader/Preloader";
import {useAddressesList} from "../../../../hooks/useAddressesList";

const AddressesList = () => {

  const addressesList = useAddressesList()
  if (addressesList.loading) return <Preloader size={"big"} styleLoader={"adminLoader"} heightWrapLoader={"fullHeight"} />

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
                  value={addressesList.mapState.center.join(", ")}
                  inputStyle={style.inputCoordinate}
                  id={"1"}
                  onClickSaveFunc={addressesList.onClickSave}
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
                  value={addressesList.mapState.zoom}
                  inputStyle={classNames(style.inputCoordinate, style.inputZoom)}
                  id={"2"}
                  onClickSaveFunc={addressesList.onClickSave}
                  required={true}
                  onBlurFunc={addressesList.validateZoom}
              />
            </div>
          </div>
          <div className={style.contentWrap}>
            <SectionTitle titleText={"Список адресов ПТО:"} />
            <div className={style.buttonWrap}>
              <AddFieldButton
                  textButton={"Добавить адрес и режим работы"}
                  onClickFunc={() => {
                    addressesList.addPoint({
                      id: (addressesList.points.length + 1).toString(),
                      address: "",
                      workingMode: "",
                      coordinate: [0, 0]
                    }, addressesList.points)
                  }}
                  icon={adminPanelImages.plusButton.white.src}
                  buttonStyle={
                    addressesList.points.length === 3
                        ?
                        classNames(style.addButton, style.buttonDisabled)
                        :
                        style.addButton
                  }
              />
              <AddFieldButton
                  textButton={"Удалить выбранные адреса"}
                  onClickFunc={addressesList.deletePoints}
                  icon={adminPanelImages.basketTrash.src}
                  buttonStyle={
                    addressesList.checkedPoints.length
                        ?
                        style.deleteButton
                        :
                        classNames(style.deleteButton, style.buttonDisabled)
                  }
              />
            </div>
            {addressesList.points.map((point, index) => <PointForm key={point.id} point={point} index={index} />)}
          </div>
        </div>
      </div>
  );
}

export default AddressesList;