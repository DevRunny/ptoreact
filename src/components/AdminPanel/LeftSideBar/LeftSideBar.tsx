import React from 'react';
import style from "./LeftSideBar.module.css"
import {adminPanelImages} from "../../../utils/adminPanelRoutesImages";

function LeftSideBar() {
  return (
      <div className={style.leftSideBar}>
        <div className={style.menu}>
          <div className={style.logoAdmin}>
            <img src={adminPanelImages.logo.src} alt={adminPanelImages.logo.alt} />
            <h2 className={style.title}>Admin Panel</h2>
          </div>
          <hr />
          <nav className={style.navBar}>
            <span><img src={adminPanelImages.info.src} alt={adminPanelImages.info.alt} />Информация</span>
            <span><img src={adminPanelImages.accredit.src} alt={adminPanelImages.accredit.alt} />Область аккредитации</span>
            <span><img src={adminPanelImages.doc.src} alt={adminPanelImages.doc.alt} />Документы</span>
            <span><img src={adminPanelImages.address.src} alt={adminPanelImages.address.alt} />Адрес</span>
            <span><img src={adminPanelImages.messengers.src} alt={adminPanelImages.messengers.alt} />Мессенджеры</span>
            <span><img src={adminPanelImages.settings.src} alt={adminPanelImages.settings.alt} />Настройки</span>
          </nav>
          <hr />
        </div>
        <div className={style.logOut}>
          <img src={adminPanelImages.decor.src} alt={adminPanelImages.decor.alt} />
          <span className={style.logOutButton}><img src={adminPanelImages.logout.src} alt={adminPanelImages.logout.alt} />Выйти</span>
        </div>
      </div>
  );
}

export default LeftSideBar;