import { combineReducers } from "redux";
import special from "./special";
import loginCheck from "./logincheck";
import reserve from "./reserve";

// root reducer
const rootReducer= combineReducers({special, loginCheck, reserve});
export default rootReducer;