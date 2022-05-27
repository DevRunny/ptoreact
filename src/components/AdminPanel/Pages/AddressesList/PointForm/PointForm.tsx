import React from 'react';
import style from "./PointForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {Point} from "../../../../../types/points";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {usePointForm} from "../../../../../hooks/usePointForm";

type Props = {
  point: Point
  index: number
}

const PointForm: React.FC<Props> = ({point, index}) => {

  const pointForm = usePointForm(point)

  return (
      <>
        <div className={style.addressBlock}>
          <div className={pointForm.checked ? style.backgroundActive : style.background}>
            {index > 0
                ?
                <img
                    className={style.checkbox}
                    src={pointForm.checked ? adminPanelImages.checkbox.checked.src : adminPanelImages.checkbox.empty.src}
                    alt={pointForm.checked ? adminPanelImages.checkbox.checked.alt : adminPanelImages.checkbox.empty.alt}
                    onClick={() => {
                      pointForm.changeChecked()
                    }}
                />
                :
                <></>
            }
          </div>
          <form className={style.formWrap}>
            <AdminFormItem
                labelText={`Адрес ПТО ${index + 1}:`}
                mainStyle={"formItem"}
                inputStyle={style.textAreaAddress}
                inputType={"text"}
                value={point.address}
                id={point.address}
                onClickSaveFunc={pointForm.onClickSave}
                required={true}
                itemType={"textArea"}
            />
            <AdminFormItem
                labelText={`Координаты ПТО ${index + 1}:`}
                mainStyle={"formItem"}
                inputStyle={style.inputAddress}
                inputType={"text"}
                value={point.coordinate.join(", ")}
                id={pointForm.getUniqueId()}
                onClickSaveFunc={pointForm.onClickSave}
                required={true}
            />
            <AdminFormItem
                labelText={`Режим работы ПТО ${index + 1}:`}
                mainStyle={"formItem"}
                inputStyle={style.textAreaAddress}
                inputType={"text"}
                value={point.workingMode}
                id={point.address + pointForm.getUniqueId()}
                onClickSaveFunc={pointForm.onClickSave}
                required={true}
                itemType={"textArea"}
            />
          </form>
        </div>
        <hr className={style.formLine} />
      </>
  );
};

export default PointForm;
