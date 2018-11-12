import { combineReducers } from 'redux';
import landingReducer from './landing.reducer';

const rootReducer = combineReducers({ landing: landingReducer });

export default rootReducer;
