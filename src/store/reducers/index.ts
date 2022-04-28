import {combineReducers} from "redux"
import {aboutReducer} from "./aboutReducer";
import {accreditationReducer} from "./accreditationReducer";
import {contactsReducer} from "./contactsReducer";

export const rootReducers = combineReducers({
  about: aboutReducer,
  accreditation: accreditationReducer,
  contacts: contactsReducer
})

export type RootReducers = ReturnType<typeof rootReducers>