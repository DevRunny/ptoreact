import React from 'react';
import style from "./Accreditation.module.css"
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import classNames from "classnames";

function Accreditation() {
  return (
      <div className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.accreditation}>
            <div className={style.accreditationTitleWrap}>
              <h2 className={style.mainTitle}>Область аккредитации</h2>
              <h3 className={style.subTitle}>Категории транспортных средств</h3>
            </div>
            <div className={style.categories}>
              <CategoryComponent
                  urlImage={"/images/Accreditation/accreditation-L-icon.svg"}
                  nameCategory={"L"}
                  categoryDescription={"Мопеды, мотовелосипеды, мокики, мотоциклы, мотороллеры, трициклы, квадрициклы."}
              />
              <CategoryComponent
                  urlImage={"/images/Accreditation/accreditation-M1-icon.svg"}
                  nameCategory={"M1"}
                  categoryDescription={"Транспортные средства, используемые для перевозки пассажиров\n" +
                      "                    и имеющие,помимо места водителя, не\n" +
                      "                    более восьми мест для сидения."}
              />
              <CategoryComponent
                  urlImage={"/images/Accreditation/accreditation-N1-icon.svg"}
                  nameCategory={"N1"}
                  categoryDescription={"Транспортные средства, предназначенные для перевозки грузов,\n" +
                      "                    имеющие технически допустимую\n" +
                      "                    максимальную массу не более 3,5 тонн."}
              />
              <CategoryComponent
                  urlImage={"/images/Accreditation/accreditation-O2-icon.svg"}
                  nameCategory={"O2"}
                  categoryDescription={"Прицепы, технически допустимая максимальная масса которых\n" +
                      "                    свыше 0,75 т, но\n" +
                      "                    не более 3,5 тонн."}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Accreditation;
