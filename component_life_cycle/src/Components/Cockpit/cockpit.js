import { React, useEffect,Fragment } from "react";
import Aux from '../../HOC/Auxillery';
const Cockpit = (props) => {
    useEffect(() => {
        console.log("Cockpit.js useEffect");
        // setTimeout(()=>{
        //     alert("Saved");
        // },1000);

        return () => {
            console.log("Cockpit.js useEffect Clean up ");
        }
    }
        , [])

    // return [

    //         <h1 key="h1">I am react app</h1>,
    //     <button key ="h2"
    //         onClick={props.toggled}
    //     >Swithch Name</button>
    // ];

    return (
        // <Aux>
        <Fragment>
            <h1 key="h1">I am react app</h1>
            <button key="h2"
                onClick={props.toggled}
            >Toggled Persons</button>
        {/* </Aux> */}
        </Fragment>
    );
}

export default Cockpit;