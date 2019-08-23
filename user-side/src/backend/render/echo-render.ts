import Render from '.';

export default class EchoRender implements Render {
	async getPage(url: string): Promise<string> {
		return url;
	}
}
