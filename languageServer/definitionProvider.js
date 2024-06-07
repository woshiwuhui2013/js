// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const vscode = require("vscode");
// const vscodeLang = require("vscode-languageserver");
// const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
// const finder_1 = require("../utils/finder");
// const fs_extra_1 = require("fs-extra");
// const path = require("path");
// const langParser_1 = require("../utils/langParser");
// const fileScheme = finder_1.isWin ? 'file:\\\\' : 'file://';
// class EnterFunctionListener {
// }
// class GCLDefinitionProvider {
//     /**
//        * Provide definition for cursor position in Solidity codebase. It calculate offset from cursor position and find the
//        * most precise statement in solparse AST that surrounds the cursor. It then deduces the definition of the element based
//        * on the statement type.
//        *
//        * @param {vscode.TextDocument} document
//        * @param {vscode.Position} position
//        * @returns {(Thenable<vscode.LocationLink[]>)}
//        * @memberof GCLDefinitionProvider
//        */
//     provideDefinition(document, position) {
//         const documentText = document.getText();
//         const currentContractUri = vscode.Uri.parse(`${fileScheme}${document.uri.fsPath}`);
//         const wordRangePosition = document.getWordRangeAtPosition(position);
//         const word = document.getText(wordRangePosition);
//         const listener = new EnterFunctionListener();
//         const { currentFolder } = (0, finder_1.getCurrentActiveFileAndFolder)(document.uri);
//         const globalImportMap = new Map();
//         const promise = new Promise((resolve) => {
//             let importContractFnLocation = [];
//             let currentContractFnLocation = [];
//             // check ? import expression : expression
//             listener.enterExpression = function (ctx) {
//                 // expressionType: 4 => expression . identifier
//                 // expressionType: 3 => expression '(' functionCallArguments ')'
//                 const parentNode = ctx.parent;
//                 if (ctx.text.match(word) && ctx.expressionType === 4 && parentNode && parentNode.expressionType === 3) {
//                     const [contractExpression] = ctx.expression();
//                     const targetTree = globalImportMap.get(contractExpression?.text);
//                     if (targetTree) {
//                         const filepath = path.resolve(currentFolder, contractExpression?.text + '.gcl');
//                         if (!(0, fs_extra_1.existsSync)(filepath)) {
//                             return vscode.window.showErrorMessage(`${filepath} is not found`);
//                         }
//                         const targetContractUri = vscode.Uri.parse(fileScheme + filepath);
//                         const listener = new EnterFunctionListener();
//                         listener.enterFunctionDeclaration = function (ctx) {
//                             // match function name
//                             const ctxIdentifier = ctx.identifier();
//                             if (ctxIdentifier.text === word) {
//                                 const { startPostion, endPostion } = (0, langParser_1.getPostionByIdentifierContext)(ctxIdentifier);
//                                 importContractFnLocation.push({
//                                     targetUri: targetContractUri,
//                                     targetRange: vscodeLang.Range.create(startPostion, endPostion)
//                                 });
//                             }
//                         };
//                         // dfs with walker
//                         ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, targetTree);
//                     }
//                 }
//             };
//             // cache importDirective
//             listener.enterImportDirective = async function (ctx) {
//                 const [ctxContract, ctxFunction] = ctx.identifier();
//                 const filepath = path.resolve(currentFolder, ctxContract.text + '.gcl');
//                 if ((0, fs_extra_1.existsSync)(filepath)) {
//                     const importDocumentText = (0, fs_extra_1.readFileSync)(filepath);
//                     const tree = (0, langParser_1.default)(importDocumentText.toString());
//                     // set tree to import map for expression finder
//                     globalImportMap.set(ctxContract.text, tree);
//                 }
//                 // todo ctx.AsKeyword()
//             };
//             // find function location
//             listener.enterFunctionDeclaration = function (ctx) {
//                 // match function name
//                 const ctxIdentifier = ctx.identifier();
//                 if (ctxIdentifier.text === word) {
//                     const { startPostion, endPostion } = (0, langParser_1.getPostionByIdentifierContext)(ctxIdentifier);
//                     currentContractFnLocation.push({
//                         targetUri: currentContractUri,
//                         targetRange: vscodeLang.Range.create(startPostion, endPostion)
//                     });
//                 }
//             };
//             // dfs end
//             listener.exitGCLSource = () => {
//                 if (importContractFnLocation.length) {
//                     resolve(importContractFnLocation);
//                 }
//                 else {
//                     resolve(currentContractFnLocation);
//                 }
//             };
//         });
//         try {
//             const tree = (0, langParser_1.default)(documentText);
//             // dfs with walker
//             ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
//         }
//         catch (err) {
//             console.log(err);
//         }
//         return promise;
//     }
// }
// exports.default = GCLDefinitionProvider;
// //# sourceMappingURL=definitionProvider.js.map