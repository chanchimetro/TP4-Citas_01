import { useState } from 'react';
import './List.css';
import Card from '../card/Card'
import Modal from '../modal/Modal'

function List({citas, setCitas}) {
    const [del, setDel] = useState(0);

    return(
        <>
        <Modal citas={citas} setCitas={setCitas} del={del}/>
        {citas.map((cita) => (
            <Card cita={cita} setDel={setDel}/>
        ))}
        </>
    );
}

export default List;