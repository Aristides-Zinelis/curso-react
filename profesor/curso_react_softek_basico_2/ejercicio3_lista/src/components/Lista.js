import Item from "./Item";
import Detalle from "./Detalle";
import {useState} from "react";

const Lista = (props) => {
    const [seleccionado, setSeleccionado] = useState();

    const handleSeleccionar = (valor) => {
        setSeleccionado(valor);
    }

    const items = props.data.map((usuario, index) => {
        return <Item
            key={'item' + index}
            usuario={usuario}
            funcionSeleccionar={handleSeleccionar}
        />
    });

    return (
        <div>
            <h1>Lista</h1>
            <Detalle nombre='n' />
            { seleccionado ? <Detalle nombre={seleccionado} /> : null }
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Lista;
