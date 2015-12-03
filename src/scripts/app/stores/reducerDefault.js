import ActionConstants from '../actions/actionConstants.js';
import DefaultState from './defaultState.js';

export default (state, action) => {

  // Default state
  if (typeof state === 'undefined') {
    return DefaultState;
  }

  switch (action.type) {
    default:
      return state;
  }
};