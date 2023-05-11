import './Input.css';

function Input(props) {
    let input;
    if (props.input === "input") {
        input = <input type={props.type} name={props.name} class="u-full-width" placeholder={props.placeholder} value=""></input>;
    } else {
        input = <textarea name={props.name} class="u-full-width"></textarea>
    }
    return(
        <>
        <label>{props.label}</label>
        {input}
        </>
    );
}

export default Input;