import { Keyword, Token } from "./classes.js";
import { KeywordType, TokenType } from "./tokens.js";

export class Lexer {
   public lex(file: string) {
        let pos = 0;
        let tokens: Token[]

        while (pos < file.length) {
            const lookahead = pos + 1;

            if (file[pos].match(/\(/g) && file[lookahead].match(/\(/g)) {
                const back = pos
                while (file[pos] != ' ') {
                    if (!file[pos].match(/\(/g)) {
                        pos = back
                        break
                    }
					pos += 1
                }

				for (let i = 0; i < Object.keys(KeywordType).length;) {
					const keyword = KeywordType[i]
                    console.log(keyword)
					tokens.push(new Keyword(KeywordType.AND))
				}
            }
        }
        // Loop through tokens
        for (const token of tokens) {
            console.log(token)
        }
   }
}
