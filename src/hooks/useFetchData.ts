import {useActions} from "./useActions";
import {useEffect, useState} from "react";

export const useFetchData = () => {

  const [isFetch, setIsFetching] = useState<boolean>(false)
  const {fetchAboutAC, fetchDocumentsAC} = useActions()

  const fetch = async () => {
    await fetchAboutAC()
    await fetchDocumentsAC()
    setIsFetching(true)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    isFetch
  }
}