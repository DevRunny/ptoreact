import React, {useEffect, useRef} from 'react';
import style from "./Contacts.module.css"
import YandexMapComponent from "./ContactsComponents/YandexMapComponent";
import classNames from "classnames";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ContactWithAddress, ContactWithEmail, ContactWithPhone, ContactWithWorkingMode} from "../../HOCs/Contact";
import {useActions} from "../../hooks/useActions";

const Contacts = () => {

    const contactsState = useTypedSelector(state => state.contacts)
    const contactsRef = useRef<HTMLDivElement>(null)
    const {setContactsRefAC} = useActions()

    useEffect(() => {
        setContactsRefAC(contactsRef.current)
    }, [contactsRef.current])

    const checkContactLength = () => {
        return contactsState.workingModes.length > 1 && contactsState.addresses.length > 1
    }

    return (
        <div ref={contactsRef} className={classNames(style.background, "rootBackground")}>
            <div className="container">
                <div className={style.contacts}>
                    <h2 className={style.mainTitle}>Контактная информация</h2>
                    <div className={checkContactLength() ? classNames(style.cardsContacts, style.cardContactsLarge) : style.cardsContacts}>
                        <ContactWithAddress addresses={contactsState.addresses} />
                        <ContactWithEmail emails={contactsState.emails} />
                        <ContactWithWorkingMode workingModes={contactsState.workingModes} />
                        <ContactWithPhone phones={contactsState.phones} />
                    </div>
                </div>
            </div>
            <YandexMapComponent mapState={contactsState.mapState}
                                coordinates={contactsState.coordinates}
                                addresses={contactsState.addresses}
                                workingModes={contactsState.workingModes} />
        </div>
    );
}

export default Contacts;