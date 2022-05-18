import React from 'react';
import style from "./SectionTitle.module.css"

type Props = {
  titleText: string
}

const SectionTitle: React.FC<Props> = ({titleText}) => {
  return (
      <div className={style.sectionTitle}>
        <span />
        <h2>{titleText}</h2>
        <hr />
      </div>
  );
}

export default SectionTitle;