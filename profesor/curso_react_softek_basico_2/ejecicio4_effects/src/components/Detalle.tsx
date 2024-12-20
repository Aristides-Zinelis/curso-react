import {useEffect, useState} from "react";
import {Mensaje} from "./Lista";

type IProps = {
	id: number | null
}

const Detalle = (props: IProps) => {
	const [mensaje, setMensaje] = useState<Mensaje | null>(null);
	const [ampliado, setAmpliado] = useState(false);

	useEffect(() => {
		if (!props.id)
			return;

		const getData = async () => {
			const response = await fetch(process.env.REACT_APP_API_URL + '/get/' + props.id);
			const data = await response.json();
			setMensaje(data);
		}

		getData()
			.catch(e => console.log(e));

		return () => {
			console.log('detectado cambio en el id');
		}
	}, [props.id]);

	const toggleAmpliar = () => {
		setAmpliado(!ampliado);
	}

	return (
		<div>
			<h2>Detalle</h2>
			{props.id ? <div>ID:  {props.id}</div> : null}
			<button onClick={toggleAmpliar}>Ampliar</button>

			{
				ampliado && mensaje ?
					<>
						<p>Asunto: {mensaje?.asunto}</p>
						<p>Mensaje: {mensaje?.mensaje}</p>
						<p>Created_at: {mensaje?.created_at}</p>
					</>
					:
					null
			}
		</div>
	)
}

export default Detalle;
