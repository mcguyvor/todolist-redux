import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
//import reducer 
import FormReducer from './FormReducer';
const rootReducer = combineReducers({
    form : reduxForm
});
export default rootReducer;