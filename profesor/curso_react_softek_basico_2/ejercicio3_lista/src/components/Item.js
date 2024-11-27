import {useState} from "react";

const Item = (props) => {
    const [comprimido, setComprimido] = useState(true);

    let otrosDatos;
    if (!comprimido) {
        otrosDatos = <div>
            <p>Edad: {props.usuario.edad}</p>
            <p>Color: {props.usuario.color}</p>
        </div>
    }

    const handleClick = (event) => {
        const nuevoComprimido = !comprimido;
        setComprimido(nuevoComprimido);
    }

    const seleccionar = () => {
        props.funcionSeleccionar(props.usuario.nombre);
    }

    return(
        <li>
            {props.usuario.nombre}
            <button onClick={handleClick}>Amplicar</button>
            <button onClick={seleccionar}>Seleccionar</button>
            {otrosDatos}
        </li>
    )
}

export default Item;
