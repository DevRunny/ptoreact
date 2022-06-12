import React from 'react';
import style from "./Footer.module.css"
import MessengerComponent from "./FooterComponent/MessengerComponent";
import CompanyInfoRequisite from "../CompanyInfoRequisite/CompanyInfoRequisite";
import Navigation from "../Navigation/Navigation";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Footer() {
  const stateInfo = useTypedSelector(state => state.about)
  const {messengers} = useTypedSelector(state => state.messengers)


  const renderMessenger = (messengerName: string) => {
    switch (messengerName) {
      case "Telegram":
        return {href: "https://telegram.im/", urlImage: "/images/Footer/telegramIcon.svg", alt: "telegram"}
      case "VK (Вконтакте)":
        return {href: "https://vk.com/", urlImage: "/images/Footer/vkIcon.svg", alt: "vk"}
      case "WhatsApp":
        return {href: "https://wa.me/", urlImage: "/images/Footer/whatsappIcon.svg", alt: "whatsapp"}
      case "Viber":
        return {href: "viber://chat?number=", urlImage: "/images/Footer/viberIcon.svg", alt: "viber"}
      default:
        return {href: "", urlImage: "", alt: ""}
    }
  }

  return (
      <footer className={style.background}>
        <div className="container">
          <div className={style.footer}>
            <div className={style.messengerLinks}>
              {messengers.map(messenger => {
                if (messenger.value) {
                  return <MessengerComponent
                      key={messenger.id}
                      href={`${renderMessenger(messenger.messengerName).href}${messenger.value}`}
                      urlImage={renderMessenger(messenger.messengerName).urlImage}
                      alt={renderMessenger(messenger.messengerName).alt} />
                }
              })}
            </div>
            <Navigation mainClass={style.footerLinks} mainClassLink={style.footerLink} />
            <div className={style.footerAbout}>
              <p>Пункт технического осмотра {stateInfo.nameCompany}</p>
              <CompanyInfoRequisite isBold={false} nameRequisite={"ИНН"} requisite={stateInfo.requisites.inn} />
              <CompanyInfoRequisite isBold={false} nameRequisite={"ОГРН"} requisite={stateInfo.requisites.ogrn} />
            </div>
            <div className={style.privacyPolicy}><a href="/">Политика конфиденциальности</a></div>
            <div className={style.copyright}>
              <span>© CMS ENDEL</span>
              <span>2022</span>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;