import React from 'react';
import style from "./Footer.module.css"
import MessengerComponent from "./FooterComponent/MessengerComponent";
import CompanyInfoRequisite from "../CompanyInfoRequisite/CompanyInfoRequisite";
import Navigation from "../Navigation/Navigation";

function Footer() {
  return (
      <footer className={style.background}>
        <div className="container">
          <div className={style.footer}>
            <div className={style.messengerLinks}>
              <MessengerComponent href={"#"} urlImage={"/images/Footer/telegramIcon.svg"} alt={"telegram"} />
              <MessengerComponent href={"#"} urlImage={"/images/Footer/vkIcon.svg"} alt={"vk"} />
              <MessengerComponent href={"#"} urlImage={"/images/Footer/whatsappIcon.svg"} alt={"whatsapp"} />
              <MessengerComponent href={"#"} urlImage={"/images/Footer/viberIcon.svg"} alt={"viber"} />
            </div>
            <Navigation mainClass={style.footerLinks} mainClassLink={style.footerLink} />
            <div className={style.footerAbout}>
              <p>Пункт технического осмотра ООО «Делюкс-ПТО»</p>
              <CompanyInfoRequisite isBold={false} nameRequisite={"ИНН"} requisite={123456854321} />
              <CompanyInfoRequisite isBold={false} nameRequisite={"ОГРН"} requisite={123454351468438} />
            </div>
            <div className={style.privacyPolicy}><a href="#">Политика конфиденциальности</a></div>
            <div className={style.copyright}>
              <span>© CMS E&L</span>
              <span>2022</span>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;