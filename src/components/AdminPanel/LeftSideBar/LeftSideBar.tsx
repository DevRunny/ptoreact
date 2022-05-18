import React from 'react';
import style from "./LeftSideBar.module.css"
import {adminPanelImages} from "../../../utils/adminPanelRoutesImages";
import Link from "./Link/Link";

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
            <Link
                image={adminPanelImages.info.src}
                activeImage={adminPanelImages.infoActive.src}
                alt={adminPanelImages.info.alt}
                linkText={"Информация"}
                url={"/admin"} />
            <Link
                image={adminPanelImages.accredit.src}
                activeImage={adminPanelImages.accreditActive.src}
                alt={adminPanelImages.accredit.alt}
                linkText={"Область аккредитации"}
                url={"/admin/accreditation"} />
            <Link
                image={adminPanelImages.doc.src}
                activeImage={adminPanelImages.docActive.src}
                alt={adminPanelImages.doc.alt}
                linkText={"Документы"}
                url={"/admin/documents"} />
            <Link
                image={adminPanelImages.address.src}
                activeImage={adminPanelImages.addressActive.src}
                alt={adminPanelImages.address.alt}
                linkText={"Адрес"}
                url={"/admin/address"} />
            <Link
                image={adminPanelImages.messengers.src}
                activeImage={adminPanelImages.messengersActive.src}
                alt={adminPanelImages.messengers.alt}
                linkText={"Мессенджеры"}
                url={"/admin/messengers"} />
            <Link
                image={adminPanelImages.settings.src}
                activeImage={adminPanelImages.settingsActive.src}
                alt={adminPanelImages.settings.alt}
                linkText={"Настройки"}
                url={"/admin/settings"} />
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