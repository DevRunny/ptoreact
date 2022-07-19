import style from "../Documentation.module.css";
import React from "react";
import {ButtonWithDocument} from "../../../HOCs/Button";

type Props = {
  documentText: string
}

const Document: React.FC<Props> = ({documentText}) => {
  return (
      <div className={style.document}>
        <img className={style.documentImage} src="/images/Documentation/documentImage.svg" alt="document" />
        <p className={style.documentText}>{documentText}</p>
        <ButtonWithDocument text={"Посмотреть"} mainStyle={style.documentationButton} />
      </div>
  )
}

export default Document