import './App.css';
import Persons from '../Components/Persons/Persons'
import React ,{ useState } from 'react';
import Cockpit from '../Components/Cockpit/cockpit'
function App() {

  const [person, setPerson ] = useState({
    persons  : [
      {id : '1', name : 'tushar1' , age : 10 },
      {id : '2', name : 'tushar2' , age : 11 },
      {id : '3', name : 'tushar3' , age : 12 },
    ],
    showPerson : true
  });

  const deleteHandler =(personIndex)=>{
    const persons = [...person.persons]; 
    persons.splice(personIndex,1)
    console.log(persons);
    setPerson({
      persons : persons,  
      showPerson : true
    })
  }

  const changedName =(event,id)=>{
    let persons = [...person.persons];
    let Newperson = persons[id];
    Newperson.name = event.target.value;
    persons[id] = Newperson;
    setPerson({
      persons : persons,  
      showPerson : true
    })
  }

  const togglerPersons =()=>{
    const doSome = person.showPerson;
    setPerson({
      persons  : [
        {id : '1', name : 'tushar1' , age : 100 },
        {id : '2', name : 'tushar2' , age : 110 },
        {id : '3', name : 'tushar3' , age : 120 },
      ],
      showPerson : !doSome
    })
  }
  let newPerson ;
  if(person.showPerson){
    newPerson = (
    <Persons 
        persons ={person.persons}
        click ={deleteHandler}
        changed ={changedName }
      />)
  }
  return (
    <div className="App">
      
      <Cockpit toggled={togglerPersons}/>
      {newPerson}
    </div>
  );
}

export default App;
