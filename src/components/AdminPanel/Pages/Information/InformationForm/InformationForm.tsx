import React from 'react';
import style from "./InfromationForm.module.css"
import AdminFormItem from "../../AdminFormItem/AdminFormItem";

type Props = {
  data: Array<string | number | null>
}

const InformationForm: React.FC<Props> = ({data}) => {
  return (
      <form className={style.form}>
        <AdminFormItem
            labelText={"Название компании или ИП:"}
            mainStyle={style.formItem}
            disabled={false}
            inputType={"text"}
        />
        <AdminFormItem
            labelText={"Номер в реестре технического оператора РСА:"}
            mainStyle={style.formItem}
            disabled={false}
            inputType={"number"}
        />
        <AdminFormItem
            labelText={"ИНН:"}
            mainStyle={style.formItem}
            disabled={false}
            inputType={"number"}
        />
        <AdminFormItem
            labelText={"ОГРН:"}
            mainStyle={style.formItem}
            disabled={false}
            inputType={"number"}
        />
      </form>
  )
}

export default InformationForm
