import React from 'react';
import style from "./Documentation.module.css"
import classNames from "classnames";
import Document from "./Document/Document";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type Props = {}

const Documentation: React.FC<Props> = () => {
    const {documents, error, loading} = useTypedSelector(state => state.documents)
  return (
      <div className={classNames(style.background, "rootBackground")}>
        <div className={style.documentationTitleWrap}>
          <h2 className={style.mainTitle}>Документация</h2>
          <h3 className={style.subTitle}>Перечень документов для ознакомления</h3>
        </div>
        <div className="container">
          <div className={style.documentsWrap}>
              {documents.map(document => <Document documentText={document.documentDescription}/>)}
            {/*<Document documentText="Федеральный закон о техническом осмотре транспортных средств " />*/}
            {/*<Document documentText="Правила проведения технического осмотра транспортных средств " />*/}
            {/*<Document documentText="Типовая форма договора о проведении технического осмотра " />*/}
            {/*<Document documentText="Стоимость предельного размера платы за проведение технического осмотра " />*/}
            {/*<Document documentText="Аттестат аккредитации оператора технического осмотра транспортных средств " />*/}
          </div>
        </div>
      </div>
  );
}

export default Documentation;