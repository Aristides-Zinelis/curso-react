import {Mensaje} from "./Mensajes";
import Item from "./Item";
import style from './lista.module.scss';

type IProps = {
	mensajes: Mensaje[]
}

export default function Lista (props: IProps){
	const items = props.mensajes.map(mensaje =>
		<Item key={mensaje.id} mensaje={mensaje}></Item>
	)

	return (
		<div className={style.lista}>
			<ul >{items}</ul>
		</div>
	)
}
