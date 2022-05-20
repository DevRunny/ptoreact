import React from 'react';
import style from "./LeftSideBar.module.css"
import {adminPanelImages} from "../../../utils/adminPanelRoutesImages";
import Link from "./Link/Link";
import {useActions} from "../../../hooks/useActions";
import {useNavigate} from "react-router-dom";

function LeftSideBar() {
  const {logout} = useActions()
  const navigate = useNavigate()

  const onClickExitUser = () => {
    logout()
    navigate("/login")
  }
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
                alt={adminPanelImages.info.alt}
                linkText={"Информация"}
                url={"/admin"} />
            <Link
                image={adminPanelImages.accredit.src}
                alt={adminPanelImages.accredit.alt}
                linkText={"Область аккредитации"}
                url={"/admin/accreditation"} />
            <Link
                image={adminPanelImages.doc.src}
                alt={adminPanelImages.doc.alt}
                linkText={"Документы"}
                url={"/admin/documents"} />
            <Link
                image={adminPanelImages.address.src}
                alt={adminPanelImages.address.alt}
                linkText={"Адрес"}
                url={"/admin/address"} />
            <Link
                image={adminPanelImages.messengers.src}
                alt={adminPanelImages.messengers.alt}
                linkText={"Мессенджеры"}
                url={"/admin/messengers"} />
            <Link
                image={adminPanelImages.settings.src}
                alt={adminPanelImages.settings.alt}
                linkText={"Настройки"}
                url={"/admin/settings"} />
          </nav>
          <hr />
        </div>
        <div className={style.logOut}>
          <img src={adminPanelImages.decor.src} alt={adminPanelImages.decor.alt} />
          <span className={style.logOutButton} onClick={onClickExitUser}><img src={adminPanelImages.logout.src} alt={adminPanelImages.logout.alt} />Выйти</span>
        </div>
      </div>
  );
}

export default LeftSideBar;