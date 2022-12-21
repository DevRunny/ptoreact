import {useActions} from "./useActions"

export const useInformationForm = () => {

  const {changeNameComany, changeNumRegistry, changeInn, changeOgrn} = useActions()

  const onClickSave = (id: string, inputValue: string) => {
    switch (id) {
      case "nameCompany":
        changeNameComany(inputValue)
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

  return {
    onClickSave
  }
}