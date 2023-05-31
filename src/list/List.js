import './List.css';
import Card from '../card/Card'

function List({citas, setCitas}) {
    return(
        <>
        {citas.map((cita) => (
            <Card citas={citas} cita={cita} setCitas={setCitas}/>
        ))}
        </>
    );
}

export default List;