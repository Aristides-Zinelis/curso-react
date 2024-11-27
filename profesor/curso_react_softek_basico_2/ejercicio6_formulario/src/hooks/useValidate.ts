import {useState} from "react";

export default function useValidate(): [string[], (formData: FormData) => boolean] {
	const [errores, setErrores] = useState<string[]>([]);

	const validate = (formData: FormData): boolean => {
		const erroresValidacion: string[] = [];
		formData.forEach((value, key) => {
			const valor = value as string;
			switch (key) {
				case 'asunto':
					if (!value) {
						erroresValidacion.push('Asunto es obligatorio');
					} else if (valor.length < 6) {
						erroresValidacion.push('Asunto ha de tener 6 caracteres mínimo')
					}
					break;
				case 'mensaje':
					if (!value) {
						erroresValidacion.push('Mensaje es obligatorio');
					} else if (valor.length < 16) {
						erroresValidacion.push('Mensaje ha de tener 16 caracteres mínimo')
					}
					break;
				default:
			}
		});
		setErrores(erroresValidacion);
		return erroresValidacion.length > 0;
	}


	return [errores, validate];
}
