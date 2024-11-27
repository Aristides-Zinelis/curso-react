import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Mensaje} from "./Mensajes";

export default function Detalle (){
	const initalMensaje: Mensaje = {
		id: 0,
		asunto: '',
		mensaje: '',
	};
	const [mensaje, setMensaje] = useState(initalMensaje);
	const location = useLocation();
	const stateMensaje = location.state?.stateMensaje;

	useEffect(() => {
		setMensaje(stateMensaje);
	}, [stateMensaje]);

	const [params] = useSearchParams();
	const id = params.get('id');
	useEffect(() => {
		if (!id)
			return;

		const getData = async () => {
			const response = await fetch('https://dev.contanimacion.com/api_tablon/api/mensajes/get/' + id)
			const data = await response.json();
			setMensaje(data);
		}

		getData();
	}, [id]);



	if(!mensaje) {
		return <h1>No hay datos de mensaje</h1>
	}

	return (
		<div className="detalle">
			<h1>Detalle</h1>
			<h3>{mensaje.asunto}</h3>
			<p>{mensaje.mensaje}</p>
		</div>
	)
}
