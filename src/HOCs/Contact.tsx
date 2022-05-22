import React from "react";
import ContactComponent, {ContactComponentProps} from "../components/Contacts/ContactsComponents/ContactComponent";
import {Point} from "../types/points";
import {Email, Phone} from "../types/contacts";

interface PointsContacts {
  points: Point[]
}

interface EmailContactProps {
  emails: Email[]
}

interface PhoneContactProps {
  phones: Phone[]
}

const addressContact = (Component: React.ComponentType<ContactComponentProps>) => {
  return (props: PointsContacts) => {
    const getText = () => {
      return props.points.map(point => point.address)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/addressIcon.svg"}
                   alt={"address"}
                   titleCard={"Адрес:"}
                   isPoint={props.points.length > 1}
        />
    )
  }
}

const emailContact = (Component: React.ComponentType<ContactComponentProps>) => {
  return (props: EmailContactProps) => {
    const getText = () => {
      return props.emails.map(emailItem => emailItem.email)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/emailIcon.svg"}
                   alt={"email"}
                   titleCard={"Электронная почта:"}
                   isPoint={false}
        />
    )
  }
}

const workingModeContact = (Component: React.ComponentType<ContactComponentProps>) => {
  return (props: PointsContacts) => {
    const getText = () => {
      return props.points.map(point => point.workingMode)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/modeIcon.svg"}
                   alt={"mode"}
                   titleCard={"Режим работы:"}
                   isPoint={props.points.length > 1}
        />
    )
  }
}

const phoneContact = (Component: React.ComponentType<ContactComponentProps>) => {
  return (props: PhoneContactProps) => {
    const getText = () => {
      return props.phones.map(phoneItem => phoneItem.phoneNumber)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/phoneIcon.svg"}
                   alt={"phone"}
                   titleCard={"Телефон:"}
                   isPoint={false}
        />
    )
  }
}

export const ContactWithAddress = addressContact(ContactComponent)
export const ContactWithEmail = emailContact(ContactComponent)
export const ContactWithWorkingMode = workingModeContact(ContactComponent)
export const ContactWithPhone = phoneContact(ContactComponent)