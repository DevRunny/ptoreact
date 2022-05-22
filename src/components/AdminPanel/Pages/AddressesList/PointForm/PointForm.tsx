import React from 'react';
import style from "./PointForm.module.css"
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import {Point} from "../../../../../types/points";

type Props = {
  point: Point
}

const PointForm: React.FC<Props> = ({point}) => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }

  const getUniqueId = () => {
    return point.coordinate.reduce((prev, curr) => prev + curr).toString()
  }

  return (
      <>
        <form className={style.formWrap}>
          <AdminFormItem
              labelText={`Адрес ПТО ${point.id}:`}
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
              labelText={`Координаты ПТО ${point.id}:`}
              mainStyle={"formItem"}
              inputStyle={style.inputAddress}
              inputType={"text"}
              value={point.coordinate.join(", ")}
              id={getUniqueId()}
              onClickSaveFunc={onClickSave}
              required={true}
          />
          <AdminFormItem
              labelText={`Режим работы ПТО ${point.id}:`}
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
        <hr className={style.formLine} />
      </>
  );
};

export default PointForm;
