import {useEffect, useState} from "react"
import {selectCategories} from "../API/acccreditation"
import {useActions} from "./useActions"
import {useAuth} from "./useAuth"
import {useTypedSelector} from "./useTypedSelector"
import {Category} from "../types/accreditation";

export const useAccreditationList = () => {

  const {categories} = useTypedSelector(state => state.accreditation)
  const {redirect} = useAuth()
  const {
    fetchAllCategoriesAC,
    fetchSelectedCategoriesAC,
    openResponseModalFail,
    openResponseModalSuccess
  } = useActions()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onClickSaveChanges = async () => {
    const selectedCategories: Category[] = categories.filter((category: Category) => category.selected)
    const response = await selectCategories(selectedCategories.map((category: Category) => category.id))
    if (response.status === 201) {
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
    categories,
    onClickSaveChanges
  }
}