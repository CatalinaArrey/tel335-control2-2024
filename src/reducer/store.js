import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer); // Crea el store de Redux con el rootReducer

export default store;