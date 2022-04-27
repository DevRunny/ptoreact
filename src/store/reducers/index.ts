import {combineReducers} from "redux"
import {aboutReducer} from "./aboutReducer";
import {documentationReducer} from "./documentationReducer";

export const rootReducers = combineReducers({
  about: aboutReducer,
  documents: documentationReducer
})

export type RootReducers = ReturnType<typeof rootReducers>