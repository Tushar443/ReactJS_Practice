import cls from './Input.css';

const input = (props) => {
    let inputClasses = [cls.InputElement];
    let inputElement = null;
    let validationErr = null;
    if(props.invalid && props.touched){
        inputClasses.push(cls.Invalid)
        validationErr = <p className={cls.ValidationError}>Please enter {props.label}</p>
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses.join(' ')}
                value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => {
                   return <option
                        key={option.value}
                        value={option.value}>
                        {option.displayValue}
                    </option>
                })}
            </select>)
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed}/>
    }

    return (
        <div className={cls.Input}>
            <label className={cls.Label} >{props.label}</label>
            {inputElement}
            {validationErr}
        </div>
    );
}

export default input;