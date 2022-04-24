import React from 'react';
import style from "./About.module.css"

function About() {
    return (
        <div className="container">
            <div className={style.background}>
                <div className={style.about}>
                    <h1 className={style.title}>
                        <p>Пункт технического осмотра автотранспортных средств</p>
                        <p>ООО «Делюкс-ПТО»</p>
                    </h1>
                    <div className={style.companyInfo}>
                        <p>
                            Номер в реестре технического оператора РСА:
                            <span className={style.companyInfoBold}> 12345</span>
                        </p>
                        <p>
                            ИНН:
                            <span className={style.companyInfoBold}> 123456854321</span>
                        </p>
                        <p>
                            ОГРН:
                            <span className={style.companyInfoBold}> 123454351468438</span>
                        </p>
                    </div>
                    <div className={style.companyContacts}>
                        <p className={style.contact}>
                            <img src="/images/About/email.png" alt="mail"/>
                            <span>pto-station@mail.ru</span>
                        </p>
                        <p className={style.contact}>
                            <img src="/images/About/phone.png" alt="phone"/>
                            <span>+7 (999) 999-99-99</span>
                        </p>
                    </div>
                    <div className={style.buttonsWrap}>
                        <button className={style.aboutButton}>Записаться на ТО</button>
                        <button className={style.aboutButton}>Как нас найти</button>
                    </div>
                    <img className={style.carImage} src="/images/About/About-car-image.svg" alt="car"/>
                </div>
            </div>
        </div>
    );
}

export default About;