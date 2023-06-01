import './Modal.css';

function Modal({citas, setCitas, pepe}){
    let modal = document.getElementById('modal');
    function handleExit() {
        modal.style.display = 'none';
    }

    function handleDelete() {
        setCitas(citas.filter(c => c.id !== pepe));
        modal.style.display = 'none';
    }
    
    return(
        <div id='modal' className='modal'>
            <div className='modal-content'>
                <div className="modal-header">
                    <button className='close' onClick={() => handleExit()}>&times;</button>
                    <h4>Confirmar eliminacion</h4>
                </div>
                <div className="modal-body">
                    <p>¿Seguro que queres eliminar esta cita?</p>
                </div>
                <div className="modal-footer">
                    <button onClick={() => handleExit()}>Atrás</button>
                    <button className='btn-eliminar' onClick={() => handleDelete()}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;