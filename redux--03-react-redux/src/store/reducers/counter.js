import * as actionType from '../actions';
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                    ...state,
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                    ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                    ...state,
                counter: state.counter + action.value
            }
        case actionType.SUBSTRACT:
            return {
                    ...state,
                counter: state.counter - action.value
            }
    }

    return state;
};

export default reducer;