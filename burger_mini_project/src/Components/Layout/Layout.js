import Auxillery from '../../hoc/Auxillery';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import React from 'react';
import { useState } from 'react';
const Layout = (props) => {
    let [layout, setLayout] = useState({
        showsideDrawer : false
    })

    const hideSideDrawerHandler=() =>{
        const show = layout.showsideDrawer;
        setLayout({
            showsideDrawer : !show
        })
    } 

    return(
        <Auxillery>
            <ToolBar menuClicked = {hideSideDrawerHandler}/>
            <SideDrawer show={layout.showsideDrawer} clicked ={hideSideDrawerHandler}/>
            <main className={classes.content}>
                {props.children}
            </main>
        </Auxillery>
    )
}

export default Layout;