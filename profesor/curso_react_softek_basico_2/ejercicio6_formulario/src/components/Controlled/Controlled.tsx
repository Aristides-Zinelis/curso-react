import {FormEvent, useContext, useState} from "react";
import useValidate from "../../hooks/useValidate";
import ErrorComponent from "../Errorcomponent/ErrorComponent";
import {DataServiceType, Mensaje} from "../../context/DataService";
import {DataServiceContext} from "../../context/Contexts.providers";



enum Fields {
	asunto = 'asunto',
	mensaje = 'mensaje',
	user_id = 'user_id',
}

interface ErroresCampos {
	asunto: string,
	mensaje: string,
	user_id: string,
}

interface DirtyCampos {
	asunto: boolean,
	mensaje: boolean,
	user_id: boolean,
}

export default function Controlled () {
	const dataService: DataServiceType = useContext(DataServiceContext) as DataServiceType;

	const [errores, validate] = useValidate();
	const [mensaje, setMensaje] = useState<Mensaje>({
		asunto: '',
		mensaje: '',
		user_id: '13',
	});

	const [erroresCampos, setErroresCampos] = useState<ErroresCampos>({
		asunto: '',
		mensaje: '',
		user_id: '',
	});

	const [dirty, setdirty] = useState<DirtyCampos>({
		asunto: false,
		mensaje: false,
		user_id: true,
	});

	const validaCampos = (campo: Fields, valor: string): void => {
		const nuevoErroresCampos = {...erroresCampos};
		let resultadoValidacion = '';
		switch (campo) {
			case 'asunto':
				if (!valor) {
					resultadoValidacion = 'Asunto es obligatorio';
				} else if (valor.length < 6) {
					resultadoValidacion = 'Asunto ha de tener 6 caracteres mínimo';
				}
				break;
			case 'mensaje':
				if (!valor) {
					resultadoValidacion = 'Mensaje es obligatorio';
				} else if (valor.length < 16) {
					resultadoValidacion = 'Mensaje ha de tener 16 caracteres mínimo';
				}
				break;
			default:
		}
		nuevoErroresCampos[campo] = resultadoValidacion;
		setErroresCampos(nuevoErroresCampos);
	}

	const handleChange = (event: FormEvent) => {
		const nuevoMensaje: Mensaje = {...mensaje};
		const campo = event.target as HTMLInputElement;
		const valor = campo.value;
		const nombre = campo.name as Fields;
		nuevoMensaje[nombre] = valor;
		setMensaje(nuevoMensaje);

		validaCampos(nombre, valor);
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);

		console.log('enviando', Object.fromEntries(formData.entries()));

		const values = Object.fromEntries(formData.entries());
		const result =  await dataService.enviarMensaje(values as unknown as Mensaje);
		console.log(result);

	}

	const isFormValid = (): boolean => {
		let resultado = true;
		Object.keys(dirty).forEach((key) => {
			const nombreCampo = key as Fields;
			if (!dirty[nombreCampo]) {
				resultado = false;
			}
		})
		Object.keys(erroresCampos).forEach((key) => {
			const nombreCampo = key as Fields;
			if (erroresCampos[nombreCampo] !== '') {
				resultado = false;
			}
		})
		return resultado;
	}

	const handleBur = (event: FormEvent) => {
		const newDirty = {...dirty};
		const campo = event.target as HTMLInputElement;
		const nombre = campo.name as Fields;
		newDirty[nombre] = true;
		setdirty(newDirty);
	}

	return(
		<div>
			<h1>Controlled form</h1>
			<form
				data-testid="form"
				onSubmit={handleSubmit}
			>
				<div className="form-control">
					<label htmlFor="asunto" className="form-label">Asunto</label>
					<input
						type='text'
						name="asunto"
						placeholder="Escribe el asunto del mensaje"
						className="form-control"
						value={mensaje.asunto}
						onChange={handleChange}
						onBlur={handleBur}
					/>
				</div>
				<ErrorComponent error={erroresCampos.asunto} dirty={dirty.asunto} />

				<div className="form-control">
					<label htmlFor="mensaje" className="form-label">Mensaje</label>
					<textarea
						name="mensaje"
						placeholder="Escribe el texto del mensaje"
						className="form-control"
						value={mensaje.mensaje}
						onChange={handleChange}
						onBlur={handleBur}
					></textarea>
				</div>
				<ErrorComponent error={erroresCampos.mensaje} dirty={dirty.mensaje} />

				<div className="form-control">
					<label htmlFor='user_id' className="form-label">User id</label>
					<select
						name="user_id"
						title="Usuario"
						className="form-select"
						value={mensaje.user_id}
						onChange={handleChange}
					>
						<option value="11">Carmen</option>
						<option value="12">Claudia</option>
						<option value="13">Jorge</option>
						<option value="14">David</option>
					</select>
				</div>

				<div>
					<button
						type="submit"
						className="btn btn-primary"
						disabled={!isFormValid()}
					>
						Enviar
					</button>
				</div>

			</form>
		</div>
	)
}
