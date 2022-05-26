import React, {useEffect, useState} from 'react';
import style from "./DocumentList.module.css"
import AdminMainTitle from "../AdminMainTitle";
import AddFieldButton from "../AddFieldButton/AddFieldButton";
import {adminPanelImages} from "../../../../utils/adminPanelRoutesImages";
import DocumentItem from "./Document/DocumentItem";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import Preloader from "../../../Preloader/Preloader";
import classNames from "classnames";

const DocumentsList = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {documents, checkedDocuments} = useTypedSelector(state => state.documents)

  const {fetchDocumentsAC, addDocument, deleteDocument, deleteCheckDocument} = useActions()

  const deleteDocuments = () => {
    const newArrayDocuments = documents.filter(document => !checkedDocuments.find(checkDocument => document.id === checkDocument.id))
    deleteDocument(newArrayDocuments)
    deleteCheckDocument([])
  }

  const fetch = async () => {
    setLoading(true)
    await fetchDocumentsAC()
    setLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} />

  return (
      <div className={"adminContentBackground"}>
        <AdminMainTitle titleText={"Необходимые документы"} />
        <div className={style.contentWrap}>
          <div className={style.buttonWrap}>
            <AddFieldButton
                textButton={"Добавить файл"}
                onClickFunc={() => {
                  addDocument(documents)
                }}
                icon={adminPanelImages.plusButton.white.src}
                buttonStyle={style.addButton}
            />
            <AddFieldButton
                textButton={"Удалить файлы"}
                onClickFunc={deleteDocuments}
                icon={adminPanelImages.basketTrash.src}
                buttonStyle={
                  checkedDocuments.length
                      ?
                      style.deleteButton
                      :
                      classNames(style.deleteButton, style.deleteButtonDisabled)
                }
            />
          </div>
          {documents.map((document, index) => {
            return <DocumentItem
                key={document.id}
                document={document}
                index={index}
            />
          })}
          <AddFieldButton
              textButton={"Добавить документ"}
              onClickFunc={() => {
                addDocument(documents)
              }}
              icon={adminPanelImages.plusButton.blue.src}
              buttonStyle={style.addBottomButton}
          />

        </div>

      </div>
  );
}

export default DocumentsList;