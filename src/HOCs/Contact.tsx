import {Address, Email, Phone, WorkingMode} from "../types/contacts";
import React from "react";
import ContactComponent, {ContactComponentProps} from "../components/Contacts/ContactsComponents/ContactComponent";

interface AddressContactProps {
  addresses: Address[]
}

interface EmailContactProps {
  emails: Email[]
}

interface WorkingModeContactProps {
  workingModes: WorkingMode[]
}

interface PhoneContactProps {
  phones: Phone[]
}

const addressContact = (Component: React.ComponentType<ContactComponentProps>) => {
  return (props: AddressContactProps) => {
    const getText = () => {
      return props.addresses.map(addressItem => addressItem.address)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/addressIcon.svg"}
                   alt={"address"}
                   titleCard={"Адрес:"}
                   isPoint={props.addresses.length > 1}
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
  return (props: WorkingModeContactProps) => {
    const getText = () => {
      return props.workingModes.map(workingModeItem => workingModeItem.workingMode)
    }
    return (
        <Component textCard={getText()}
                   urlImage={"/images/Contacts/modeIcon.svg"}
                   alt={"mode"}
                   titleCard={"Режим работы:"}
                   isPoint={props.workingModes.length > 1}
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