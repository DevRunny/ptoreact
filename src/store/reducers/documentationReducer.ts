import {Document, DocumentsAction, DocumentsActions, DocumentsState} from "../../types/documents";

const initialState: DocumentsState = {
  documents: [] as Document[],
  checkedDocuments: [] as Document[],
  error: null,
  loading: false
}

export const documentationReducer = (state = initialState, action: DocumentsAction): DocumentsState => {
  switch (action.type) {
    case DocumentsActions.FETCH_DOCUMENTS:
      return {...state, error: null, loading: true}
    case DocumentsActions.FETCH_DOCUMENTS_SUCCESS:
      return {error: null, loading: false, documents: action.payload, checkedDocuments: []} // пустой checkedDocuments
    case DocumentsActions.FETCH_DOCUMENTS_ERROR:
      return {...state, error: action.payload, loading: true}
    case DocumentsActions.ADD_DOCUMENT:
      return {...state, documents: [...state.documents, action.payload]}
    case DocumentsActions.DELETE_DOCUMENT:
      return {...state, documents: action.payload}
    case DocumentsActions.CHECK_DOCUMENT:
      return {...state, checkedDocuments: [...state.checkedDocuments, action.payload]}
    case DocumentsActions.DELETE_CHECK_DOCUMENT:
      return {...state, checkedDocuments: action.payload}
    default:
      return state
  }
}