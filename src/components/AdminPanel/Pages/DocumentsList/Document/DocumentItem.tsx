import React, {useState} from 'react';
import style from "./DocumentItem.module.css"
import {Document} from "../../../../../types/documents";
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {useActions} from "../../../../../hooks/useActions";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

type Props = {
  document: Document
  index: number
}

const DocumentItem: React.FC<Props> = ({document, index}) => {
  const {documents, checkedDocuments} = useTypedSelector(state => state.documents)
  const {addCheckDocument, deleteCheckDocument} = useActions()

  console.log(documents)

  const verifyItemInCheckedDocuments = (): boolean => {
    const item = checkedDocuments.find(item => document.id === item.id)
    return !!item;
  }

  const [checked, setChecked] = useState<boolean>(verifyItemInCheckedDocuments)

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    console.log(inputValue)
  }

  const changeChecked = () => {
    if (checked) {
      setChecked(false)
      const newCheckDocuments = checkedDocuments.filter(item => item.id !== document.id)
      deleteCheckDocument(newCheckDocuments)
    } else {
      setChecked(true)
      addCheckDocument(document)
    }
  }

  return (
      <div className={style.contentBlock}>
        <div className={checked ? style.backgroundActive : style.background}>
          <img
              className={style.checkbox}
              src={checked ? adminPanelImages.checkbox.checked.src : adminPanelImages.checkbox.empty.src}
              alt={checked ? adminPanelImages.checkbox.checked.alt : adminPanelImages.checkbox.empty.alt}
              onClick={() => {
                changeChecked()
              }}
          />
        </div>
        <div className={style.wrap}>
          <AdminFormItem
              labelText={"Название:"}
              mainStyle={"formItem"}
              inputType={"text"}
              value={document.documentDescription}
              id={"1"}
              onClickSaveFunc={onClickSave}
              required={true}
          />
          <AdminFormItem
              labelText={"Файл:"}
              mainStyle={"formItem"}
              inputType={"text"}
              value={document.urlDocument}
              id={"2"}
              onClickSaveFunc={onClickSave}
              required={true}
          />
          <hr />
        </div>
      </div>
  );
};

export default DocumentItem;
