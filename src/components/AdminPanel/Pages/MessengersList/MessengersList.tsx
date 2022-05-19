import React from 'react';
import AdminMainTitle from "../AdminMainTitle";
import style from "./MessengersList.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";

function MessengersList() {
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Способы обратной связи"}/>
        <div className={style.contentWrap}>
          <SectionTitle titleText={"Список мессенджеров:"}/>
        </div>
      </div>
  );
}

export default MessengersList;