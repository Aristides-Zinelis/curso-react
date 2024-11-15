import React from 'react'

class Contador extends React.Component{
    interval;

    constructor(props) {
        super(props);

        this.state ={
            valor: 0
        }
      }

    componentDidMount(){
        this.interval = setInterval(() => {
            const nuevoValor = this.state.valor + 1
            this.setState({
                valor: nuevoValor
            })
        }, this.props.intervalo)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>{this.props.titulo}</h2>
                {this.state.valor}
            </div>
        )
    }
}

export default Contador;