import { useState } from 'react'
import styles from './toggle.module.scss'

type ToggleProps = {
    opcion1: string,
    opcion2: string,
    label: string,
    handleToggle: (value: boolean) => void,
    defaultToggle: boolean
}

export default function Toggle(props: ToggleProps){
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        const newTOggle = !toggle;
        setToggle(newTOggle);
        props.handleToggle(newTOggle);
    }

    const getButtonClasses = () => {
        const colorClass = toggle ? 'btn-success' : 'btn-primary'
        return `btn ${colorClass} ${styles.boton}`;
    }


    return (
        <div className={styles.toggle}>
            <span>{props.label}</span>
            <button
                onClick={handleClick}
                className={getButtonClasses()}
            >
                {
                    toggle ?
                    <> {props.opcion1}</>
                    :
                    <> {props.opcion2}</>
                }
            </button>
            
        </div>
    )
}