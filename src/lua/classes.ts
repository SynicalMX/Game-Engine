import { runScript } from "./lua";

export class Return extends Error {
	public value = null;

	constructor(value) {
		super('Illegal return statement'); //if user tries to return outside function
		this.name = 'LuaError';
		this.value = value;
	}
}
export class LuaFunction {
	private call
	private toString

	constructor(call, toString = '<Function>') {
		this.call = call;
		this.toString = toString;
	}
}
export class LuaScript {
	private file

	constructor(file) {
		this.file = file
	}

	execute() {
		runScript(this.file)
	}
}
