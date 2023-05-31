import './Input.css';

function Input(props) {
    let input;
    if (props.input === "input") {
        input = <input type={props.type} id={props.name} className="u-full-width" placeholder={props.placeholder}></input>;
    } else {
        input = <textarea id={props.name} className="u-full-width"></textarea>
    }
    return(
        <>
        <label>{props.label}</label>
        {input}
        </>
    );
}

export default Input;