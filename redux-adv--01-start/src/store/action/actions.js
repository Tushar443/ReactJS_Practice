export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = ()=>{
    return{
        type : INCREMENT
    }
}
export const decrement = ()=>{
    return{
        type : DECREMENT
    }
}
export const add = (val)=>{
    return{
        type : ADD,
        val : val
    }
}
export const subtract = (val)=>{
    return{
        type : SUBTRACT,
        val : val
    }
}
export const saveResult = (result)=>{
    return{
        type : STORE_RESULT,
        result: result
    }
}

export const storeResult = (result)=>{
    return (dispatched)=>{
        setTimeout(()=>{
            dispatched(saveResult(result));
        },2000)
    } 
}
export const deleteResult = (id)=>{
    return{
        type : DELETE_RESULT,
        resultElId : id
    }
}