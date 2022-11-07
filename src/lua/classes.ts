/**
 * classes.ts
 * This file contains necessary classes that allow the interpreter to function.
 */

import {TokenType, KeywordType} from "./tokens.js"

export class Token {
	public TokenType: TokenType
	public Text: string
	public startPos: number
	
	constructor(TokenType: TokenType){
		this.TokenType = TokenType
	}
}

export class Keyword extends Token {
	public KeywordType: KeywordType

	constructor(self, KeywordType: KeywordType) {
		super(TokenType.KEYWORD)
		self.KeywordType = KeywordType
	}
}