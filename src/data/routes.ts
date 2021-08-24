// eslint-disable-next-line import/no-cycle
import App from "../views/app";

export interface Routes {
	path: string;
	view: any;
	label: string;
}

export const routes: Routes[] = [{ path: "/", view: App, label: "Home" }];
