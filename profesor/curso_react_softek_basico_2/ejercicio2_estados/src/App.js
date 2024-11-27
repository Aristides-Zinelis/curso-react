
import './App.css';
import Contador from "./components/Contador";

function App() {
    const titulo = "App hola mundo";

    return (
        <div className="App">
            <h1>{titulo}</h1>
            <Contador titulo="contador lento" intervalo="2000" />
            <Contador titulo="contador rápido" intervalo="1000" />
            <Contador titulo="otro" intervalo="100" />
        </div>
    );
}

export default App;
