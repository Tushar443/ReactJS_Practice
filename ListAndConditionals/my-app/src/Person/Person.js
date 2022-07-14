const person = (props)=>{
return (
    <div>
        <input type='text' onChange={props.changeName} value={props.name}/>
        <p onClick={props.click} >Person is {props.name} key : {props.key} Age : {props.age}</p>
    </div>
)
}

export default person;