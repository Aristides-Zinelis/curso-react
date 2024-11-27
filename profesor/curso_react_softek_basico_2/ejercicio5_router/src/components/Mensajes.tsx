import {useEffect, useRef, useState} from "react";
import Lista from "./Lista";

type IProps = {
	apiURL: string,
}

export type Mensaje = {
	id: number,
	asunto: string,
	mensaje: string,
}

export default function Mensajes (props: IProps){
	const [mensajes, setMensajes] = useState<Mensaje[] | null>(null);
	const [mensajesFiltrados, setMensajesFiltrados] = useState<Mensaje[] | null>(null);
	const campoFiltro = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(props.apiURL)
			const data = await response.json();
			setMensajes(data);
			setMensajesFiltrados([...data]);
		}

		getData();
	}, [props.apiURL]);

	const filtrar = () => {
		if (!mensajes)
			return;

		const filtro = campoFiltro?.current?.value;
		if (filtro) {
			const nuevosMensajesFiltrados = mensajes.filter(mensaje =>
				mensaje.asunto.toLowerCase().includes(filtro.toLowerCase()));
			setMensajesFiltrados(nuevosMensajesFiltrados);
		} else {
			setMensajesFiltrados([...mensajes]);
		}
	}

	return (
		<div className="mensajes">
			<h1>Mensajes</h1>
			<div>
				<input
					placeholder="filtra por asunto"
					ref={campoFiltro}
				/>
				<button onClick={filtrar}>filtrar</button>
			</div>
			{
				!mensajesFiltrados ?
					<h2>... cargando mensajes</h2>
					:
					<Lista mensajes={mensajesFiltrados} />
			}

		</div>
	)
}
