import React from 'react';
import style from "./Document.module.css"
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";

const Document = () => {
  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }

  return (
      <div className={style.contentBlock}>
        <img className={style.checkbox} src={adminPanelImages.checkbox.empty.src} alt={adminPanelImages.checkbox.empty.alt} />
        <div className={style.wrap}>
          <AdminFormItem
              labelText={"Название:"}
              mainStyle={"formItem"}
              inputType={"text"}
              inputValue={"Аттестат аккредитации оператора технического осмотра транспортных средств"}
              id={"1"}
              onClickSaveFunc={onClickSave}
          />
          <AdminFormItem
              labelText={"Файл:"}
              mainStyle={"formItem"}
              inputType={"text"}
              inputValue={"file.pdf"}
              id={"2"}
              onClickSaveFunc={onClickSave}
          />
          <hr />
        </div>
      </div>
  );
};

export default Document;
