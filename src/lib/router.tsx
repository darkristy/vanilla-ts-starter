/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable new-cap */

import { h } from "tsx-dom";

import { Routes } from "../data/routes";

const pathToRegex = (path: string) => new RegExp(`^${path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")}$`);
export class Router {
	routes: any[];
	root: HTMLElement;

	constructor(_routes: Routes[], root: HTMLElement) {
		this.routes = _routes;
		this.root = root;
	}

	getParams(match: any): any {
		const values = match.result.slice(1);
		const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result: any) => result[1]);

		return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
	}

	navigate(url: string): void {
		history.pushState(null, "", url);
		this.render();
	}

	async render() {
		const potentialMatches = this.routes.map((route) => ({
			route,
			result: location.pathname.match(pathToRegex(route.path)),
		}));

		let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

		/* Route not found - return first route OR a specific "not-found" route */
		if (!match)
			match = {
				route: this.routes[0],
				result: [location.pathname],
			};

		const view = new match.route.view(this.getParams(match));
		const Node = await view.render;

		// @ts-ignore
		this.root.innerHTML = <Node />;

		view.afterRender();
	}
}
