import { h } from "tsx-dom";

import { routes } from "./data/routes";
import { Router } from "./lib/router";

import "./styles/style.css";

const router = new Router(routes, document.getElementById("root")!);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", (e: any) => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			router.navigate(e.target.href);
		}
	});

	router.render();
});

window.addEventListener("popstate", () => router.render());
