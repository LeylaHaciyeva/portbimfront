import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
const reducers = {
 menuReducer:menuReducer
};

const rootReducer = combineReducers(reducers);