import { Component } from "./component";

export class View extends Component {
	params: any;
	styles?: string;
	styleTag: HTMLStyleElement;

	constructor(params: any, title: string, styles?: string) {
		super();
		this.params = params;
		this.styles = styles;
		document.title = title;

		this.styleTag = document.createElement("style");
		this.styleTag.type = "text/css";
		document.head.appendChild(this.styleTag);
	}

	afteRender(): any {
		return null;
	}
}
