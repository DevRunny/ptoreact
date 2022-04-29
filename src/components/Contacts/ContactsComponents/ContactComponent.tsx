import React from 'react';
import style from "../Contacts.module.css";

export type ContactComponentProps = {
  urlImage: string
  alt: string
  titleCard: string
  textCard: string[]
  isPoint: boolean
}

const ContactComponent: React.FC<ContactComponentProps> = ({
                                                             urlImage,
                                                             alt,
                                                             titleCard,
                                                             textCard,
                                                             isPoint
                                                           }) => {
  return (
      <div className={style.cardContacts}>
        <img className={style.cardIcon} src={urlImage} alt={alt} />
        <div className={style.cardContent}>
          <span className={style.titleCard}>{titleCard}</span>
          {textCard.map((item, index) => {
            return <>
              <span className={style.titlePoint}><b>{isPoint ? `ПТО ${index + 1}: ` : ""}</b></span>
              <p className={style.textCard}>{item}</p>
            </>
          })}
        </div>
      </div>
  );
}

export default ContactComponent;