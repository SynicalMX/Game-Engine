import { Keyword, Token } from "./classes";
import { KeywordType, TokenType } from "./tokens";

export class Lexer {
   public lex(file: string) {
        var pos = 0;
        var tokens: Token[]

        while (pos < file.length) {
            const lookahead = pos + 1;

            if (file[pos].match(/\(/g) && file[lookahead].match(/\(/g)) {
                const back = pos
                var text = ""
                while (file[pos] != ' ') {
                    if (file[pos].match(/\(/g)) {
                        text += file[pos]
                    } else {
                        break
                    }
					pos += 1
                }

				for (let i = 0; i < Object.keys(KeywordType).length;) {
					const keyword = Object.keys(KeywordType)[i]
					if (text === keyword) {
						switch (keyword) {
							case:
								
						}
					}
				}
            }
        }
   }
}
