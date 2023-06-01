import './Card.css'

function Card({cita, setDel}) {
    function handleClick() {
        let modal = document.getElementById('modal');
        setDel(cita.id);
        modal.style.display = 'block';
    }

    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button eliminar u-full-width" onClick={() => handleClick()}>Eliminar ×</button>
        </div>
    );
}

export default Card;