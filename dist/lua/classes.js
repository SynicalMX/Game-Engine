/**
 * classes.ts
 * This file contains necessary classes that allow the interpreter to function.
 */
import { TokenType } from "./tokens.js";
export class Token {
    constructor(self, TokenType) {
        self.TokenType = TokenType;
    }
}
export class Keyword extends Token {
    constructor(self, KeywordType) {
        super(self, TokenType.KEYWORD);
        self.KeywordType = KeywordType;
    }
}
