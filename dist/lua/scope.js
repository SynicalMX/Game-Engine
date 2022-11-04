import { LuaFunction } from './classes.js';
function clone(obj) {
    if (typeof obj === 'function')
        return () => obj();
    if (typeof obj !== 'object' || obj === null)
        return obj;
    const res = {
        call: ""
    };
    for (const property in obj) {
        if (obj.hasOwnProperty.call(property)) {
            if (typeof property === 'object' || typeof property === 'function')
                res[typeof property] = clone(obj[typeof property]);
            else
                res[property] = obj[property];
        }
    }
    if (obj instanceof LuaFunction)
        return new LuaFunction(res.call, res.toString());
    else
        return res;
}
function link(from, to) {
    for (const [property, value] of Object.entries(from)) {
        let storeOrig = value;
        let storeNew = clone(value);
        Object.defineProperty(from, property, {
            configurable: true,
            enumerable: true,
            get: () => storeOrig,
            set: function (val) {
                storeOrig = val, storeNew = val;
            }
        });
        Object.defineProperty(to, property, {
            configurable: true,
            enumerable: true,
            get: () => storeNew,
            set: function (val) {
                storeOrig = val, storeNew = val;
            }
        });
    }
}
export default class Scope {
    constructor() {
        this.globalVariables = {};
        this.localVariables = {};
        this.functions = {};
    }
    defineFunction(name, value) {
        if (this.globalVariables[name])
            this.globalVariables[name] = null;
        if (this.localVariables[name])
            this.localVariables[name] = null;
        this.functions[name] = value;
    }
    createLocalScope() {
        const scope = new Scope();
        link(this.globalVariables, scope.globalVariables);
        link(this.localVariables, scope.globalVariables);
        link(this.functions, scope.functions);
        return scope;
    }
}
