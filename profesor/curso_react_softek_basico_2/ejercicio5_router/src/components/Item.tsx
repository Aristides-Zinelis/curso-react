import {Mensaje} from "./Mensajes";
import {createSearchParams, Link, NavigateOptions, useNavigate} from "react-router-dom";

type IProps = {
	mensaje: Mensaje
}
export default function Item (props: IProps){
	const navigate = useNavigate();
	const verDetalle = () => {
		const options: NavigateOptions = {
			state: {
				stateMensaje: props.mensaje,
			}
		}
		navigate('detalle', options);
	}

	const verDetalleSearch = () => {
		navigate({
			pathname: 'detalle',
			search: createSearchParams({
				id: props.mensaje.id.toString(),
			}).toString()
		});
	}

	return (
		<li className="mensaje"  >
				<h2>{props.mensaje.asunto}</h2>
				<p>{props.mensaje.mensaje}</p>
				<Link to={`/mensajes/${props.mensaje.id}`}>Ver detalle</Link>
				<button onClick={verDetalle}>Ver detalle con datos</button>
				<button onClick={verDetalleSearch}>Ver detalle con datos</button>
		</li>
	)
}
