"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const LangLexer_1 = require("./languageServer/Lang/LangLexer");
const LangParser_1 = require("./languageServer/Lang/LangParser");
// const vscode = require("vscode");
const GCLStrParser = (str) => {
    const inputStream = new antlr4ts_1.ANTLRInputStream(str);
    const lexer = new LangLexer_1.GCLLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new LangParser_1.GCLParser(tokenStream);
    return parser.GCLSource();
};
// const getPostionByIdentifierContext = (identifier) => {
//     const ctxIdentifierStart = identifier.start;
//     const startLine = ctxIdentifierStart.line - 1;
//     const charStartLine = ctxIdentifierStart.charPositionInLine;
//     const startPostion = new vscode.Position(startLine, charStartLine);
//     const endPostion = new vscode.Position(startLine, charStartLine + identifier.text.length);
//     return { startPostion, endPostion };
// };
// exports.getPostionByIdentifierContext = getPostionByIdentifierContext;
exports.default = GCLStrParser;
//# sourceMappingURL=langParser.js.map