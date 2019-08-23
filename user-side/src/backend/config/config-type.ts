export enum mode {
	development = 1,
	production,
}

export type TConfig = {
	host?: string;
	port?: string;
	mode?: mode;
};
