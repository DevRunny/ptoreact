import {useActions} from "./useActions";
import {useEffect, useState} from "react";

export const useFetchData = () => {

  const [isFetch, setIsFetching] = useState<boolean>(false)
  const {
    fetchAboutAC,
    fetchSelectedCategoriesAC,
    fetchContactsAC,
    fetchDocumentsAC,
    fetchMessengersAC,
    fetchPointsAC
  } = useActions()

  const fetch = async () => {
    await fetchAboutAC()
    await fetchSelectedCategoriesAC()
    await fetchDocumentsAC()
    await fetchContactsAC()
    await fetchMessengersAC()
    await fetchPointsAC()
    setIsFetching(true)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    isFetch
  }
}