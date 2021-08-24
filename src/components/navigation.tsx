import h from "vhtml";

import { routes } from "../data/routes";
import { Component } from "../lib/component";

export class Navigation extends Component {
	render() {
		const filteredRoutes = routes.filter((route) => route.path !== "/");
		return (
			<div>
				{filteredRoutes.map((route) => (
					<a href={route.path} className="nav__link" data-link>
						{route.label}
					</a>
				))}
			</div>
		);
	}
}
