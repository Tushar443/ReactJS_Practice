import * as actionType from '../actions';
const initialState = {
    results : [],
    persons : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
            results : state.results.concat({id : new Date(), strresult : action.result})
        }
        case actionType.DELETE_RESULT:
            const updatedArr = state.results.filter(result=> result.id !== action.deleteId)
            return {
                ...state,
            results : updatedArr
        }
        case actionType.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name : action.name,
                age : action.age
            }
            return {
                ...state,
            persons : state.persons.concat(newPerson)
        }
        case actionType.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }

    console.log("results resucer ",state);
    return state;
};

export default reducer;