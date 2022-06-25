import React from 'react';
import style from "./InfromationForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {AboutDataAdmin} from "../../../../../types/about";
import {useInformationForm} from '../../../../../hooks/useInformationForm';

type Props = {
  data: AboutDataAdmin
}

const InformationForm: React.FC<Props> = ({data}) => {

  const informationForm = useInformationForm()

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
            onClickSaveFunc={informationForm.onClickSave}
        />
        <AdminFormItem
            labelText={"Номер в реестре технического оператора РСА:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.numRegistry || ""}
            required={true}
            id={"numRegistry"}
            onClickSaveFunc={informationForm.onClickSave}
        />
        <AdminFormItem
            labelText={"ИНН:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.inn || ""}
            required={true}
            id={"inn"}
            onClickSaveFunc={informationForm.onClickSave}
        />
        <AdminFormItem
            labelText={"ОГРН:"}
            mainStyle={"formItem"}
            inputStyle={style.inputInfo}
            inputType={"number"}
            value={data.requisites.ogrn || ""}
            required={true}
            id={"ogrn"}
            onClickSaveFunc={informationForm.onClickSave}
        />
      </form>
  )
}

export default InformationForm
