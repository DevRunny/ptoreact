import React from 'react';
import style from "./Footer.module.css"
import MessengerComponent from "./FooterComponents/MessengerComponent";
import LinkComponent from "./FooterComponents/LinkComponents";

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
            <ul className={style.footerLinks}>
              <LinkComponent href={"#"} nameLink={"Область аккредитации"} />
              <LinkComponent href={"#"} nameLink={"Документы"} />
              <LinkComponent href={"#"} nameLink={"Запись на ТО"} />
              <LinkComponent href={"#"} nameLink={"Контакты"} />
            </ul>
            <div className={style.footerAbout}>
              <p>Пункт технического осмотра ООО «Делюкс-ПТО»</p>
              <p>ИНН: 123456854321</p>
              <p>ОГРН: 123454351468438</p>
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