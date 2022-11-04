import { runScript } from "./lua";
export class Return extends Error {
    constructor(value) {
        super('Illegal return statement'); //if user tries to return outside function
        this.value = null;
        this.name = 'LuaError';
        this.value = value;
    }
}
export class LuaFunction {
    constructor(call, toString = '<Function>') {
        this.call = call;
        this.toString = toString;
    }
}
export class LuaScript {
    constructor(file) {
        this.file = file;
    }
    execute() {
        runScript(this.file);
    }
}
