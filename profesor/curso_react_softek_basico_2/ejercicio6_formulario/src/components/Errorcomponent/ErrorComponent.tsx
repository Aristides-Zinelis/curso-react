type Iprops = {
	error: string | undefined,
	dirty: boolean | undefined,
}
export default function ErrorComponent (props: Iprops) {
	if (props.error === '' || !props.dirty) {
		return null;
	}

	return (
		<div className="alert alert-danger">{props.error}</div>
	)
}
