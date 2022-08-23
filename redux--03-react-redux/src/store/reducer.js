// import * as actionType from './actions';
// const initialState = {
//     counter: 0,
//     results : []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionType.INCREMENT:
//             return {
//                     ...state,
//                 counter: state.counter + 1
//             }
//         case actionType.DECREMENT:
//             return {
//                     ...state,
//                 counter: state.counter - 1
//             }
//         case actionType.ADD:
//             return {
//                     ...state,
//                 counter: state.counter + action.value
//             }
//         case actionType.SUBSTRACT:
//             return {
//                     ...state,
//                 counter: state.counter - action.value
//             }
//         case actionType.STORE_RESULT:
//             return {
//                 ...state,
//             results : state.results.concat({id : new Date(), strresult : state.counter})
//         }
//         case actionType.DELETE_RESULT:
//             const updatedArr = state.results.filter(result=> result.id !== action.deleteId)
//             return {
//                 ...state,
//             results : updatedArr
//         }
//     }

//     return state;
// };

// export default reducer;