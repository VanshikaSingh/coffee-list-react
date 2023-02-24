import { combineReducers } from "redux";

import coffeeReducer from "../reducer/index"

const rootReducer = combineReducers({
    app: coffeeReducer
});

export default rootReducer;