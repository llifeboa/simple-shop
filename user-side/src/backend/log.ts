export default interface Log {
	trace(...msg: any): void;
	debug(...msg: any): void;
	info(...msg: any): void;
	warn(...msg: any): void;
	error(...msg: any): void;
	fatal(...msg: any): void;
}
