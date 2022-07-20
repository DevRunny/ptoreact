// Enum наименования секций

export enum nameSection {
  accreditation = "accreditation",
  documentation = "documentation",
  request = "request",
  contacts = "contacts"
}

// State секций main-страницы

export type SectionRefsState = {
  contacts: HTMLDivElement | null,
  accreditation: HTMLDivElement | null,
  documentation: HTMLDivElement | null,
  request: HTMLDivElement | null
}

// Экшены

export enum SectionRefsActions {
  SET_CONTACTS_REF = "SET_CONTACTS_REF",
  SET_ACCREDITATION_REF = "SET_ACCREDITATION_REF",
  SET_DOCUMENTATION_REF = "SET_DOCUMENTATION_REF",
  SET_REQUEST_REF = "SET_REQUEST_REF"
}

type SetContactsRef = {
  type: SectionRefsActions.SET_CONTACTS_REF,
  payload: HTMLDivElement | null
}

type SetAccreditationRef = {
  type: SectionRefsActions.SET_ACCREDITATION_REF,
  payload: HTMLDivElement | null
}

type SetDocumentationRef = {
  type: SectionRefsActions.SET_DOCUMENTATION_REF,
  payload: HTMLDivElement | null
}

type SetRequestRef = {
  type: SectionRefsActions.SET_REQUEST_REF,
  payload: HTMLDivElement | null
}

// Экспорт всех экшенов

export type SectionRefsAction =
    SetContactsRef |
    SetAccreditationRef |
    SetDocumentationRef |
    SetRequestRef
