import React from "react";
import style from "./NavBar.module.css";
import Navigation from "../Navigation/Navigation";

function NavBar() {
  return (
      <div className={style.background}>
        <div className="container">
          <div className={style.wrap}>
            <header className={style.navBar}>
              <a className={style.linkLogo} href="/" rel="noreferrer">
                <img className={style.logoImage} src="/images/NavBar/NavBar-logo.svg" alt="Logo" />
              </a>
              <nav>
                <Navigation mainClass={style.navigation} mainClassLink={style.navigationLink} />
              </nav>
            </header>
          </div>
        </div>
      </div>
  )
}

export default NavBar;
