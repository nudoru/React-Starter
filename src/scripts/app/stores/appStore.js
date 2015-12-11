import {createStore} from 'redux';
import defaultReducer from './reducerDefault.js';

// Evaluate Redux-rx https://github.com/acdlite/redux-rx

const appStore = createStore(defaultReducer);

export default appStore;


