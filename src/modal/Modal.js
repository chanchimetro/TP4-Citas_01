import './Modal.css';

function Modal(){
    function handleExit() {
        let modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
    
    return(
        <div id='modal' className='modal'>
            <div className='modal-content'>
                <div class="modal-header">
                    <button className='close' onClick={() => handleExit()}>&times;</button>
                    <br></br>
                </div>
                <div class="modal-body">
                    <p>¿Seguro que queres eliminar esta cita?</p>
                </div>
                <div class="modal-footer">
                    <button>Atrás</button>
                    <button className='btn-eliminar'>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;