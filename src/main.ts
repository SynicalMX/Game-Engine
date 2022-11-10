import { Lexer } from "./lua/lexer.js"
import { fileURLToPath } from 'url';
import * as path from 'path';
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let contents = ''
fs.readFile(path.join(__dirname, '../source.lua'), 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  contents = data
  console.log(data)
});

console.log("Lexing lua file.")
const lexer = new Lexer()
lexer.lex(contents)