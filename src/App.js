import './App.css';
import Column from './column/Column'
import Form from './form/Form'
import Card from './card/Card'

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <Column titulo="CREAR MI CITA">
            <Form/>
          </Column>
          <Column titulo="ADMINISTRA TUS CITAS">
            <Card mascota='Nina' dueño='Martin' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna'/>
            <Card mascota='Sifon' dueño='Flecha' fecha='2023-08-05' hora='09:24' sintomas='Duerme mucho'/>
            <Card mascota='Floki' dueño='Ari' fecha='2023-08-05' hora='16:15' sintomas='No está comiendo'/>
          </Column>
        </div>
      </div>
    </div>
  );
}

export default App;
