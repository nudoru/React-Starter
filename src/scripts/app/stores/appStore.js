import {createStore} from 'redux';
import defaultReducer from './reducerDefault.js';

const appStore = createStore(defaultReducer);

export default appStore;


