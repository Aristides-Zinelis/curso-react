import './App.css';
import Lista from "./components/Lista";

function App() {
    const usuarios = [
        {nombre: 'jorge', edad: 12, color: 'rojo'},
        {nombre: 'juan', edad: 24, color: 'azul'},
        {nombre: 'ana', edad: 43, color: 'rojo'},
        {nombre: 'eva', edad: 22, color: 'verde'},
        {nombre: 'noa', edad: 2, color: 'rosa'},
    ];

  return (
      <div className="App">
        <Lista data={usuarios} />
      </div>
  );
}

export default App;
