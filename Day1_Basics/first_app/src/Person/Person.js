import {React} from 'react';
import './Person.css'
const person =(props)=>{
    return (
        <div className='Person'>
            {/* Hi i am Person and i am {Math.floor(Math.random()*30)} years old */}
           <p onClick={props.click}> Hi i am {props.name} and i am {props.age} years old</p>
           <p>{props.children}</p>
           <input onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;
