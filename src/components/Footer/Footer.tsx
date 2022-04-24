import React from 'react';
import style from "./Footer.module.css"

function Footer() {
  return (
      <footer className={style.background}>
        <div className="container">
          <div className={style.footer}>
            <div className={style.messengerLinks}>
              <a href="#"><img src="/images/Footer/telegramIcon.svg" alt="telegram" /></a>
              <a href="#"><img src="/images/Footer/vkIcon.svg" alt="vk" /></a>
              <a href="#"><img src="/images/Footer/whatsappIcon.svg" alt="whatsapp" /></a>
              <a href="#"><img src="/images/Footer/viberIcon.svg" alt="viber" /></a>
            </div>
            <ul className={style.footerLinks}>
              <li className={style.footerLink}><a href="#">Область аккредитации</a></li>
              <li className={style.footerLink}><a href="#">Документы</a></li>
              <li className={style.footerLink}><a href="#">Запись на ТО</a></li>
              <li className={style.footerLink}><a href="#">Контакты</a></li>
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