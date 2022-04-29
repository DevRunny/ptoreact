import React, {useEffect, useRef} from 'react';
import style from "./Accreditation.module.css"
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import classNames from "classnames";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


const Accreditation = () => {
    const {error, loading, categories} = useTypedSelector(state => state.accreditation)

    const accreditationRef = useRef<HTMLDivElement>(null)
    const {setAccreditationRefAC} = useActions()

    useEffect(() => {
        setAccreditationRefAC(accreditationRef.current)
    }, [accreditationRef.current])

        return (
            <div ref={accreditationRef} className={classNames(style.background, "rootBackground")}>
                <div className="container">
                    <div className={style.accreditation}>
                        <div className={style.accreditationTitleWrap}>
                            <h2 className={style.mainTitle}>Область аккредитации</h2>
                            <h3 className={style.subTitle}>Категории транспортных средств</h3>
                        </div>
                        <div className={style.categories}>
                            {categories.map((cat) => <CategoryComponent
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
