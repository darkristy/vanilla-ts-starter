/* eslint-disable @typescript-eslint/no-empty-interface */
declare namespace JSX {
	type Element = HTMLElement;
	interface ElementClass {
		render(): any;
	}
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}
