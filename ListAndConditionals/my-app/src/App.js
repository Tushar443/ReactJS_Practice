import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Person from './Person/Person';
import person from './Person/Person';

function App() {

  const [person, setPerson ] = useState({
    persons  : [
      {id : '1', name : 'tushar1' , age : 10 },
      {id : '2', name : 'tushar2' , age : 11 },
      {id : '3', name : 'tushar3' , age : 12 },
    ],
    showPerson : true
  });

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

  const deleteHandler =(personIndex)=>{
    // const persons = person.persons.slice(); copy of array 
    //alternative 
    const persons = [...person.persons]; 
    persons.splice(personIndex,1)
    console.log(persons);
    setPerson({
      persons : persons,  
      showPerson : true
    })
  }

  const changedName =(event,id)=>{
    console.log(id);
    console.log(person);
    let Newperson = person.persons.find(id);
    
    let persons = [...person.persons];
    Newperson.name = event.target.value;

    const index = person.persons.findIndex(p=>{
      return p.id === id;
    })

    persons[index] = Newperson;
    setPerson({
      persons : persons,  
      showPerson : true
    })

  }

  let Newperson = null
  // console.log(person.showPerson);
  if(person.showPerson){
    Newperson = (
      <div>
        { person.persons.map((per,index) =>{
          return <Person 
                      name = {per.name} 
                      age ={per.age} 
                      click={()=> deleteHandler(index)}
                      key ={per.id}
                      changeName = {(event)=>changedName(event,person.id)}
                      />
        })}
      </div> 
    )
    console.log(Newperson);
  }


  return (
    <div className="App">
        {/* <button onClick={togglerPersons}>Click to Show Person</button>   */}
        
        {/* { person.showPerson ? 
          <div>
        <Person name = {person.persons[0].name}/>
        <Person name = {person.persons[1].name}/>
        <Person name = {person.persons[2].name}/>
        </div>
        : null } */}
        {Newperson}
    </div>
  );
}

export default App;
