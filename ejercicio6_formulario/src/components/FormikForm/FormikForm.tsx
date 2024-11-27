import { useFormik } from "formik"
import ErrorComponent from "../controled/ErrorComponent/ErrorComponent"

interface Mensaje {
        asunto: string,
        mensage: string
}

interface Errores {
    asunto?: string,
    mensage?: string
}

export default function FormikForm () {

    const validate = (values: Mensaje): Errores => {
        const errores: Errores = {}
        if(!values.asunto){
            errores.asunto = 'Asunto obligatorio'
        } else if (values.asunto.length < 6){
            errores.asunto='error tamaño'
        }
        if(!values.mensage){
            errores.mensage = 'Menssaje obligatorio'
        } else if (values.mensage.length < 6){
            errores.mensage = 'error tamaño'
        }

        return errores;
    }



    const formik = useFormik({
        initialValues: {
            asunto: '',
            mensage: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    });


    return(
        <div>
            <h1>Formik form</h1>
            <form onSubmit={formik.handleSubmit}
                data-testid="form">
            <div>
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input
                    type='text'
                    name="asunto"
                    placeholder="Escribe el asunto del mensaje"
                    className="form-control"
                    value={ formik.values.asunto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <ErrorComponent error={formik.errors.asunto || ''} dirty={formik.touched.asunto || false}/>
            <div>
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                    name="mensage"
                    placeholder="Escribe el texto del mensaje"
                    className="form-control"
                    value={formik.values.mensage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></textarea>
            </div>
            <ErrorComponent error={formik.errors.mensage || ''} dirty={formik.touched.mensage || false}/>
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