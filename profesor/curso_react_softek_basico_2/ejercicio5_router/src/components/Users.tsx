import {Link, Outlet} from "react-router-dom";

export default function Users (){
	return (
		<div className="users">
			<h1>Users</h1>
			<nav>
				<ul>
					<li><Link to="lista">Lista</Link></li>
					<li><Link to="detalle">Detalle</Link></li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}
