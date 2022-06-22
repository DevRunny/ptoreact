import {useEffect, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";
import {useActions} from "./useActions";


export const usePrivacy = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const urlSite = document.location.protocol + `//` + document.location.host
  const {nameCompany} = useTypedSelector(state => state.about)
  const {emails} = useTypedSelector(state => state.contacts)
  const {fetchContactsAC, fetchAboutAC} = useActions()

  const fetch = async () => {
    setLoading(true)
    await fetchContactsAC()
    await fetchAboutAC()
    setLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  return {loading, urlSite, nameCompany, emails}

};
