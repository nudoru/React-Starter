import AppStore from './stores/appStore';
import Actions from './actions/actionCreators.js';
import Rest from '../nori/service/Rest.js';

export default {
  promise: null,

  load(filename = 'config.json') {
    this.promise = Rest.request({
      method: 'GET',
      url   : filename,
      json  : true
    }).then((data) => {
        console.log('loaded json', data);
        AppStore.dispatch(Actions.configLoaded());
        AppStore.dispatch(Actions.setConfig(data));
      }, (err) => {
        // TODO some error condition
        console.log('error loading json', err)
      }
    );
  }
}