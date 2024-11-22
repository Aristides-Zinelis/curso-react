import { Item } from "./Item"
import { IMensaje } from "./Mesages"
import  style  from "./lista.module.scss"

type IProps= {
    mansajes : IMensaje[]
}

export function Lista(props: IProps){

    const items = props.mansajes.map(mensaje => 
       <Item key={mensaje.id} mensaje={mensaje}></Item>
      )

    return (
        <div className={style.lista}> {items} </div>
    )

}