import React from 'react';
const person = (props)=>{
    return (
        <div onClick={props.clicked}>
            <h1>
               Name :  {props.name}
            </h1>
            <p>Age : {props.age}</p>
        </div>
    )
}

export default person;