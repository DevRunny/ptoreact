import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AboutActionCreators from "../store/actionCreators/About"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AboutActionCreators, dispatch)
}