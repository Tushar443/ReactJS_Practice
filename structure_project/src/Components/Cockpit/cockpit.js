const cockpit = (props)=>{
    return (
        <div>
            <h1>I am react app</h1>
        <button 
            onClick={props.toggled}
        >Swithch Name</button>
        </div>
    );
}

export default cockpit;