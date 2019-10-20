import { createStore, combineReducers } from 'redux';

import results from './reducers/results';
import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
});

const store = createStore(reducer);

export default store;
