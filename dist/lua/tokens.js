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
    TokenType[TokenType["PLUS"] = 6] = "PLUS";
    TokenType[TokenType["MINUS"] = 7] = "MINUS";
    TokenType[TokenType["DIVIDE"] = 8] = "DIVIDE";
    TokenType[TokenType["SUBTRACT"] = 9] = "SUBTRACT";
})(TokenType || (TokenType = {}));
export var KeywordType;
(function (KeywordType) {
    KeywordType[KeywordType["AND"] = 0] = "AND";
    KeywordType[KeywordType["END"] = 1] = "END";
    KeywordType[KeywordType["IN"] = 2] = "IN";
    KeywordType[KeywordType["REPEAT"] = 3] = "REPEAT";
    KeywordType[KeywordType["BREAK"] = 4] = "BREAK";
    KeywordType[KeywordType["FALSE"] = 5] = "FALSE";
    KeywordType[KeywordType["LOCAL"] = 6] = "LOCAL";
    KeywordType[KeywordType["RETURN"] = 7] = "RETURN";
    KeywordType[KeywordType["DO"] = 8] = "DO";
    KeywordType[KeywordType["FOR"] = 9] = "FOR";
    KeywordType[KeywordType["NIL"] = 10] = "NIL";
    KeywordType[KeywordType["THEN"] = 11] = "THEN";
    KeywordType[KeywordType["ELSE"] = 12] = "ELSE";
    KeywordType[KeywordType["FUNCTION"] = 13] = "FUNCTION";
    KeywordType[KeywordType["NOT"] = 14] = "NOT";
    KeywordType[KeywordType["TRUE"] = 15] = "TRUE";
    KeywordType[KeywordType["ELSEIF"] = 16] = "ELSEIF";
    KeywordType[KeywordType["IF"] = 17] = "IF";
    KeywordType[KeywordType["OR"] = 18] = "OR";
    KeywordType[KeywordType["UNTIL"] = 19] = "UNTIL";
    KeywordType[KeywordType["WHILE"] = 20] = "WHILE";
})(KeywordType || (KeywordType = {}));
