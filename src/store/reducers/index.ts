import {combineReducers} from "redux"
import {aboutReducer} from "./aboutReducer";
import {accreditationReducer} from "./accreditationReducer";
import {contactsReducer} from "./contactsReducer";
import {documentationReducer} from "./documentationReducer";
import {sectionRefsReducer} from "./sectionRefsReducer";

export const rootReducers = combineReducers({
  about: aboutReducer,
  accreditation: accreditationReducer,
  documents: documentationReducer,
  contacts: contactsReducer,
  sectionRefs: sectionRefsReducer
})

export type RootReducers = ReturnType<typeof rootReducers>