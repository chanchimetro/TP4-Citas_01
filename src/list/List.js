import { useState } from 'react';
import './List.css';
import Card from '../card/Card'
import Modal from '../modal/Modal'

function List({citas, setCitas}) {
    const [pepe, setPepe] = useState(0);

    return(
        <>
        <Modal citas={citas} setCitas={setCitas} pepe={pepe}/>
        {citas.map((cita) => (
            <Card cita={cita} setPepe={setPepe}/>
        ))}
        </>
    );
}

export default List;