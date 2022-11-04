import lex from "./lexer.js";
import parse from "./parser.js";
import interpret from "./interpeter.js";
import * as fs from "fs";

export function runScript(file) {
	const code = fs.readFileSync(file).toString();
	const tokens = lex(code);
	const trees = parse(tokens);
	const output = interpret(trees, null);
	console.log('\x1b[32mLUA: => ' + output + '\x1b[0m');
}
