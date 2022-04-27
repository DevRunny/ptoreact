import {DocumentsAction, DocumentsActions, DocumentsState} from "../../types/documents";

const initialState: DocumentsState = {
    documents: [],
    error: null,
    loading: false
}

export const documentationReducer = (state = initialState, action: DocumentsAction): DocumentsState => {
    switch (action.type) {
        case DocumentsActions.FETCH_DOCUMENTS:
            return {...state, error: null, loading: true}
        case DocumentsActions.FETCH_DOCUMENTS_SUCCESS:
            return {error: null, loading: false, documents: action.payload}
        case DocumentsActions.FETCH_DOCUMENTS_ERROR:
            return {...state, error: action.payload, loading: true}
        default:
            return state
    }
}