import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Mesages } from "../components/Mesages";
import { Detalle } from "../components/Detalle";
import { Users } from "../components/Users";

type Iprops= {
    apiURL: string
}
export function Router(props: Iprops){
    return (
        <Routes>
            <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path="mesages">
                <Route path="" element={<Mesages apiURL={props.apiURL}/>}/>
                <Route path="detalle" element={<Detalle/>}/>
            </Route>
            <Route path="users" element={<Users/>}/>
            </Route>
        </Routes>
    )

}