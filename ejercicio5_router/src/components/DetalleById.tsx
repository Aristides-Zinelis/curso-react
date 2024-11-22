import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMensaje } from "./Mesages";

export function DetalleById(){
    const [mensaje, setMensaje ] = useState<IMensaje | null>();
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async () => {
            const response = await fetch(`https://dev.contanimacion.com/api_tablon/api/mensajes/get/${id}`)
            const data = await response.json();
            setMensaje(data);
        }

        getData();
    }, [id])

    const volver = () => {
        navigate('/mesages');
    }
    return (
        <div>
            <h2>Detalles</h2>
            <h3>{mensaje?.asunto}</h3>
            <p>{mensaje?.mensaje}</p>
            <button onClick={volver}>volver</button>
        </div>
    )

}