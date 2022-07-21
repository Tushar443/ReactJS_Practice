import { React, useEffect,Fragment, useRef,useContext } from "react";
import Aux from '../../HOC/Auxillery';
import AuthContext from '../../contex/Auth-Context';
const Cockpit = (props) => {
    const buttonRef = useRef();
    const authContext = useContext(AuthContext);
    console.log("Auth ",authContext);
    useEffect(() => {
        console.log("Cockpit.js useEffect");
        // setTimeout(()=>{
        //     alert("Saved");
        // },1000);
        buttonRef.current.click();
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
            <button key="h2" ref={buttonRef}
                onClick={props.toggled}
            >Toggled Persons</button>
            
            {/* <AuthContext.Consumer>
            {context=> <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}

            <button onClick={authContext.login}>Login</button>
        {/* </Aux> */}
        </Fragment>
    );
}

export default Cockpit;