/**
 * classes.ts
 * This file contains necessary classes that allow the interpreter to function.
 */
import { TokenType } from "./tokens.js";
export class Token {
    constructor(TokenType) {
        this.TokenType = TokenType;
    }
}
export class Keyword extends Token {
    constructor(KeywordType) {
        super(TokenType.KEYWORD);
        this.KeywordType = KeywordType;
    }
}
