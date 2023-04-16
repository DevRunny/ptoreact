import {useActions} from "./useActions"
import {useTypedSelector} from "./useTypedSelector";

export const useInformationForm = () => {

  const {changeNameCompany, changeNumRegistry, changeInn, changeOgrn, changeOgrnip} = useActions()
  const {isOgrnip} = useTypedSelector(state => state.about.requisites)

  const onClickSave = (id: string, inputValue: string) => {
    switch (id) {
      case "nameCompany":
        changeNameCompany(inputValue)
        break
      case "numRegistry":
        changeNumRegistry(inputValue)
        break
      case "inn":
        changeInn(inputValue)
        break
      case "ogrn":
        changeOgrn(inputValue)
        break
      default:
        break
    }
  }

  const toggleCheckbox = () => {
    changeOgrnip(!isOgrnip)
  }

  return {
    onClickSave,
    toggleCheckbox,
    isActiveCheckbox: isOgrnip
  }
}