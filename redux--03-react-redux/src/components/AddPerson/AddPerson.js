import React, { Component }  from 'react';

class AddPersons extends Component {

    state = {
        name : '',
        age : ''
    }
    nameChangedHandler = (event)=>{
        this.setState({name : event.target.value});
    }

    ageChangedHandler = (event)=>{
        this.setState({age : event.target.value});
    }
    render() {
    console.log("addPerson ",this.props);

        return (
            <div>
                <input 
                    type='text' 
                    placeholder="Name" 
                    onChange={this.nameChangedHandler}
                    value ={this.state.name}
                    />
                <input 
                    type='number' 
                    placeholder="Age" 
                    onChange={this.ageChangedHandler}
                    value={this.state.age}
                    />
                     <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
                {/* <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)} >Add Persons</button> */}
            </div>
        )
    }
}

export default AddPersons;