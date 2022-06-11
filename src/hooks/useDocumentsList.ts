import {useEffect, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";
import {Document} from "../types/documents";
import {useActions} from "./useActions";
import {useAuth} from "./useAuth";

export const useDocumentsList = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {documents, checkedDocuments} = useTypedSelector(state => state.documents)

  const reverseDocuments = () => {
    const newArray = [] as Document[]

    for (let i = documents.length - 1; i >= 0; i--) {
      newArray.push(documents[i])
    }
    return newArray
  }

  const {fetchDocumentsAC, addDocument, deleteDocument, deleteCheckDocument} = useActions()
  const {redirect} = useAuth()

  const deleteDocuments = () => {
    const newArrayDocuments = documents.filter(document => !checkedDocuments.find(checkDocument => document.id === checkDocument.id))
    deleteDocument(newArrayDocuments)
    deleteCheckDocument([])
  }

  const addDocumentField = () => {
    const newDocument = documents.find(item => item.urlDocument === "Выберите файл")
    if (!newDocument) {
      addDocument(documents)
    } else {
      return
    }
  }

  const fetch = async () => {
    setLoading(true)
    await fetchDocumentsAC()
    setLoading(false)
  }

  useEffect(() => {
    redirect()
    fetch()
  }, [])

  return {loading, documents, reverseDocuments, deleteDocuments, addDocumentField, checkedDocuments}
}