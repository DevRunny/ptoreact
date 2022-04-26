import style from "../About.module.css";
import React from "react";
import Contact from "../Contact/Contact";

type Props = {

}

const CompanyContacts: React.FC<Props> = ({}) => {
    return (
        <div className={style.companyContacts}>
            <Contact urlImage="/images/About/email.png" contactDetails="pto-station@mail.ru"/>
            <Contact urlImage="/images/About/phone.png" contactDetails="+7 (999) 999-99-99"/>
        </div>
    )
}

export default CompanyContacts