import {useFormik} from "formik";
import ErrorComponent from "../Errorcomponent/ErrorComponent";

interface Mensaje {
	asunto: string,
	mensaje: string,
}
interface Errores {
	asunto?: string,
	mensaje?: string,
}

export default function FormikForm() {
	const validate = (values: Mensaje): Errores => {
		const errores: Errores = {};
		if (!values.asunto) {
			errores.asunto = 'Asunto es obligatorio';
		} else if (values.asunto.length < 6) {
			errores.asunto = 'Asunto ha de tener 6 caracteres mínimo';
		}
		if (!values.mensaje) {
			errores.mensaje = 'Mensaje es obligatorio';
		} else if (values.mensaje.length < 16) {
			errores.mensaje = 'Mensaje ha de tener 16 caracteres mínimo';
		}
		return errores;
	}

	const formik = useFormik({
		initialValues: {
			asunto: '',
			mensaje: '',
		},
		onSubmit: values => {
			console.log(values);
		},
		validate
	});

	return (
		<div>
			<h1>Formilk form</h1>
			<form
				data-testid="form"
				onSubmit={formik.handleSubmit}
			>
				<div>
					<label htmlFor="asunto" className="form-label">Asunto</label>
					<input
						type='text'
						name="asunto"
						placeholder="Escribe el asunto del mensaje"
						className="form-control"
						value={formik.values.asunto}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<ErrorComponent error={formik.errors.asunto} dirty={formik.touched.asunto} />
				<div>
					<label htmlFor="mensaje" className="form-label">Mensaje</label>
					<textarea
						name="mensaje"
						placeholder="Escribe el texto del mensaje"
						className="form-control"
						value={formik.values.mensaje}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					></textarea>
				</div>
				<ErrorComponent error={formik.errors.mensaje} dirty={formik.touched.mensaje} />
				<div>
					<button
						type="submit"
						className="btn btn-primary"
						disabled={!formik.isValid || !formik.dirty}
					>
						Enviar
					</button>
				</div>

			</form>
		</div>
	)
}
