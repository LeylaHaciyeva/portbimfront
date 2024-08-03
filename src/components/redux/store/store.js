import { createStore } from "redux";
import menuReducer from "../reducers/menuReducer";
import themeReducer from "../reducers/themeReducer";
import { rootReducer } from "../reducers/rootReducer";
const store = createStore(themeReducer);
export default store;