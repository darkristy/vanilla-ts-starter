/* eslint-disable import/no-cycle */
import h from "vhtml";

import { View } from "../lib/view";

class App extends View {
	constructor(params?: any) {
		super(params, "Home");
	}
	async afterRender(): Promise<any> {
		console.log("HomePage");
	}

	render = ({ hello = "hello", ...props }) => {
		console.log(hello);
		return (
			<div>
				<h1>Hello Vite!</h1>
				<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noreferrer">
					Documentation
				</a>
			</div>
		);
	};
}

export default App;
