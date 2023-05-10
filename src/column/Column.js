import './Column.css'

function Column(props) {
    return (
        <div className='one-half column'>
            <h2>{props.titulo}</h2>
            {props.children}
        </div>
    )
}

export default Column