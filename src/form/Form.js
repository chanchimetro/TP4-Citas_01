import './Form.css';
import Input from '../input/Input'

function Form({ setCitas, citas }) {
    function handleSubmit(e) {
        e.preventDefault();
        setCitas( [...citas, {
            id: citas.length + 1,
            mascota: e.target.mascota.value,
            dueño: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value 
        }] );
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Input input="input" label='Nombre Mascota' type='text' name='mascota' placeholder='Nombre Mascota'/>
            <Input input="input" label='Nombre Dueño' type='text' name='propietario' placeholder='Nombre dueño de la mascota'/>
            <Input input="input" label='Fecha' type='date' name='fecha' placeholder=''/>
            <Input input="input" label='hora' type='time' name='hora' placeholder=''/>
            <Input input="texarea" label='Sintomas' name='sintomas'/>
            <button type="submit" className='u-full-width button-primary'>Agregar Cita</button>
        </form>
    );
}

export default Form;