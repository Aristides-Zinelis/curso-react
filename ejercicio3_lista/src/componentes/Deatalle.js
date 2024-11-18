import PropTypes from "prop-types"
const Detalle = (props) => {
    return (
       <div>
            <h2>
                Se ha selectionado el usuario {props.nombre}
            </h2>
       </div>
    )

}

Detalle.propTypes = {
    nombre: PropTypes.string.isRequired
}

// Detalle.defaultProps = {
//     nombre:'sin Seleccion'
// }

// Detalle.propTypes ={

// }

export default Detalle;
