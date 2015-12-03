import ActionConstants from './actionConstants.js';

export default {
  configLoaded() {
    return {
      type: ActionConstants.CONFIG_LOADED
    }
  },

  setConfig(config) {
    return {
      type: ActionConstants.SET_CONFIG,
      payload: config
    }
  }
}