import {React} from 'react';
const person =(props)=>{
    return (
        <div className='Person'>
           <p onClick={props.click}> Hi i am {props.name} and i am {props.age} years old</p>
           <p>{props.children}</p>
           <input onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;
