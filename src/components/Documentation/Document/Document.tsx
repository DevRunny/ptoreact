import style from "../Documentation.module.css";
import React from "react";

type Props = {
    documentText: string
}

const Document:React.FC<Props> = ({documentText}) => {
    return (
        <div className={style.document}>
            <img className={style.image} src="/images/Documentation/documentImage.svg" alt="document" />
            <p className={style.documentText}>{documentText}</p>
            <button className={style.documentationButton}>Посмотреть</button>
        </div>
    )
}

export default Document