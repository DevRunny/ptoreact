import { combineReducers } from "redux";
import { aboutReducer } from "./aboutReducer";
import { accreditationReducer } from "./accreditationReducer";
import { contactsReducer } from "./contactsReducer";
import { documentationReducer } from "./documentationReducer";
import { sectionRefsReducer } from "./sectionRefsReducer";
import { messengersReducer } from "./messengersReducer";
import { authReducer } from "./authReducer";

export const rootReducers = combineReducers({
  about: aboutReducer,
  accreditation: accreditationReducer,
  documents: documentationReducer,
  contacts: contactsReducer,
  messengers: messengersReducer,
  sectionRefs: sectionRefsReducer,
  auth: authReducer,
});

export type RootReducers = ReturnType<typeof rootReducers>;
