import './List.css';
import Card from '../card/Card'

function List({citas}) {
    return(
        <>
        {citas.map((cita) => (
            <Card cita={cita}/>
        ))}
        </>
    );
}

export default List;