import React from 'react';
import style from "../Contacts.module.css";

type Props = {
  urlImage: string
  alt: string
  titleCard: string
  textCard: string
}

const ContactComponent: React.FC<Props> = ({urlImage, alt, titleCard, textCard}) => {
  return (
      <div className={style.cardContacts}>
        <img className={style.cardIcon} src={urlImage} alt={alt} />
        <div className={style.cardContent}>
          <span className={style.titleCard}>{titleCard}</span>
          <p className={style.textCard}>{textCard}</p>
        </div>
      </div>
  );
}

export default ContactComponent;