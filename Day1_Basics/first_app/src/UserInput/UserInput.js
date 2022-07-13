const userOutput = (props)=>{
    const style ={
        border : '2px solid black'
    }

    return <input 
                onChange={props.changed} 
                value={props.name}
                 style ={style}   
                />
}

export default userOutput;