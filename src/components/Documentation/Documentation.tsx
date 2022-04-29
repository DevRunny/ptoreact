import React from 'react';
import style from "./Documentation.module.css"
import classNames from "classnames";
import Document from "./Document/Document";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type Props = {
  documentationRef: React.RefObject<HTMLInputElement> | null
}

const Documentation: React.FC<Props> = ({documentationRef}) => {
    const {documents, error, loading} = useTypedSelector(state => state.documents)
  return (
      <div ref={documentationRef} className={classNames(style.background, "rootBackground")}>
        <div className={style.documentationTitleWrap}>
          <h2 className={style.mainTitle}>Документация</h2>
          <h3 className={style.subTitle}>Перечень документов для ознакомления</h3>
        </div>
        <div className="container">
          <div className={style.documentsWrap}>
              {documents.map(document => <Document key={document.id} documentText={document.documentDescription}/>)}
          </div>
        </div>
      </div>
  );
}

export default Documentation;