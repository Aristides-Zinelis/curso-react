import { useEffect, useState } from "react";

type IProps = {
    apiUrl : string;
}

interface Mensaje {
    id: number,
    asunto: string,
    mensaje: string
}


const Lista = (props: IProps) => {
    const [mensajes, setMensajes] = useState<Mensaje[]>([]);
    const [error, setError] = useState<string | null>(null)

    useEffect(()=> {
        fetch(props.apiUrl, {method: 'GET'})
        .then(res => res.json())
        .then(response => {
            setMensajes(response);
        })
        .catch(e => {
            setError('error: ' )
        })
    }, [])


    const renderMensajes = () => mensajes.map(
        mensaje => <li key="{mensaje.id}">{mensaje.asunto}</li>
    )


    return (
        <div >
            <h1>Lista</h1>
            <ul>
                {
                    !error ?
                     renderMensajes()
                    :
                    <h2>
                        {error}
                    </h2>
                }
            </ul>
        </div>
    )
}

export default Lista;