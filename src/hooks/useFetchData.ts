import {useActions} from "./useActions";
import {useEffect, useState} from "react";
import {fetchMapStateAC} from "../store/actionCreators/MapState";

export const useFetchData = () => {

  const [isFetch, setIsFetching] = useState<boolean>(false)
  const {
    fetchAboutAC,
    fetchSelectedCategoriesAC,
    fetchContactsAC,
    fetchDocumentsAC,
    fetchMessengersAC,
    fetchPointsAC,
    fetchMapStateAC
  } = useActions()

  const fetch = async () => {
    await fetchAboutAC()
    await fetchSelectedCategoriesAC()
    await fetchDocumentsAC()
    await fetchContactsAC()
    await fetchMessengersAC()
    await fetchPointsAC()
    await fetchMapStateAC()
    setIsFetching(true)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    isFetch
  }
}