import React from 'react';
import style from "./InfromationForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {AboutDataAdmin} from "../../../../../types/about";
import {useActions} from "../../../../../hooks/useActions";
import {updateAbout} from "../../../../../API/about";

type Props = {
  data: AboutDataAdmin
}

const InformationForm: React.FC<Props> = ({data}) => {

  const {setNameCompany, setNumRegistry, setInn, setOgrn} = useActions()

  const onClickSave = (id: string, inputValue: string) => {
    switch (id) {
      case "nameCompany":
        updateAbout(inputValue)
        setNameCompany(inputValue)
        break
      case "numRegistry":
        updateAbout(Number(inputValue), "numRegistry")
        setNumRegistry(Number(inputValue))
        break
      case "inn":
        updateAbout(Number(inputValue), "inn")
        setInn(Number(inputValue))
        break
      case "ogrn":
        updateAbout(Number(inputValue), "ogrn")
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
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"text"}
            value={data.nameCompany}
            required={true}
            id={"nameCompany"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"Номер в реестре технического оператора РСА:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.numRegistry || ""}
            required={true}
            id={"numRegistry"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"ИНН:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.inn || ""}
            required={true}
            id={"inn"}
            onClickSaveFunc={onClickSave}
        />
        <AdminFormItem
            labelText={"ОГРН:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.ogrn || ""}
            required={true}
            id={"ogrn"}
            onClickSaveFunc={onClickSave}
        />
      </form>
  )
}

export default InformationForm
