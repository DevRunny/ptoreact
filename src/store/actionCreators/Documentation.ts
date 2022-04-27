import {Dispatch} from "redux";
import {DocumentsAction, DocumentsActions} from "../../types/documents";
import {getDocumentation} from "../../API/documentation";

export const fetchDocumentsAC = () => {
    return async (dispatch: Dispatch<DocumentsAction>) => {
        try {
            dispatch({type: DocumentsActions.FETCH_DOCUMENTS})
            const response = await getDocumentation()
            dispatch({type: DocumentsActions.FETCH_DOCUMENTS_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: DocumentsActions.FETCH_DOCUMENTS_ERROR, payload: error.message })
        }
    }
}