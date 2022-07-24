import claases from './DrawerToggle.css'
const drawerToggle = (props)=>{
    return (
        <div className={claases.DrawerToggle} onClick={props.menuClicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );  
}

export default drawerToggle;