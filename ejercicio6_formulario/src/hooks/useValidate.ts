import { useState } from "react";

export default function useValidade(): [string[], (formData: FormData)=> boolean]{
    const [errores, setErrores] = useState<string[]>([]);
    const validate = (formData: FormData) => {
        const erroresValidacion: string[] = [];
        formData.forEach((value, key) => {
            const valor = value as string;
            switch (key) {
                case 'asunto':
                    if(!value){
                        erroresValidacion.push('Asunto obligatorio')
                    } else if (valor.length < 6){
                        erroresValidacion.push('error tamaño')
                    }
                    break;
                case 'mensaje':
                    if(!value){
                        erroresValidacion.push('Menssaje obligatorio')
                    } else if (valor.length < 6){
                        erroresValidacion.push('error tamaño')
                    }
                    break;
                default:
                    break;
            }
        })
            setErrores(erroresValidacion);
            return erroresValidacion.length > 0;
        }

    return [errores, validate];
}