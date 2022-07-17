import Person from "./Person/Person";
const Persons = (props)=> props.persons.map((person ,index)=>{
    return <Person 
            name = {person.name}
            age = {person.age} 
            key ={person.id}
            click = {()=> props.click(index)}
            changed = {(event)=>props.changed(event,index)} 
                    />
}
)

export default Persons;