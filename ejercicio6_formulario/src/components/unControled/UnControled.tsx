import { FormEvent } from "react"
import useValidade from "../../hooks/useValidate";

export default function UnControled(){
    const [errores, validate] = useValidade();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form as HTMLFormElement);
        const error = validate(formData);
        if(!error){
            console.log('se envia' , Object.fromEntries(formData.entries()));
        }

    }

    const renderErrores = () => {
        return errores.map((error, index)=>{
                return <div key={index}>{error}
                    </div>
            })
    }




    return (
        <div>
            <h1>UnControled</h1>
            <form
                data-testid="form"
                onSubmit={handleSubmit}
            >
                <div >
                <label htmlFor="asunto">Asunto</label>
                <input
                    type='text'
                    name="asunto"
                    placeholder="Escribe el asunto del mensaje"
                />
                </div>
                <div >
                <label htmlFor="mensaje" >Mensaje</label>
                <textarea
                    name="mensaje"
                    placeholder="Escribe el texto del mensaje"
                ></textarea>
                </div>
                <div >
                <label htmlFor='user_id' >User id</label>
                <select
                    name="user_id"
                    title="Usuario"
                >
                    <option value="11">Carmen</option>
                    <option value="12">Claudia</option>
                    <option value="13">Jorge</option>
                    <option value="14">David</option>
                </select>
                </div>
                <div >
                <button
                    type="submit"
                >
                    Enviar
                </button>
                <span>{renderErrores()}</span>
                </div>
            </form>
        </div>
    )
}