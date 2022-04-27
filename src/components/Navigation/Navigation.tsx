import LinkComponent from "./LinkComponents";
import React from "react";

type Props = {
  mainClass: string
  mainClassLink: string
}

const Navigation: React.FC<Props> = ({mainClass, mainClassLink}) => {
  return (
      <ul className={mainClass}>
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Аккредитация"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Документы"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Записаться"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Контакты"} />
      </ul>
  )
}

export default Navigation