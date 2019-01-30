import { combineReducers } from 'redux';

import reducerOne from './reducerOne';
import mainContentReducer from './mainContentReducer';

export default combineReducers({
        one: reducerOne,
        main: mainContentReducer

})