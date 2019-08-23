export default interface Render {
	getPage(url: string): Promise<string>;
}
