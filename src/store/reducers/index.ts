import {combineReducers} from "redux";
import {aboutReducer} from "./aboutReducer";
import {accreditationReducer} from "./accreditationReducer";
import {contactsReducer} from "./contactsReducer";
import {documentationReducer} from "./documentationReducer";
import {sectionRefsReducer} from "./sectionRefsReducer";
import {messengersReducer} from "./messengersReducer";
import {authReducer} from "./authReducer";
import {pointsReducer} from "./pointsReducer";
import {modalsReducer} from "./modalsReducer";
import {mapStateReducer} from "./mapStateReducer";

export const rootReducers = combineReducers({
  about: aboutReducer,
  accreditation: accreditationReducer,
  documents: documentationReducer,
  contacts: contactsReducer,
  mapState: mapStateReducer,
  points: pointsReducer,
  messengers: messengersReducer,
  sectionRefs: sectionRefsReducer,
  auth: authReducer,
  modals:  modalsReducer
});

export type RootReducers = ReturnType<typeof rootReducers>;
