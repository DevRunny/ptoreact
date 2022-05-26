export enum DocumentsActions {
  FETCH_DOCUMENTS = "FETCH_DOCUMENTS",
  FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS",
  FETCH_DOCUMENTS_ERROR = "FETCH_DOCUMENTS_ERROR",
  ADD_DOCUMENT = "ADD_DOCUMENTS",
  DELETE_DOCUMENT = "DELETE_DOCUMENT",
  CHECK_DOCUMENT = "CHECK_DOCUMENT",
  DELETE_CHECK_DOCUMENT = "DELETE_CHECK_DOCUMENT"
}

export type DocumentsState = {
  documents: Document[]
  checkedDocuments: Document[]
  error: null | string
  loading: boolean
}

export type ResponseDocuments = Document[]

export type Document = {
  documentDescription: string,
  urlDocument: string,
  id: string
}

export type DocumentsAction =
    FetchDocuments |
    FetchDocumentsError |
    FetchDocumentsSuccess |
    AddDocument |
    DeleteDocument |
    CheckPoint |
    DeleteCheckPoint

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
