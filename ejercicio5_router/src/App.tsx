import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  const apiURL = 'https://dev.contanimacion.com/api_tablon/api/mensajes';


  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/mesages' >Mesages</Link></li>
          <li><Link to='/users' >Userss</Link></li>
        </ul>
      </nav>

    <Router apiURL={apiURL}></Router>
    {/* <RouterProvider router={router} ></RouterProvider> */}

    </div>
  );
}

export default App;
