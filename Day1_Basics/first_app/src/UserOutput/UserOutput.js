import './UserOutput.css'
const userOutput = (props)=>{
    return (
    <div className='UserOutput'>
        <p>UserName : {props.name}</p>
        <p>Hello project</p>
    </div>)
}

export default userOutput;