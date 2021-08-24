/* eslint-disable @typescript-eslint/ban-ts-comment */
export class Component {
	constructor() {
		// @ts-ignore
		this.render();
	}

	render(props: any): string {
		return "";
	}
}
