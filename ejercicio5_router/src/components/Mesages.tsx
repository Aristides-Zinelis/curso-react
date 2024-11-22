import { useEffect, useState } from "react"
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
    const [mensajes, setMensajes] =  useState<IMensaje[] | null>(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(props.apiURL)
            const data = await response.json();
            setMensajes(data);
        }

        getData()
    }, [props.apiURL])

    if(!mensajes){
        return (
            <h2>... cargando mensajes</h2>
        )
    }


    return (
        <div>
            <h1>Mensages</h1>
            {
                !mensajes ?
                <h2>... cargando mensajes</h2>
                :
                <Lista mansajes={mensajes}/>
            }
        </div>
    )

}