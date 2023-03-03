import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";


const rootReducer = combineReducers(
    {
        todos: todoReducer,
        filters: filterReducer,
    }
);
// console.log(`todoreducer: ${typeof filterReducer}`);

export default rootReducer