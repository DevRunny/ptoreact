import LinkComponent from "./LinkComponents";
import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type Props = {
  mainClass: string
  mainClassLink: string
}

const Navigation: React.FC<Props> = ({mainClass, mainClassLink}) => {
    const {contacts, documentation, accreditation, request} = useTypedSelector(state => state.sectionRefs)
  return (
      <ul className={mainClass}>
        <LinkComponent mainClass={mainClassLink} currentRef={accreditation} nameLink={"Область аккредитации"} />
        <LinkComponent mainClass={mainClassLink} currentRef={documentation} nameLink={"Документы"} />
        <LinkComponent mainClass={mainClassLink} currentRef={request} nameLink={"Запись на то"} />
        <LinkComponent mainClass={mainClassLink} currentRef={contacts} nameLink={"Контакты"} />
      </ul>
  )
}

export default Navigation