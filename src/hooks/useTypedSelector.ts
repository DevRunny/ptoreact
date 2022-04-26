import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducers} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootReducers> = useSelector