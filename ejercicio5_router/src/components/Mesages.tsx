import { useEffect, useRef, useState } from "react"
import { Lista } from "./Lista"

type IProps = {
    apiURL: string
}

export type IMensaje = {
    id: number,
    asunto: string,
    mensaje: string,
    name: string,
    user_id: number
    created_at: string,
}

export function Mesages( props: IProps){
    const [mensajes, setMensajes] =  useState<IMensaje[] | null>(null);
    const [mensajesFiltrados, setMensajesFiltrados] =  useState<IMensaje[] | null>(null);
    const campoFiltro = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(props.apiURL)
            const data = await response.json();
            setMensajes(data);
            setMensajesFiltrados([...data]);
        }

        getData()
    }, [props.apiURL])

    if(!mensajes){
        return (
            <h2>... cargando mensajes</h2>
        )
    }

    const filtrar = () => {
        const filtro = campoFiltro?.current?.value;
        if(filtro) {
           const mensajesFiltradosNuevos = mensajes?.filter(mensaje =>
                mensaje.asunto.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()));
                setMensajesFiltrados(mensajesFiltradosNuevos);
            } else {
                setMensajesFiltrados([...mensajes])
            }
        }



    return (
        <div>
            <h1>Mensages</h1>
            <div>
                <input 
                    placeholder="filtrar por asunto"
                    ref={campoFiltro}
                />
                <button onClick={filtrar}>filtrat</button>
            </div>
            {
                !mensajesFiltrados ?
                <h2>... cargando mensajes</h2>
                :
                <Lista mansajes={mensajesFiltrados}/>
            }
        </div>
    )

}