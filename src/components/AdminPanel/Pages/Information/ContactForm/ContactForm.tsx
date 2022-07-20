import React from 'react';
import AdminFormItem, {InputType} from "../../AdminFormItem/AdminFormItem";
import style from "./ContactForm.module.css"
import ServiceFieldButton from "../../ServiceFieldButton/ServiceFieldButton";
import {adminPanelImages} from "../../../../../utils/adminPanelRoutesImages";
import {useContactForm} from '../../../../../hooks/useContactForm';

type Props = {
  data: any[]
  labelText: LabelTextContactForm
  inputType: InputType
}

export type LabelTextContactForm = "Телефон:" | "Электронная почта:"

const ContactForm: React.FC<Props> = ({data, labelText, inputType}) => {

  const contactForm = useContactForm(data, labelText)

  return (
      <form className={style.form}>
        {data && data.map((item, index) => {
          if (index === 0) {
            return <AdminFormItem key={item.id}
                                  mainStyle={"formItem"}
                                  inputStyle={style.contact}
                                  inputType={inputType}
                                  labelText={labelText}
                                  required={true}
                                  value={item.value}
                                  id={item.id}
                                  onClickSaveFunc={contactForm.onClickSave}
            />
          } else {
            return <AdminFormItem key={item.id}
                                  mainStyle={"formItem"}
                                  inputStyle={style.contact}
                                  inputType={inputType}
                                  value={item.value}
                                  id={item.id}
                                  onClickSaveFunc={contactForm.onClickSave}
                                  onClickDeleteFunc={contactForm.deleteField}
            />
          }
        })}
        <ServiceFieldButton
            icon={adminPanelImages.plusButton.blue.src}
            textButton={"Добавить поле"}
            onClickFunc={contactForm.addField}
            buttonStyle={style.addBottomButton}
        />
      </form>
  );
};

export default ContactForm;
