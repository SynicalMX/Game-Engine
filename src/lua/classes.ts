/**
 * classes.ts
 * This file contains necessary classes that allow the interpreter to function.
 */

import {TokenType, KeywordType} from "./tokens.js"

export class Token {
	public TokenType: TokenType
	
	constructor(self, TokenType: TokenType){
		self.TokenType = TokenType
	}
}

export class Keyword extends Token {
	public KeywordType: KeywordType

	constructor(self, KeywordType: KeywordType) {
		super(self, TokenType.KEYWORD)
		self.KeywordType = KeywordType
	}
}