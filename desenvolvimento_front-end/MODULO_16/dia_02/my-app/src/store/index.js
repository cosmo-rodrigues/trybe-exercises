import { createStore } from 'redux';
import rootReducers from '../reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(rootReducers, devToolsEnhancer());

export default store;