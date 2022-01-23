import { combineReducers } from "redux";
import DeadlineReducer from "./deadline";
import userReducer from "./user";



const rootReducer = combineReducers({
    deadline: DeadlineReducer,
    user: userReducer,

})

export default rootReducer