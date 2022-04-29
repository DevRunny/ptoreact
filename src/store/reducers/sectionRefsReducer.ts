import {SectionRefsAction, SectionRefsActions, SectionRefsState} from "../../types/sectionRefs";

const initialValue: SectionRefsState = {
    contacts: null,
    accreditation: null,
    documentation: null,
    request: null
}

export const sectionRefsReducer = (state = initialValue, action:SectionRefsAction) => {
    switch (action.type) {
        case SectionRefsActions.SET_CONTACTS_REF:
            return {...state, contacts: action.payload}
        case SectionRefsActions.SET_ACCREDITATION_REF:
            return {...state, accreditation: action.payload}
        case SectionRefsActions.SET_DOCUMENTATION_REF:
            return {...state, documentation: action.payload}
        case SectionRefsActions.SET_REQUEST_REF:
            return {...state, request: action.payload}
        default:
            return state
    }
}