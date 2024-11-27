import styles from './toggle.module.scss';
import {useState} from "react";

type ToggleProps = {
	opcion1: string,
	opcion2: string,
	label: string,
	handleToggle: (value: boolean) => void,
	defaultToggle: boolean,
}

export default function Toggle(props: ToggleProps) {
	const [toggle, setToggle] = useState(props.defaultToggle);

	const handleCkick = () => {
		const newToggle = !toggle;
		setToggle(newToggle);
		props.handleToggle(newToggle);
	}

	const getButtonClasses = () => {
		const colorClass = toggle ? 'btn-success' : 'btn-primary';
		return `btn ${colorClass} ${styles.boton}`;
	}

	return (
		<div className={styles.toggle}>
			<span>{props.label}</span>
			<button
				onClick={handleCkick}
				className={getButtonClasses()}
			>
				{
					toggle ?
						<>{props.opcion1}</>
						:
						<>{props.opcion2}</>
				}
			</button>
		</div>
	)
}
