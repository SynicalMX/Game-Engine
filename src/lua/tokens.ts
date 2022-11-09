/**
 * tokens.ts
 * This file contains all the names of the tokens.
 */

export enum TokenType {
	IDENTIFIER,
	OPEN_PAREN,
	CLOSE_PAREN,
	OPEN_SQUARE,
	CLOSE_SQUARE,
	KEYWORD,
	NUM,
	PLUS,
	TIMES,
	TRUE,
	FALSE,
	EOF
}

export enum KeywordType {
	AND = "and",
	END = "end",
	IN = "in",
	REPEAT = "repeat",
	BREAK = "break",
	LOCAL = "local",
	RETURN = "return",
	DO = "do",
	FOR = "for",
	NIL = "nil",
	THEN = "then",
	ELSE = "else",
	FUNCTION = "function",
	NOT = "not",
	ELSEIF = "elseif",
	IF = "if",
	OR = "or",
	UNTIL = "until",
	WHILE = "while"
}
