import { IMensaje } from "./Mesages"

type IProps = {
    mensaje: IMensaje
}

export function Item(props: IProps){
    return (
        <div  className="mensaje"> 
            <li >
            <p>{props.mensaje.asunto}</p>
            <p>{props.mensaje.mensaje}</p>
        </li>
        </div>
    )

}