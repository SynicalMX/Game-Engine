import * as lua from "./lua/lua.js";
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

lua.runScript(path.resolve(__dirname + "\\..\\source.lua"));
