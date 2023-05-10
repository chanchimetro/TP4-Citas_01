import './App.css';
import Column from './column/Column'

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <Column titulo="CREAR MI CITA"></Column>
          <Column titulo="ADMINISTRA TUS CITAS"></Column>
        </div>
      </div>
    </div>
  );
}

export default App;
