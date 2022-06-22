import { useEffect, useState } from "react"
import { addSelectCategory } from "../API/acccreditation"
import { useActions } from "./useActions"
import { useAuth } from "./useAuth"
import { useTypedSelector } from "./useTypedSelector"

export const useAccreditationList = () => {

  const {allCategories, selectedCategories} = useTypedSelector(state => state.accreditation)
  const {redirect} = useAuth()
  const {fetchAllCategoriesAC, fetchSelectedCategoriesAC, openResponseModalFail, openResponseModalSuccess} = useActions()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onClickSaveChanges = async () => {
      const response = await addSelectCategory(selectedCategories)
      if (response.status === 200) {
        openResponseModalSuccess("Изменения успешно сохранены")
      } else {
        openResponseModalFail("Произошла ошибка при изменении категорий")
      }
  }

  const getCategories = async () => {
    setIsLoading(true)
    await fetchAllCategoriesAC()
    await fetchSelectedCategoriesAC()
    setIsLoading(false)
  }

  useEffect(() => {
    redirect()
    getCategories()
  }, [])


  return {
    isLoading, 
    allCategories,
    selectedCategories,
    onClickSaveChanges
  }
}