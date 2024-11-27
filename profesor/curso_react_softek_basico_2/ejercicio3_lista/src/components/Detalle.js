import PropTypes from "prop-types";

const Detalle = (props) => {
    return(
        <div>
            <h2>Se ha seleccionado el usuario {props.nombre}</h2>
        </div>
    )
}

/*
const validador = (props, propName) => {
    const nombre = props.nombre;
    if (!nombre || nombre.length < 2) {
        return Error('El nombre asignado no es correcto');
    }
    return null;
}

 */

Detalle.propTypes = {
   nombre: PropTypes.string.isRequired
   //nombre: validador
}

/*
Detalle.defaultProps = {
    nombre: 'Sin selección'
}
 */

export default Detalle;
