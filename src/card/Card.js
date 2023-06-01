import './Card.css'

function Card({cita, setPepe}) {
    function handleClick() {
        let modal = document.getElementById('modal');
        setPepe(cita.id);
        modal.style.display = 'block';
    }

    return(
        <div class="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button class="button eliminar u-full-width" onClick={() => handleClick()}>Eliminar ×</button>
        </div>
    );
}

export default Card;