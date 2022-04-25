import React from 'react';
import style from "../RequestSection.module.css";

type Props = {
  urlImage: string
  alt: string
  descriptionDocument: string
}

const RequestComponent: React.FC<Props> = ({urlImage, alt, descriptionDocument}) => {
  return (
      <div className={style.document}>
        <img className={style.documentPic} src={urlImage} alt={alt} />
        <div className={style.textDocument}>
          <p className={style.descriptionDocument}>{descriptionDocument}</p>
        </div>
      </div>
  );
}

export default RequestComponent;