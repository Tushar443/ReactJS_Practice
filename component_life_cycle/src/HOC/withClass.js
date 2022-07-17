const withClass = (WrappeComponent , className)=>{
    return props=>(
        <div className={className}>
            <WrappeComponent {...props}></WrappeComponent>
        </div>
    );
}

export default withClass;