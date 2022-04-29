export enum DocumentsActions {
    FETCH_DOCUMENTS = "FETCH_DOCUMENTS",
    FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS",
    FETCH_DOCUMENTS_ERROR = "FETCH_DOCUMENTS_ERROR"
}

export interface DocumentsState {
    documents: Document[]
    error: null | string,
    loading: boolean
}

export type Document = {
    documentDescription: string,
    urlDocument: string,
    id: string
}

export type DocumentsAction = FetchDocuments | FetchDocumentsError | FetchDocumentsSuccess

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
