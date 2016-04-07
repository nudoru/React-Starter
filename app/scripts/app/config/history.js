/*
Global history object for the React-Router
Read more: https://github.com/rackt/history/blob/master/docs/GettingStarted.md
 */

import { createHashHistory } from 'history'
let history = createHashHistory({queryKey:false});
export default history;