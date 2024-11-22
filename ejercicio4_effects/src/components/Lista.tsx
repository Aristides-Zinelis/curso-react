import { useEffect, useState } from "react";
import Detalle from "./Detalle";

type IProps = {
    apiUrl : string;
}

export interface Mensaje {
    id: number,
    asunto: string,
    mensaje: string,
    created_at?: string,
    user_id?: number
}


const Lista = (props: IProps) => {
    const [mensajes, setMensajes] = useState<Mensaje[]>([]);
    const [error, setError] = useState<string | null>(null)
    const [mensajeseleccionado, setMensajeseleccionado] = useState<number | null>(null)

    useEffect(()=> {
        fetch(props.apiUrl, {method: 'GET'})
        .then(res => res.json())
        .then(response => {
            setMensajes(response);
        })
        .catch(e => {
            setError('error: ' )
        })
    }, [props.apiUrl])

    const handleClick = (id: number) => {
        setMensajeseleccionado(id);
    }

    const renderMensajes = () => mensajes.map(
        mensaje => <li
        key={mensaje.id}
        onClick={() => handleClick(mensaje.id)}
        >{mensaje.asunto}</li>
    )


    return (
        <div >
            <h1>Lista</h1>
            <Detalle id={mensajeseleccionado}/>
            <ul>
                {
                    !error ?
                     renderMensajes()
                    :
                    <h2>
                       Error:  {error}
                    </h2>
                }
            </ul>
        </div>
    )
}

export default Lista;