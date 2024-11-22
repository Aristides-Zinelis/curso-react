import React from 'react';
import './App.css';
import Lista from './components/Lista';

function App() {
  const url: string = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '';

  return (
    <div className="App">
       <Lista apiUrl = {url}/>
     </div>
  );
}

export default App;
