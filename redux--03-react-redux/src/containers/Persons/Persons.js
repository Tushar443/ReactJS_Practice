import React, { Component }  from 'react';
import AddPersons from "../../components/AddPerson/AddPerson";
import Person from "../../components/Person/Person";
import  * as actionType  from "../../store/actions";
import { connect } from 'react-redux';

class Persons extends Component{
    render(){
        console.log("Persons ",this.props);
        return (
            <div>
                <AddPersons personAdded = {this.props.onAddedPerson}/>
                {this.props.prs.map(prs=>(
                        <Person 
                            id ={prs.id}
                            name ={prs.name}
                            age ={prs.age}
                            clicked = {() => this.props.onRemovedPerson(prs.id)}
                        />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        prs : state.res.persons
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddPerson : (name , age)=> dispatch({type : actionType.ADD_PERSON ,name:name ,age:age}),
        onRemovePerson : (id)=> dispatch({type : actionType.REMOVE_PERSON ,personId : id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);