import React from 'react';
import style from "./DocumentItem.module.css"
import {Document} from "../../../../../types/documents";
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {useDocumentItem} from "../../../../../hooks/useDocumentItem";

type Props = {
  document: Document
  index: number
  newItem: boolean
}

const DocumentItem: React.FC<Props> = ({document, index, newItem}) => {
  const documentItem = useDocumentItem(document)

  return (
      <div className={style.contentBlock}>
        <div className={documentItem.checked ? style.backgroundActive : newItem ? style.backgroundNewItem : style.background}>
          <img
              className={style.checkbox}
              src={documentItem.checked ? adminPanelImages.checkbox.checked.src : adminPanelImages.checkbox.empty.src}
              alt={documentItem.checked ? adminPanelImages.checkbox.checked.alt : adminPanelImages.checkbox.empty.alt}
              onClick={() => {
                documentItem.changeChecked()
              }}
          />
        </div>
        <div className={style.wrap}>
          <AdminFormItem
              disabled={!newItem}
              labelText={"Название:"}
              mainStyle={"formItem"}
              inputStyle={style.inputName}
              inputType={"text"}
              value={document.documentDescription}
              id={"1"}
              onClickSaveFunc={documentItem.onClickSave}
              required={true}
              itemType={"textArea"}
          />
          <AdminFormItem
              labelText={"Файл:"}
              mainStyle={"formItem"}
              inputStyle={style.inputFile}
              inputType={"text"}
              value={document.urlDocument}
              id={"2"}
              onClickSaveFunc={documentItem.onClickSave}
              required={true}
              disabled={!newItem}
          />
          <hr />
        </div>
      </div>
  );
};

export default DocumentItem;
