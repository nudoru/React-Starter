/*
Global Redux store
 */

// Evaluate Redux-rx https://github.com/acdlite/redux-rx

import {createStore} from 'redux';
import defaultReducer from './reducerDefault.js';
const appStore = createStore(defaultReducer);
export default appStore;


