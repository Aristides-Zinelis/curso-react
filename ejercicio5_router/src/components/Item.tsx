import { Link, NavigateOptions, createSearchParams, useNavigate } from "react-router-dom"
import { IMensaje } from "./Mesages"

type IProps = {
    mensaje: IMensaje
}

export function Item(props: IProps){
    const navigate = useNavigate();
    const verDetalle = () => {
        const options: NavigateOptions = {
            state: {
                stateMensajes : props.mensaje,
            }
        }
        navigate('detalle', options)
    }

    const verDetalleSearch = () => {
       navigate({
        pathname: 'detalle',
        search: createSearchParams({
            id: props.mensaje.id.toString(),
        }).toString()
       })
    }

    return (
        <div  className="mensaje"> 
            <li >
            <p>{props.mensaje.asunto}</p>
            <p>{props.mensaje.mensaje}</p>
            <Link to={`/mesages/${props.mensaje.id}`}>Ver detalle</Link>
            <button onClick={verDetalle}>Ver detalle de datos</button>
            <button onClick={verDetalleSearch}>Ver detalle de datos</button>
        </li>
        </div>
    )

}