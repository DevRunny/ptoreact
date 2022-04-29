import React from 'react';
import style from "./Documentation.module.css"
import classNames from "classnames";
import Document from "./Document/Document";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDocumentationRef} from "../../hooks/sectionsRefs/useDocumentationRef";

const Documentation = () => {

  const {documents, error, loading} = useTypedSelector(state => state.documents)
  const documentation = useDocumentationRef()

  return (
      <div ref={documentation.documentationRef} className={classNames(style.background, "rootBackground")}>
        <div className={style.documentationTitleWrap}>
          <h2 className={style.mainTitle}>Документация</h2>
          <h3 className={style.subTitle}>Перечень документов для ознакомления</h3>
        </div>
        <div className="container">
          <div className={style.documentsWrap}>
            {documents.map(document => <Document key={document.id} documentText={document.documentDescription} />)}
          </div>
        </div>
      </div>
  );
}

export default Documentation;