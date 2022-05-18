import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import style from "./Link.module.css"
import classNames from "classnames";

type Props = {
  image: string
  activeImage: string
  alt: string
  linkText: string
  url: string
}

const Link: React.FC<Props> = ({image, activeImage, alt, linkText, url}) => {
  const [active, setActive] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === url) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [location.pathname])

  return (
      <>
        <span className={active ? classNames(style.wrap, style.activeLink) : style.wrap} onClick={() => {
          navigate(url)
        }}>
          <span className={active ? style.activePage : style.noneActivePage} />
          <img src={active ? activeImage : image} alt={alt} />{linkText}
        </span>
      </>
  );
};

export default Link;
