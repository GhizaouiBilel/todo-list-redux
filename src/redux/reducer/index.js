import { combineReducers } from "redux";
import todoReducer from "./todosReducer"

const rootReducer = combineReducers({todoReducer})
export default rootReducer