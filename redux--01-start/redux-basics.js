const redux = require('redux');
const createStore = redux.createStore;

const intializeState = {
    couter : 0 
}

//reducer
const rootReducer = (state = intializeState, action)=>{
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            couter : state.couter +1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            couter : state.couter + action.value
        }
    }
    return state;
}

//store 
const store = createStore(rootReducer);
console.log(store.getState());
//subscription

store.subscribe(()=>{
    console.log("[Subscription] ",store.getState());
})


// dispatch
store.dispatch({type : 'INC_COUNTER'});
store.dispatch({type : 'ADD_COUNTER', value : 10});
console.log(store.getState());
