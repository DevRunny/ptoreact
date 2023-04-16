import React from 'react';
import style from "./InfromationForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import {AboutDataAdmin} from "../../../../../types/about";
import {useInformationForm} from '../../../../../hooks/useInformationForm';
import {CheckboxToggle} from "react-rainbow-components";

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
        <div className={style.checkbox}>
          <label htmlFor={"ogrnip-checkbox"}>
            ОГРНИП
          </label>
          <CheckboxToggle // TODO: Lebedev M. Прикрутить спиннер на время отправления и получения запроса
              id={"ogrnip-checkbox"}
              onChange={informationForm.toggleCheckbox}
              value={informationForm.isActiveCheckbox}
          />
        </div>
      </form>
  )
}

export default InformationForm
