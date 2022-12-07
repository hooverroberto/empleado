import './App.css';

import Empleado from './components/Empleado'

function App() {
  return (
    <div className="App">
      <div className='container d-flex d-flex flex-row justify-content-center gap-3 mt-5'>
        <Empleado         
        imagen='alex'
        nombre="Alex"
        cargo="CEO"
        />
        <Empleado         
        imagen='aron'
        nombre="Profesor Aron"
        cargo="Teacher"
        />
        <Empleado         
        imagen='maho'
        nombre="Mahonry"
        cargo="Becario"
        />
      </div>
    </div>
  );
}

export default App;
