import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';

function App() {
  const url: string = 'https://dev.contanimacion.com/api_tablon/api/mensajesaaa';

  return (
    <div className="App">
       <Lista apiUrl = {url}/>
     </div>
  );
}

export default App;
