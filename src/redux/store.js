import { createStore, combineReducers } from 'redux';

import { snackbarReducer } from 'react-redux-snackbar';

// import results from './reducers/results';
// import currentItem from './reducers/currentItem';
// import suggestions from './reducers/suggestions';
import ocr from './reducers/ocr';
import { loadState, saveState } from './localStorage'


const presistedState = loadState();
const reducer = combineReducers({
    // results,
    // suggestions,
    // currentItem,
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
