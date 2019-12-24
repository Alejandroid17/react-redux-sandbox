import { createStore, combineReducers } from 'redux';

import { snackbarReducer } from 'react-redux-snackbar';

import results from './reducers/results';
import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';
import ocr from './reducers/ocr';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
    ocr,
    snackbar: snackbarReducer,
});

const store = createStore(reducer);

export default store;
