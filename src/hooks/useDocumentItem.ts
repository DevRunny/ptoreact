import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";
import {useState} from "react";
import {InputType} from "../components/AdminPanel/Pages/AdminFormItem/AdminFormItem";
import {Document} from "../types/documents";


export const useDocumentItem = (document: Document) => {
  const {documents, checkedDocuments} = useTypedSelector(state => state.documents)
  const {addCheckDocument, deleteCheckDocument, setValuesDocument} = useActions()

  const verifyItemInCheckedDocuments = (): boolean => {
    const item = checkedDocuments.find(item => document.id === item.id)
    return !!item;
  }

  const [checked, setChecked] = useState<boolean>(verifyItemInCheckedDocuments)

  const onClickSave = (id: string, inputValue: string, inputType?: InputType) => {
    switch (id) {
      case "1":
        const newArrayDocumentsWithDescription = documents.map(item => {
          if (document.id === item.id) {
            return {id: document.id, documentDescription: inputValue, urlDocument: document.urlDocument}
          } else {
            return item
          }
        })
        setValuesDocument(newArrayDocumentsWithDescription)
        break
      case "2":
        const newArrayDocumentsWithFile = documents.map(item => {
          if (document.id === item.id) {
            return {id: document.id, documentDescription: document.documentDescription, urlDocument: inputValue}
          } else {
            return item
          }
        })
        setValuesDocument(newArrayDocumentsWithFile)
        break
      default:
        break
    }
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

  return {checked, changeChecked, onClickSave}
}