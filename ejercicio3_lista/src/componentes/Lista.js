import Detalle from "./Deatalle";
import Item from "./Item"
import { useState } from "react";
const Lista = (props) => {

    const [seleccionado, setSeleccionado] = useState();

    const funcionSeleccionar = (valor) => {
        setSeleccionado(valor);
    }

    const items = props.data.map((usuario, index) => {
        return <Item
                key={'item' + index}
                usuario = {usuario}
                funcionSeleccionar = {funcionSeleccionar}/>
    });



    return (
        <div>
            <h1>Lista</h1>
            {   seleccionado 
                    ? 
                 <Detalle nombre={seleccionado}></Detalle>
                    :
                null
            }
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Lista;