import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import themeReducer from './themeReducer';
const reducers = {
 menuReducer:menuReducer,
 themeReducer:themeReducer
};
export const rootReducer = combineReducers(reducers);