import { type as saveOCRType } from '../actions/saveOCR';

const defaultState = {
    savedOCR: []
};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case saveOCRType: {
            let nestedState = state.savedOCR;
            nestedState.push(payload);
            state.savedOCR = nestedState;
            return state;
        }
        default:
            return state;
    }
}

export default reducer;