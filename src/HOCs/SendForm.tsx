import React, {useEffect, useRef, useState} from "react";
import SendForm from "../components/SendForm/SendForm";
import {getAccreditation} from "../API/acccreditation";
import {Category} from "../types/accreditation";
import {useTypedSelector} from "../hooks/useTypedSelector";


const withContainerSendForm = (Component: React.ComponentType) => {
  return () => {

    const currentCategories = useTypedSelector(state => state.accreditation.categories)
    const categoryRef = useRef<Category[] | null>(null)
    categoryRef.current = currentCategories

    const [categories, setCategories] = useState<Category[]>([] as Category[])
    const [isFetching, setIsFetching] = useState<boolean>(false)


    useEffect(() => {
      setIsFetching(true)
      getAccreditation().then(data => setCategories(data)).then(() => setIsFetching(false))
      console.log(isFetching)
    }, [])

    // console.log(isFetching)

    if (!currentCategories.length && isFetching) {
      return (
          <div>
            Загрузка....
          </div>
      )
    }

    if (!currentCategories.length) {
      return <Component />
    }

    if (!isFetching) {
      return (
          <Component />
      )
    }
  }
}

export const WithFetchSendForm = withContainerSendForm(SendForm)