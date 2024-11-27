import React from 'react';
import './App.css';
import {createBrowserRouter, Link, Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./components/Home";
import Mensajes from "./components/Mensajes";
import Users from "./components/Users";
import Detalle from "./components/Detalle";
import DetalleById from "./components/DetalleById";
import UsersLista from "./components/UsersLista";
import UsersDetalle from "./components/UsersDetalle";
import Lista from "./components/Lista";

function App() {
    const apiURL = 'https://dev.contanimacion.com/api_tablon/api/mensajes';
/*
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'lista',
            element: <Mensajes apiURL={apiURL} />
        },
        {
            path: 'users',
            element: <Users />
        }
    ])
*/
    return (
        <div className="App">
            <nav className="lista">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mensajes">Mensajes</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="mensajes">
                        <Route path="" element={<Mensajes apiURL={apiURL} />}/>
                        <Route path="detalle" element={<Detalle />}/>
                        <Route path=":id" element={<DetalleById />}/>
                    </Route>
                    <Route path="users"  element={<Users />}>
                        <Route path="lista" element={<UsersLista />}/>
                        <Route path="detalle" element={<UsersDetalle />}/>
                    </Route>
                </Route>
            </Routes>

            {/* cómo crear comentarios? */}
            {/*
            <RouterProvider router={router}></RouterProvider>
            */}

        </div>
    );
}

export default App;
