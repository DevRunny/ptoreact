import React from 'react';
import classNames from "classnames";
import AdminFormItem from "../../AdminFormItem/AdminFormItem";
import style from "./ContactForm.module.css"

type Props = {
  data: any[]
  labelText: string
  inputType: InputType
}

type InputType = "tel" | "email"

const ContactForm: React.FC<Props> = ({data, labelText, inputType}) => {
  return (
      <form className={style.form}>
        {data && data.map((item, index) => {
          if (index === 0) {
            return <AdminFormItem
                mainStyle={style.formItem}
                inputStyle={classNames(style.input, style.contact)}
                inputType={inputType}
                labelText={labelText}
            />
          } else {
            return <AdminFormItem
                mainStyle={style.formItem}
                inputStyle={classNames(style.input, style.contact)}
                inputType={inputType}
            />
          }
        })}
        <div className={style.addFieldFormItem}>
          <img src={"./images/AdminPanel/plusButtonBlue.svg"} alt={"+"} />Добавить поле
        </div>
      </form>
  );
};

export default ContactForm;
