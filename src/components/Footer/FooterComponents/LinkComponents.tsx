import React from 'react';
import style from "../Footer.module.css";

type Props = {
  href: string
  nameLink: string
}

const LinkComponent: React.FC<Props> = ({href, nameLink}) => {
  return (
      <li className={style.footerLink}><a href={href}>{nameLink}</a></li>
  );
}

export default LinkComponent;