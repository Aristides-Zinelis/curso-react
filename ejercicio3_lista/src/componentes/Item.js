import { useState } from "react";

const Item = (props) => {
    const [comprimido, setComprimido] = useState(false);

    let otrosDatos;
    if(!comprimido) {
        otrosDatos =<div>
            <p>Edad: {props.usuario.edad}</p>
            <p>Color: {props.usuario.color}</p>
        </div>
    }

    const handleClick = (event) =>{
        const nuevoComprimido = !comprimido;
        setComprimido(nuevoComprimido);
    }

    const seleccionar = () => {
        props.funcionSeleccionar(props.usuario.nombre)
    }

    return (
        <li key = {props.key}>
        {props.usuario.nombre}
        <button onClick={handleClick}>Amplificar</button>
        <button onClick={seleccionar}>Seleccionar</button>
        {otrosDatos}
        </li>
    )

}

export default Item;

