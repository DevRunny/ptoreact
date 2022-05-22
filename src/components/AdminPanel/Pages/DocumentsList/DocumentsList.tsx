import React from 'react';
import style from "./DocumentList.module.css"
import AdminMainTitle from "../AdminMainTitle";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import Document from "./Document/Document";

const DocumentsList = () => {
  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Необходимые документы"} />
        <div className={style.contentWrap}>
          <div className={style.buttonWrap}>
            <AddFieldButton
                textButton={"Добавить файл"}
                onClickFunc={() => {
                  console.log("Добавил элемент")
                }}
                icon={adminPanelImages.plusButton.white.src}
                buttonStyle={style.addButton}
            />
            <AddFieldButton
                textButton={"Удалить файлы"}
                onClickFunc={() => {
                  console.log("Удалены элементы")
                }}
                icon={adminPanelImages.basketTrash.src}
                buttonStyle={style.deleteButton}
            />
          </div>
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <AddFieldButton
              textButton={"Добавить документ"}
              onClickFunc={() => {
                console.log("Добавить документ")
              }}
              icon={adminPanelImages.plusButton.blue.src} />
        </div>

      </div>
  );
}

export default DocumentsList;