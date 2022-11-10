/**
 * tokens.ts
 * This file contains all the names of the tokens.
 */
export var TokenType;
(function (TokenType) {
    TokenType[TokenType["IDENTIFIER"] = 0] = "IDENTIFIER";
    TokenType[TokenType["OPEN_PAREN"] = 1] = "OPEN_PAREN";
    TokenType[TokenType["CLOSE_PAREN"] = 2] = "CLOSE_PAREN";
    TokenType[TokenType["OPEN_SQUARE"] = 3] = "OPEN_SQUARE";
    TokenType[TokenType["CLOSE_SQUARE"] = 4] = "CLOSE_SQUARE";
    TokenType[TokenType["KEYWORD"] = 5] = "KEYWORD";
    TokenType[TokenType["NUM"] = 6] = "NUM";
    TokenType[TokenType["PLUS"] = 7] = "PLUS";
    TokenType[TokenType["TIMES"] = 8] = "TIMES";
    TokenType[TokenType["TRUE"] = 9] = "TRUE";
    TokenType[TokenType["FALSE"] = 10] = "FALSE";
    TokenType[TokenType["EOF"] = 11] = "EOF";
})(TokenType || (TokenType = {}));
export var KeywordType;
(function (KeywordType) {
    KeywordType["AND"] = "and";
    KeywordType["END"] = "end";
    KeywordType["IN"] = "in";
    KeywordType["REPEAT"] = "repeat";
    KeywordType["BREAK"] = "break";
    KeywordType["LOCAL"] = "local";
    KeywordType["RETURN"] = "return";
    KeywordType["DO"] = "do";
    KeywordType["FOR"] = "for";
    KeywordType["NIL"] = "nil";
    KeywordType["THEN"] = "then";
    KeywordType["ELSE"] = "else";
    KeywordType["FUNCTION"] = "function";
    KeywordType["NOT"] = "not";
    KeywordType["ELSEIF"] = "elseif";
    KeywordType["IF"] = "if";
    KeywordType["OR"] = "or";
    KeywordType["UNTIL"] = "until";
    KeywordType["WHILE"] = "while";
})(KeywordType || (KeywordType = {}));
