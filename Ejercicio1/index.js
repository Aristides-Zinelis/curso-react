const contenedor = document.getElementById('app');
const root = ReactDOM.createRoot(contenedor);

function Saludo(props) {
    return React.createElement(
        'h1',
        {},
        'hola ' + props.nombre
    )
}
const saludo = React.createElement(Saludo, {nombre: 'Aris'});

root.render(saludo);