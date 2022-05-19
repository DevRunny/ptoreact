import React from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./MessengersList.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import AdminFormItem, {InputType} from "../AdminFormItem/AdminFormItem";
import {FormItemWithNotation} from "../../../../HOCs/AdminFormItem";

function MessengersList() {

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Способы обратной связи"} />
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Список мессенджеров:"} />
          <div className={style.itemWrap}>
            <FormItemWithNotation
                textNotation={"@runaway4uk"}
                styleNotation={style.notation}
                mainStyle={"formItem"}
                inputStyle={style.inputMessenger}
                inputType={"text"}
                inputValue={"@Runaway4uk"}
                id={"1"}
                onClickSaveFunc={onClickSave}
                labelText={"Telegram:"} />
            <FormItemWithNotation
                textNotation={"+79123456789"}
                styleNotation={style.notation}
                mainStyle={"formItem"}
                inputStyle={style.inputMessenger}
                inputType={"text"}
                inputValue={"+79999999999"}
                id={"2"}
                onClickSaveFunc={onClickSave}
                labelText={"WhatsApp:"} />
            <FormItemWithNotation
                textNotation={"runaway4uk"}
                styleNotation={style.notation}
                mainStyle={"formItem"}
                inputStyle={style.inputMessenger}
                inputType={"text"}
                inputValue={"runaway4uk"}
                id={"3"}
                onClickSaveFunc={onClickSave}
                labelText={"VK (Вконтакте):"} />
            <FormItemWithNotation
                textNotation={"+79123456789"}
                styleNotation={style.notation}
                mainStyle={"formItem"}
                inputStyle={style.inputMessenger}
                inputType={"text"}
                inputValue={"+79529999999"}
                id={"4"}
                onClickSaveFunc={onClickSave}
                labelText={"Viber:"} />
          </div>
        </div>
      </div>
  );
}

export default MessengersList;