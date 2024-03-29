import React from 'react';
import style from "./Contacts.module.css"
import YandexMapComponent from "./ContactsComponents/YandexMapComponent";
import classNames from "classnames";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ContactWithAddress, ContactWithEmail, ContactWithPhone, ContactWithWorkingMode} from "../../HOCs/Contact";
import {useContactsRef} from "../../hooks/sectionsRefs/useContactsRef";
import {useFetchData} from "../../hooks/useFetchData";
import Preloader from "../Preloader/Preloader";

const Contacts = () => {

  const fetching = useFetchData()
  const contactsState = useTypedSelector(state => state.contacts)
  const mapState = useTypedSelector(state => state.mapState)
  const {points} = useTypedSelector(state => state.points)
  const contacts = useContactsRef()

  return (
      <div ref={contacts.contactsRef} className={classNames(style.background, "rootBackground")}>
        <div className="container">
          <div className={style.contacts}>
            <h2 className={style.mainTitle}>Контактная информация</h2>
            <div className={style.cardsContacts}>
              <ContactWithAddress points={points} />
              <ContactWithEmail emails={contactsState.emails} />
              <ContactWithWorkingMode points={points} />
              <ContactWithPhone phones={contactsState.phones} />
            </div>
          </div>
        </div>
        {fetching.isFetch ?
            <YandexMapComponent mapState={mapState} points={points} />
            :
            <Preloader size={"medium"} styleLoader={"clientLoader"} />
        }

      </div>
  );
}

export default Contacts;