// State списка документов

export type DocumentsState = {
  documents: Document[]
  checkedDocuments: Document[]
  error: null | string
  loading: boolean
}

export type Document = {
  documentDescription: string,
  urlDocument: string,
  id: string
}

// Response от API

export type ResponseDocuments = Document[]

// Экшены

export enum DocumentsActions {
  FETCH_DOCUMENTS = "FETCH_DOCUMENTS",
  FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS",
  FETCH_DOCUMENTS_ERROR = "FETCH_DOCUMENTS_ERROR",
  ADD_DOCUMENT = "ADD_DOCUMENTS",
  DELETE_DOCUMENT = "DELETE_DOCUMENT",
  CHECK_DOCUMENT = "CHECK_DOCUMENT",
  DELETE_CHECK_DOCUMENT = "DELETE_CHECK_DOCUMENT",
  SET_VALUES_DOCUMENT = "SET_VALUES_DOCUMENT"
}

type FetchDocuments = {
  type: DocumentsActions.FETCH_DOCUMENTS
}

type FetchDocumentsSuccess = {
  type: DocumentsActions.FETCH_DOCUMENTS_SUCCESS
  payload: Document[]
}

type FetchDocumentsError = {
  type: DocumentsActions.FETCH_DOCUMENTS_ERROR
  payload: string | null
}

type AddDocument = {
  type: DocumentsActions.ADD_DOCUMENT
  payload: Document
}

type DeleteDocument = {
  type: DocumentsActions.DELETE_DOCUMENT
  payload: Document[]
}

type CheckPoint = {
  type: DocumentsActions.CHECK_DOCUMENT,
  payload: Document
}

type DeleteCheckPoint = {
  type: DocumentsActions.DELETE_CHECK_DOCUMENT,
  payload: Document[]
}

type SetValuesDocument = {
  type: DocumentsActions.SET_VALUES_DOCUMENT,
  payload: Document[]
}

// Экспорт всех экшенов

export type DocumentsAction =
    FetchDocuments |
    FetchDocumentsError |
    FetchDocumentsSuccess |
    AddDocument |
    DeleteDocument |
    CheckPoint |
    DeleteCheckPoint |
    SetValuesDocument

