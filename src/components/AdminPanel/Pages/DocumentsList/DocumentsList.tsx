import React from 'react';
import style from "./DocumentList.module.css"
import AdminMainTitle from "../AdminMainTitle";
import ServiceFieldButton from "../AddFieldButton/ServiceFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import DocumentItem from "./Document/DocumentItem";
import Preloader from "../../../Preloader/Preloader";
import classNames from "classnames";
import {useDocumentsList} from "../../../../hooks/useDocumentsList";

const DocumentsList = () => {
  const documentsList = useDocumentsList()

  if (documentsList.loading) return <Preloader size={"big"} styleLoader={"adminLoader"} heightWrapLoader={"fullHeight"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Необходимые документы"} />
        <div className={style.contentWrap}>
          <div className={style.buttonWrap}>
            <ServiceFieldButton
                textButton={"Добавить файл"}
                onClickFunc={documentsList.addDocumentField}
                icon={adminPanelImages.plusButton.white.src}
                buttonStyle={
                  !documentsList.documents.find(item => item.urlDocument === "Выберите файл")
                      ?
                      style.addButton
                      :
                      classNames(style.addButton, style.addButtonDisabled)
                }
            />
            <ServiceFieldButton
                textButton={"Удалить файлы"}
                onClickFunc={documentsList.deleteDocuments}
                icon={adminPanelImages.basketTrash.src}
                buttonStyle={
                  documentsList.checkedDocuments.length > 0
                      ?
                      style.deleteButton
                      :
                      classNames(style.deleteButton, style.deleteButtonDisabled)
                }
            />
          </div>
          {documentsList.reverseDocuments().map((document, index) => {
            return <DocumentItem
                key={document.id}
                document={document}
                index={index}
                newItem={document.urlDocument === "Выберите файл"}
            />
          })}
        </div>

      </div>
  );
}

export default DocumentsList;