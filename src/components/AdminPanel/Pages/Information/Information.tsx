import React, {useEffect, useState} from 'react';
import styleTitle from "./../../AdminPanel.module.css"
import style from "./Information.module.css"
import classNames from "classnames";
import AdminMainTitle from "../AdminMainTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import InformationForm from "./InformationForm/InformationForm";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {getAbout} from "../../../../API/about";
import {useActions} from "../../../../hooks/useActions";
import ContactForm from "./ContactForm/ContactForm";

function Information() {
  const [loading, setLoading] = useState<boolean>(false)
  const {nameCompany, requisites} = useTypedSelector(state => state.about)
  const {phones, emails} = useTypedSelector(state => state.contacts)
  const {fetchAboutAC, fetchContactsAC} = useActions()
  const aboutData = [nameCompany, requisites.inn, requisites.ogrn, requisites.numRegistry]

  const fetch = async () => {
    setLoading(true)
    await fetchAboutAC()
    await fetchContactsAC()
    setLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  if (loading) return <div>Загрузка...</div>

  return (
      <>
        <div className={style.background}>
          <AdminMainTitle titleText={"Информация о компании"} mainStyle={styleTitle.mainTitle} />
          <div className={style.contentBlock}>
            <div className={style.contentWrap}>
              <SectionTitle titleText={"Основная информация:"} />
              <InformationForm data={aboutData} />
            </div>
            <div className={style.contentWrap}>
              <SectionTitle titleText={"Контактная информация:"} />
              <div className={style.contacts}>
                <div className={style.phoneForm}>
                  <ContactForm data={phones} labelText={"Телефон:"} inputType={"tel"} />
                </div>
                <div className={style.emailForm}>
                  <ContactForm data={emails} labelText={"Электронная почта:"} inputType={"email"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Information;