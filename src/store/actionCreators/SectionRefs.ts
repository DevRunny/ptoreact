import {SectionRefsAction, SectionRefsActions} from "../../types/sectionRefs";

export const setAccreditationRefAC = (div: HTMLDivElement | null): SectionRefsAction => {
    return {type: SectionRefsActions.SET_ACCREDITATION_REF, payload: div}
}

export const setDocumentationRefAC = (div: HTMLDivElement | null): SectionRefsAction => {
    return {type: SectionRefsActions.SET_DOCUMENTATION_REF, payload: div}
}

export const setRequestRefAC = (div: HTMLDivElement | null): SectionRefsAction => {
    return {type: SectionRefsActions.SET_REQUEST_REF, payload: div}
}

export const setContactsRefAC = (div: HTMLDivElement | null): SectionRefsAction => {
    return {type: SectionRefsActions.SET_CONTACTS_REF, payload: div}
}