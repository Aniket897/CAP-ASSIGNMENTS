import { legacy_createStore } from 'redux'
import { reducer as CounterReducer } from './user/reducer';

const store = legacy_createStore(CounterReducer);

export default store;