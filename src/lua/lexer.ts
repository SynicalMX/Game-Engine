import { Token } from "./classes";

export class Lexer {
   public lex(file: string) {
        var tokens = Array<Token>;
        var pos = 0;

        while (pos < file.length) {
            const tokenStartPos = pos;
            const lookAhead = file[pos + 1];

            if (lookAhead === ' ') {
                pos += 1;
            }
        }
   }
}