import LinkComponent from "./LinkComponents";
import React from "react";

type Props = {
  mainClass: string
  mainClassLink: string
}

const Navigation: React.FC<Props> = ({mainClass, mainClassLink}) => {
  return (
      <ul className={mainClass}>
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Область аккредитации"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Документы"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Запись на то"} />
        <LinkComponent mainClass={mainClassLink} href={"#"} nameLink={"Контакты"} />
      </ul>
  )
}

export default Navigation