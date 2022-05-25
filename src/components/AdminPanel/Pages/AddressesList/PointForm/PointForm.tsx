import React, {useState} from 'react';
import style from "./PointForm.module.css"
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import {Point} from "../../../../../types/points";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useActions} from "../../../../../hooks/useActions";

type Props = {
  point: Point
  index: number
}

const PointForm: React.FC<Props> = ({point, index}) => {

  const {checkedPoints} = useTypedSelector(state => state.points)
  const {addCheckPoint, deleteCheckPoint} = useActions()

  const verifyItemInCheckedPoints = (): boolean => {
    const item = checkedPoints.find(item => point.id === item.id)
    return !!item;
  }

  const [checked, setChecked] = useState<boolean>(verifyItemInCheckedPoints)

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
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

  return (
      <>
        <div className={style.addressBlock}>
          <div className={checked ? style.backgroundActive : style.background}>
            {index > 0
                ?
                <img
                    className={style.checkbox}
                    src={checked ? adminPanelImages.checkbox.checked.src : adminPanelImages.checkbox.empty.src}
                    alt={checked ? adminPanelImages.checkbox.checked.alt : adminPanelImages.checkbox.empty.alt}
                    onClick={() => {
                      changeChecked()
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
                onClickSaveFunc={onClickSave}
                required={true}
                itemType={"textArea"}
            />
            <AdminFormItem
                labelText={`Координаты ПТО ${index + 1}:`}
                mainStyle={"formItem"}
                inputStyle={style.inputAddress}
                inputType={"text"}
                value={point.coordinate.join(", ")}
                id={getUniqueId()}
                onClickSaveFunc={onClickSave}
                required={true}
            />
            <AdminFormItem
                labelText={`Режим работы ПТО ${index + 1}:`}
                mainStyle={"formItem"}
                inputStyle={style.textAreaAddress}
                inputType={"text"}
                value={point.workingMode}
                id={point.address + getUniqueId()}
                onClickSaveFunc={onClickSave}
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
