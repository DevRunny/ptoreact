import {useActions} from "./useActions";
import {useEffect, useState} from "react";

export const useFetchData = () => {

  const [isFetch, setIsFetching] = useState<boolean>(false)
  const {fetchAboutAC, fetchAccreditationAC, fetchContactsAC} = useActions()

  const fetch = async () => {
    await fetchAboutAC()
    await fetchAccreditationAC()
    await fetchContactsAC()
    setIsFetching(true)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    isFetch
  }
}