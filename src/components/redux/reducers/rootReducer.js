import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import themeReducer from './themeReducer';
import languageReducer from './languageReducer';
// const reducers = {
//  menuReducer:menuReducer,
//  themeReducer:themeReducer
// };
const rootReducer = combineReducers({menuReducer, themeReducer,languageReducer});
export default rootReducer;