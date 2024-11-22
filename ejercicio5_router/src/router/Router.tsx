import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Mesages } from "../components/Mesages";
import { Detalle } from "../components/Detalle";
import { Users } from "../components/Users";
import { DetalleById } from "../components/DetalleById";
import { UsersLista } from "../components/UserLista";
import { UsersDetail } from "../components/UsersDetail";

type Iprops= {
    apiURL: string
}

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home/>
//     }

// ])

export function Router(props: Iprops){
    

    return (
        <Routes>
            <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path="mesages">
                <Route path="" element={<Mesages apiURL={props.apiURL}/>}/>
                <Route path="detalle" element={<Detalle/>}/>
                <Route path=":id" element={<DetalleById/>}/>
            </Route>
            <Route path="users">
                <Route path="" element={<Users/>}/>
                <Route path="lista" element={<UsersLista/>}/>
                <Route path="detalle" element={<UsersDetail/>}/>
            </Route>
            </Route>
        </Routes>
       
    )

}