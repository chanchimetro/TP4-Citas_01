import './App.css';
import Column from './column/Column'
import Form from './form/Form'
import List from './list/List'
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: 'Nina',
      dueño: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Nina',
      dueño: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Nina',
      dueño: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    }
  ]);


  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <Column titulo="CREAR MI CITA">
            <Form setCitas={setCitas} citas={citas}/>
          </Column>
          <Column titulo="ADMINISTRA TUS CITAS">
            <List citas={citas}/>
          </Column>
        </div>
      </div>
    </div>
  );
}

export default App;
