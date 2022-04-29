import {useActions} from "./useActions";
import {useEffect, useState} from "react";

export const useFetchData = () => {

  const [isFetch, setIsFetching] = useState<boolean>(false)
  const {fetchAboutAC, fetchAccreditationAC, fetchContactsAC, fetchDocumentsAC, fetchMessengersAC} = useActions()

  const fetch = async () => {
    await fetchAboutAC()
    await fetchAccreditationAC()
    await fetchDocumentsAC()
    await fetchContactsAC()
    await fetchMessengersAC()
    setIsFetching(true)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    isFetch
  }
}