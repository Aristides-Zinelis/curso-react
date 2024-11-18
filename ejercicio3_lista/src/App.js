import './App.css';
import Lista from './componentes/Lista'

function App() {

  const ususarios = [
    {nombre: 'Jorge', edad: '30', color: 'rojo'},
    {nombre: 'Ana', edad: '30', color: 'rojo'},
    {nombre: 'Jaime', edad: '30', color: 'rojo'},
    {nombre: 'Maria', edad: '30', color: 'rojo'}
  ]
  return (
    <div className="App">
     <Lista data={ususarios}/>
    </div>
  );
}

export default App;
