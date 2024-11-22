import { Item } from "./Item"
import { IMensaje } from "./Mesages"

type IProps= {
    mansajes : IMensaje[]
}

export function Lista(props: IProps){

    const items = props.mansajes.map(mensaje => 
       <Item key={mensaje.id} mensaje={mensaje}></Item>
      )

    return (
        <div>  {items} </div>
    )

}