import ActionConstants from '../actions/actionConstants.js';
import DefaultState from './defaultState.js';

export default (state, action) => {

  // Default state
  if (typeof state === 'undefined') {
    return DefaultState;
  }

  //console.log('reducer',action);

  switch (action.type) {
    case ActionConstants.SET_CONFIG:
      return Object.assign({}, state, {config: action.payload});
    default:
      return state;
  }
};