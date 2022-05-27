import {Dispatch} from "redux";
import {Document, DocumentsAction, DocumentsActions} from "../../types/documents";
import {getDocumentation} from "../../API/documentation";
import document from "../../components/Documentation/Document/Document";

export const fetchDocumentsAC = () => async (dispatch: Dispatch<DocumentsAction>) => {
  try {
    dispatch({type: DocumentsActions.FETCH_DOCUMENTS})
    const response = await getDocumentation()
    dispatch({type: DocumentsActions.FETCH_DOCUMENTS_SUCCESS, payload: response})
  } catch (error) {
    dispatch({type: DocumentsActions.FETCH_DOCUMENTS_ERROR, payload: error.message})
  }
}

export const addDocument = (documents: Document[]) => {
  return {
    type: DocumentsActions.ADD_DOCUMENT,
    payload: {
      id: documents.length + 1,
      urlDocument: "Выберите файл",
      documentDescription: "Которое будет отображаться на сайте"
    }
  }
}

export const deleteDocument = (documents: Document[]) => {
  return {
    type: DocumentsActions.DELETE_DOCUMENT,
    payload: documents
  }
}


export const addCheckDocument = (document: Document) => {
  return {
    type: DocumentsActions.CHECK_DOCUMENT,
    payload: document
  }
}

export const deleteCheckDocument = (checkedDocuments: Document[]) => {
  return {
    type: DocumentsActions.DELETE_CHECK_DOCUMENT,
    payload: checkedDocuments
  }
}

export const setValuesDocument = (documents: Document[]) => {
  return {
    type: DocumentsActions.SET_VALUES_DOCUMENT,
    payload: documents
  }
}