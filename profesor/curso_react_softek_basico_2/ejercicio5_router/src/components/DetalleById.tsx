import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Mensaje} from "./Mensajes";

export default function DetalleById (){
	const [mensaje, setMensaje] = useState<Mensaje | null>(null);
	const  {id} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('https://dev.contanimacion.com/api_tablon/api/mensajes/get/' + id)
			const data = await response.json();
			setMensaje(data);
		}

		getData();
	}, [id]);

	const volver = () => {
		navigate('/mensajes');
	}

	return (
		<div className="detalle">
			<h2>Detalle by id</h2>
			<h3>{mensaje?.asunto}</h3>
			<p>{mensaje?.mensaje}</p>
			<button onClick={volver}>volver</button>
		</div>
	)
}
