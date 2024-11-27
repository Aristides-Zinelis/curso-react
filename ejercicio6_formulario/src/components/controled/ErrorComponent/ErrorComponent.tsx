import { render } from "@testing-library/react";

type Iprops =  {
    error: string,
    dirty: boolean
}

export default function ErrorComponent (props: Iprops)  {

    if ( props.error === '') {
        return null;
    }

    return (
        <div className = 'alert alert-danger'>{props.error}</div>
    )

}