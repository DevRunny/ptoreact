import React, {useEffect, useState} from 'react';
import style from "./Information.module.css"
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import InformationForm from "./InformationForm/InformationForm";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import ContactForm from "./ContactForm/ContactForm";
import {AboutDataAdmin} from "../../../../types/about";
import Preloader from "../../../Preloader/Preloader";
import {useAuth} from "../../../../hooks/useAuth";

function Information() {
  const [loading, setLoading] = useState<boolean>(false)
  const {redirect} = useAuth()
  const {nameCompany, requisites} = useTypedSelector(state => state.about)
  const {phones, emails} = useTypedSelector(state => state.contacts)
  const {fetchAboutAC, fetchContactsAC} = useActions()
  const aboutData: AboutDataAdmin = {
    nameCompany, requisites
  }

  const fetch = async () => {
    setLoading(true)
    await fetchAboutAC()
    await fetchContactsAC()
    setLoading(false)
  }

  useEffect(() => {
    redirect()
    fetch()
  }, [])

  if (loading) return <Preloader size={"big"} styleLoader={"adminLoader"} />

  return (
      <>
        <div className={"adminContentBackground"}>
          <AdminMainTitle titleText={"Информация о компании"} />
          <div className={style.contentBlock}>
            <div className={style.contentWrap}>
              <SectionTitle titleText={"Основная информация:"} />
              <InformationForm data={aboutData} />
            </div>
            <div className={style.contentWrap}>
              <SectionTitle titleText={"Контактная информация:"} />
              <div className={style.contacts}>
                <div className={style.phoneForm}>
                  <ContactForm data={phones.map(phone => ({
                    id: phone.id,
                    value: phone.phoneNumber
                  }))} labelText={"Телефон:"} inputType={"tel"} />
                </div>
                <div className={style.emailForm}>
                  <ContactForm data={emails.map(email => ({
                    id: email.id,
                    value: email.email
                  }))} labelText={"Электронная почта:"} inputType={"email"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Information;