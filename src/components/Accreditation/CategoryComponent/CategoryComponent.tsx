import React from 'react';
import style from "../Accreditation.module.css";

type Props = {
  urlImage: string
  nameCategory: string
  categoryDescription: string
}

const CategoryComponent: React.FC<Props> = ({urlImage, nameCategory, categoryDescription}) => {
  return (
      <div className={style.category}>
        <div className={style.categoryIcon}>
          <img className={style.icon} src={urlImage} alt={nameCategory} />
        </div>
        <div className={style.categoryContent}>
          <span className={style.categoryName}>{nameCategory}</span>
          <p className={style.descriptionCategory}>{categoryDescription}</p>
        </div>
      </div>
  );
}

export default CategoryComponent;