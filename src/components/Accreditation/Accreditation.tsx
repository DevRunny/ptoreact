import React from 'react';
import style from "./Accreditation.module.css"
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import classNames from "classnames";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAccreditationRef} from "../../hooks/sectionsRefs/useAccreditationRef"
import {Category} from "../../types/accreditation";


const Accreditation = () => {

  const {categories, error, loading} = useTypedSelector(state => state.accreditation)
  const accreditation = useAccreditationRef()

  return (
      <div ref={accreditation.accreditationRef} className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.accreditation}>
            <div className={style.accreditationTitleWrap}>
              <h2 className={style.mainTitle}>Область аккредитации</h2>
              <h3 className={style.subTitle}>Категории транспортных средств</h3>
            </div>
            <div className={style.categories}>
              {categories.filter((category: Category) => category.selected).map((cat) => <CategoryComponent
                  key={cat.id}
                  urlImage={cat.urlImage}
                  nameCategory={cat.categoryName}
                  categoryDescription={cat.categoryDescription}
              />)}
            </div>
          </div>
        </div>
      </div>
  );
}
export default Accreditation
