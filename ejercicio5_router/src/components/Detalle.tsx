import { useLocation, useSearchParams } from "react-router-dom"
import { IMensaje } from "./Mesages";
import { useEffect, useState } from "react";

export function Detalle(){
    const initialMensaje: IMensaje = {
        id: 0,
        asunto: "",
        mensaje: "",
        name: "",
        user_id: 0,
        created_at: ""
    }

 const location = useLocation();
 const[mensaje, setMensaje] = useState(initialMensaje);
 const stateMensaje = location.state?.stateMensajes;
 const [params] = useSearchParams();
 const id = params.get('id');
 useEffect(()=> {
    if(!id)
        return

    const getData = async () => {
        const response = await fetch(`https://dev.contanimacion.com/api_tablon/api/mensajes/get/${id}`)
        const data = await response.json();
        setMensaje(data);
    }

    getData();
 }, [id])

 useEffect(() => {
    setMensaje(stateMensaje)
 }, [stateMensaje])

 if(!mensaje) {
    return <h1>No hay datos de mensajes</h1>
 }


    return (
        <div>
            <h2>{mensaje.asunto} </h2>
            <h2>{mensaje.mensaje} </h2>
        </div>
    )

}