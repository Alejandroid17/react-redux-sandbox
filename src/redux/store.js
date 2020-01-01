import { createStore, combineReducers } from 'redux';

import { snackbarReducer } from 'react-redux-snackbar';

import ocr from './reducers/ocr';

import { loadState, saveState } from './localStorage'


const presistedState = loadState();
const reducer = combineReducers({
    ocr,
    snackbar: snackbarReducer,
});

const store = createStore(
    reducer,
    presistedState
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
