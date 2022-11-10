import { KeywordType } from "./tokens.js";
export class Lexer {
    lex(file) {
        let pos = 0;
        // let tokens: Token[]
        while (pos < file.length) {
            const lookahead = pos + 1;
            if (file[pos].match(/\(/g) && file[lookahead].match(/\(/g)) {
                const back = pos;
                let text = '';
                while (file[pos] != ' ') {
                    if (file[pos].match(/\(/g)) {
                        text += file[pos];
                    }
                    else {
                        pos = back;
                        break;
                    }
                    pos += 1;
                }
                let idx;
                Object.values(KeywordType).forEach((key, index) => {
                    if (text === key) {
                        idx = index;
                    }
                });
                Object.keys(KeywordType).forEach((key, index) => {
                    if (index == idx) {
                        console.log(KeywordType[index]);
                    }
                });
            }
        }
        //Loop through tokens
    }
}
