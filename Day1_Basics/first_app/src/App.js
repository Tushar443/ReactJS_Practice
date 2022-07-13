import {React, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


function App() {

  const [personState,setPersonState] = useState({
    persons :[
      {name : 'tushar' , age : 28 },
      {name : 'thunder' , age : 66 },
      {name : 'pika' , age : 6 }
    ],
    otherState : 'some Other Value'
  });

  console.log(personState);

  const swithcNameHandler =(newName)=>{
      setPersonState({
        persons :[
          {name : newName , age : 28 },
          {name : 'thunder' , age : 66 },
          {name : 'pika' , age : 60 }
        ]
      });    
  }

  const changedHanlder= (event)=>{
    setPersonState({
      persons :[
        {name : 'tuhar' , age : 28 },
        {name :  event.target.value , age : 66 },
        {name : 'pika' , age : 60 }
      ]
    })

  }

  const [inputName , setInputName]  = useState({
      name : 'tushar'
    })

  const inputChangedHandler = (event)=>{
     setInputName({
      name : event.target.value
     })
  }

  const style ={
    backgroundColor : 'white',
    font : 'inherit',
    border : '1px solid blue',
    padding : '8px'
  }

  return (
    <div className="App">
      <h1>I am react app</h1>
        <button 
            onClick={swithcNameHandler.bind(this,'TushClicked')}
            style={style}
        >Swithch Name</button>
        {/* <Person name ='tushar' age = '30' >Hobbies : Cricket</Person>
        <Person name ='thunder' age ='46'>Hobbies : Gaming</Person>
        <Person name ='pika' age ='6'>Hobbies : Running</Person> */}


        <Person 
              name ={personState.persons[0].name} 
              age = {personState.persons[0].age} >Hobbies : Cricket</Person>
        <Person 
              name ={personState.persons[1].name} 
              age = {personState.persons[1].age} 
              click = {swithcNameHandler.bind(this,'Tusharaaa')}
              changed = {changedHanlder}
              >Hobbies : Gaming</Person>
        <Person 
              name ={personState.persons[2].name} 
              age = {personState.persons[2].age}
              click = {()=> swithcNameHandler('tush!!')} >Hobbies : Running</Person>
        <h4>User Input </h4>
        <UserInput  
              name= {inputName.name}
              changed = {inputChangedHandler}
        />
        <h4>User Output</h4>
        <UserOutput  name = {inputName.name}

        />
        <UserOutput name = 'thunder2'/>
        <UserOutput name = 'thunder3' />

    </div>
  ); 
}

export default App;
