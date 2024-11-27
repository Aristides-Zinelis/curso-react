import { FormEvent, useContext, useState } from "react"
import useValidade from "../../hooks/useValidate";
import ErrorComponent from "./ErrorComponent/ErrorComponent";
import { DataServiceType, Mensaje } from "../../context/Dataservice";
import { DataServiceContext } from "../../context/Context.providers";



enum Fields {
    asunto = 'asunto',
    mensaje = 'mensaje',
    user_id = 'user_id'
}

interface ErroresCampos {
    asunto: string,
    mensaje: string,
    user_id: string
}

interface DirtyCampos {
    asunto: boolean,
    mensaje: boolean,
    user_id: boolean
}



export default function Controled(){
    const dataService = useContext(DataServiceContext) as DataServiceType;
        // const [errores, validate] = useValidade();
    const [mensaje, setMensaje] = useState<Mensaje>({
        asunto: '',
        mensaje: '',
        user_id: '13'

    });

    const [dirty, setDirty] = useState<DirtyCampos>({
        asunto: false,
        mensaje: false,
        user_id: true
    })

    const [erroresCampos, setErroresCampos] = useState<ErroresCampos>(
        {
            asunto: '',
            mensaje: '',
            user_id: ''
        }
    );

    const handleBlur = (event: FormEvent) => {
        const nuevoMensaje: Mensaje = {...mensaje}
        const campo = event.target as HTMLInputElement;
        const valor = campo.value;
        isFormValid();
    }

    const handleChange  = (event: FormEvent) => {
        const nuevoMensaje: Mensaje = {...mensaje}
        const campo = event.target as HTMLInputElement;
        const valor = campo.value;
        const nombre = campo.name as Fields;
        nuevoMensaje[nombre] = valor;
        setMensaje(nuevoMensaje);
        validateCampos(nombre, valor);
    }

    const validateCampos = (campo: Fields, value: string) => {
        const nuevoErroresCampos = { ...erroresCampos };
        let resultadoValidacion = '';
            const valor = value as string;
            switch (campo) {
                case 'asunto':
                    if(!value){
                        resultadoValidacion ='Asunto obligatorio'
                    } else if (valor.length < 6){
                        resultadoValidacion = 'error tamaño'
                    }
                    break;
                case 'mensaje':
                    if(!value){
                        resultadoValidacion = 'Menssaje obligatorio'
                    } else if (valor.length < 6){
                        resultadoValidacion = 'error tamaño'
                    }
                    break;
                default:
                    break;
            }

            nuevoErroresCampos[campo] = resultadoValidacion;
            setErroresCampos(nuevoErroresCampos);
            // setErrores(erroresValidacion);
            // return erroresValidacion.length > 0;
        }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form as HTMLFormElement);
        // const error = validate(formData);
        // if(!error){
const values = Object.fromEntries(formData.entries());
const result = await dataService.enviarMensaje(values as unknown as Mensaje)
            console.log('se envia' , Object.fromEntries(formData.entries()));
            console.log(result);
        // }
    }

    // const renderErrores = () => {
    //     return errores.map((error, index)=>{
    //             return <div key={index}>{error}
    //                 </div>
    //         })
    // }

    const isFormValid = () : boolean => {
        let resultado = true;
        Object.keys(dirty).forEach((key) => {
            const nombreCampo = key as Fields;
            if(!dirty[nombreCampo]){
                resultado = false;
            }
        })
        Object.keys(erroresCampos).forEach((key) => {
            const nombreCampo = key as Fields
            if (erroresCampos[nombreCampo] !== ''){
                resultado = false;
            }
        })
        return resultado;
    }

    return (
        <div>
            <h1>Controlled form</h1>
            <form data-testid="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input
                    type='text'
                    name="asunto"
                    placeholder="Escribe el asunto del mensaje"
                    className="form-control"
                    value={mensaje.asunto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div className="form-control">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                    name="mensaje"
                    placeholder="Escribe el texto del mensaje"
                    className="form-control"
                    value={mensaje.mensaje}
                    onChange={handleChange}
                ></textarea>
            </div>
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
                <ErrorComponent error={erroresCampos.asunto} dirty={dirty.asunto}/>
                {/* {
                erroresCampos.asunto === '' ?
                null
                :
                <div className = 'alert alert-danger'>{erroresCampos.asunto}</div>
            } */}
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isFormValid()}
                >
                    Enviar
                </button>
            </div>
            </form>
</div>
    )
}