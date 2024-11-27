import {FormEvent, useState} from "react";
import useValidate from "../../hooks/useValidate";

export default function UnControlled () {
	const [errores, validate] = useValidate();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);

		const hasErrors = validate(formData);
		if (!hasErrors)
			console.log('enviando', Object.fromEntries(formData.entries()));
	}

	const renderErrores = () => {
		return errores.map((error, index) => <div key={index} className="alert alert-danger">{error}</div>)
	}

	return(
		<div>
			<h1>UnControlled form</h1>
			<form
				data-testid="form"
				onSubmit={handleSubmit}
			>
				<div >
					<label htmlFor="asunto" className="form-label">Asunto</label>
					<input
						type='text'
						name="asunto"
						placeholder="Escribe el asunto del mensaje"
						className="form-control"
					/>
				</div>
				<div >
					<label htmlFor="mensaje"  className="form-label">Mensaje</label>
					<textarea
						name="mensaje"
						placeholder="Escribe el texto del mensaje"
						className="form-control"
					></textarea>
				</div>
				<div >
					<label htmlFor='user_id'  className="form-label">User id</label>
					<select
						name="user_id"
						title="Usuario"
						className="form-select"
					>
						<option value="11">Carmen</option>
						<option value="12">Claudia</option>
						<option value="13">Jorge</option>
						<option value="14">David</option>
					</select>
				</div>
				{renderErrores()}
				<div >
					<button
						type="submit"
						className="btn btn-primary"
					>
						Enviar
					</button>
				</div>

			</form>
		</div>
	)
}
