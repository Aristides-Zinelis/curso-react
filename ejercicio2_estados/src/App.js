import './App.css';
import Contador from './components/Contador';

function App() {
  const titulo = "App hola mundo"

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <Contador titulo="contador 1" intervalo="2000"></Contador>
      <Contador titulo="contador 2" intervalo="1000"></Contador>
    </div>
  );
}


export default App;
