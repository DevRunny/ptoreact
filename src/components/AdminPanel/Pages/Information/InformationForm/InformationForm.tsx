import React from 'react';
import style from "./InfromationForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {AboutDataAdmin} from "../../../../../types/about";
import {useActions} from "../../../../../hooks/useActions";

type Props = {
  data: AboutDataAdmin
}

const InformationForm: React.FC<Props> = ({data}) => {

  const {setNameCompany, setNumRegistry, setInn, setOgrn} = useActions()

  const onClickSave = (id: string, inputValue: string) => {
    switch (id) {
      case "nameCompany":
        setNameCompany(inputValue)
        break
      case "numRegistry":
        setNumRegistry(Number(inputValue))
        break
      case "inn":
        setInn(Number(inputValue))
        break
      case "ogrn":
        setOgrn(Number(inputValue))
        break
      default:
        break
    }
  }
  return (
      <form className={style.form}>
        <AdminFormItem
            labelText={"Название компании или ИП:"}
            mainStyle={style.formItem}
            inputType={"text"}
            inputValue={data.nameCompany}
            required={true}
            id={"nameCompany"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"Номер в реестре технического оператора РСА:"}
            mainStyle={style.formItem}
            inputType={"number"}
            inputValue={data.requisites.numRegistry || ""}
            required={true}
            id={"numRegistry"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"ИНН:"}
            mainStyle={style.formItem}
            inputType={"number"}
            inputValue={data.requisites.inn || ""}
            required={true}
            id={"inn"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"ОГРН:"}
            mainStyle={style.formItem}
            inputType={"number"}
            inputValue={data.requisites.ogrn || ""}
            required={true}
            id={"ogrn"}
            onClickSaveFunc={onClickSave}
        />
      </form>
  )
}

export default InformationForm
