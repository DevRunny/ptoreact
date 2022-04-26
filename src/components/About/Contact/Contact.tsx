import style from "../About.module.css";
import React from "react";

type Props = {
    urlImage: string
    contactDetails: string
}

const Contact: React.FC<Props> = ({urlImage, contactDetails}) => {
    return (
        <p className={style.contact}>
            <img src={urlImage} alt="contactImage" />
            <span>{contactDetails}</span>
        </p>
    )
}

export default Contact