import React from "react";
import style from "./NavBar.module.css";

function NavBar() {
  return <div className={style.background}>
    <div className="container">
      <header className={style.navBar}>
        <div className={style.logoWrap}>
          <img className={style.logoImage} src="/images/NavBar/NavBar-logo.svg" alt="Logo"/>
          <span className={style.logoText}>пто</span>
        </div>
        <nav className={style.navigation}>
          <span className={style.navigationLink}>Область аккредитации</span>
          <span className={style.navigationLink}>Документы</span>
          <span className={style.navigationLink}>Запись на ТО</span>
          <span className={style.navigationLink}>Контакты</span>
        </nav>
      </header>
    </div>
  </div>;
}

export default NavBar;
