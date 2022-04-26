import {combineReducers} from "redux"
import {aboutReducer} from "./aboutReducer";

export const rootReducers = combineReducers({
  about: aboutReducer
})

export type RootReducers = ReturnType<typeof rootReducers>