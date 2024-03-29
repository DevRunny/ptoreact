import style from "../About.module.css";
import React from "react";
import Contact from "../Contact/Contact";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CompanyContacts = () => {
  const {phones, emails} = useTypedSelector(state => state.contacts)
  return (
      <div className={style.companyContacts}>
        {emails.map(email =>
            <Contact key={email.id} urlImage="/images/About/email.svg" contactDetails={email.email} />)}
        {phones.map(phone =>
            <Contact key={phone.id} urlImage="/images/About/phone.svg" contactDetails={phone.phoneNumber} />)}
      </div>
  )
}

export default CompanyContacts