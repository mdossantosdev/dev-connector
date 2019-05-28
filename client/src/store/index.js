import { createStore } from 'redux';
import middleware from './middleware';
import rootReducer from '../reducers';

const initialStore = {};

const store = createStore(rootReducer, initialStore, middleware);

export default store;
