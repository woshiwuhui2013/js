"use strict";
// Generated from ./src/languageServer/GCL/GCL.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalVariableDeclarationContext = exports.VariableDeclarationStatementContext = exports.ReturnStatementContext = exports.BreakStatementContext = exports.ContinueStatementContext = exports.DoWhileStatementContext = exports.ForStatementContext = exports.RelayLambdaParameterContext = exports.RelayLambdaDefinitionContext = exports.RelayTypeContext = exports.RelayStatementContext = exports.WhileStatementContext = exports.ElseIfWithBlockContext = exports.ElseWithBlockContext = exports.IfWithBlockContext = exports.IfStatementContext = exports.ExpressionStatementContext = exports.StatementContext = exports.UserBlockStatementContext = exports.UserDefinedTypeNameContext = exports.ArrayTypeNameContext = exports.MapTypeNameContext = exports.MapKeyTypeNameContext = exports.BuiltInContainerTypeNameContext = exports.FundamentalTypeNameContext = exports.TypeNameContext = exports.TypeNameOrAutoContext = exports.VariableDeclarationContext = exports.AccessSpecifierContext = exports.FunctionParameterContext = exports.FunctionParameterListContext = exports.FunctionReturnTypeNameContext = exports.FunctionDeclarationContext = exports.FunctionDefinitionContext = exports.EnumDefinitionContext = exports.InterfaceDefinitionContext = exports.StructDefinitionContext = exports.ScopeContext = exports.ConstVariableDeclarationContext = exports.StateVariableDeclarationContext = exports.ContractPartContext = exports.InterfaceRefContext = exports.ContractDefinitionContext = exports.DoxygenContext = exports.AnnotationItemContext = exports.AnnotationContext = exports.ImportDirectiveContext = exports.DirectiveContext = exports.GCLSourceContext = exports.GCLParser = void 0;
exports.IdentifierContext = exports.FunctionCallArgumentsContext = exports.PrimaryExpressionContext = exports.ExpressionContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class GCLParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(GCLParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return GCLParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "GCL.g4"; }
    // @Override
    get ruleNames() { return GCLParser.ruleNames; }
    // @Override
    get serializedATN() { return GCLParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    GCLSource() {
        let _localctx = new GCLSourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, GCLParser.RULE_GCLSource);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GCLParser.ImportKeyword) {
                    {
                        {
                            this.state = 106;
                            this.directive();
                        }
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 112;
                this.contractDefinition();
                this.state = 113;
                this.match(GCLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    directive() {
        let _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, GCLParser.RULE_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.importDirective();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importDirective() {
        let _localctx = new ImportDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, GCLParser.RULE_importDirective);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(GCLParser.ImportKeyword);
                this.state = 121;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 118;
                            _localctx._dAppName = this.identifier();
                            this.state = 119;
                            this.match(GCLParser.T__0);
                        }
                        break;
                }
                this.state = 123;
                _localctx._contractName = this.identifier();
                this.state = 126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.AsKeyword) {
                    {
                        this.state = 124;
                        this.match(GCLParser.AsKeyword);
                        this.state = 125;
                        _localctx._alias = this.identifier();
                    }
                }
                this.state = 128;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation() {
        let _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, GCLParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 130;
                this.match(GCLParser.T__2);
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.Identifier) {
                    {
                        this.state = 131;
                        this.annotationItem();
                    }
                }
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GCLParser.T__3) {
                    {
                        {
                            this.state = 134;
                            this.match(GCLParser.T__3);
                            this.state = 135;
                            this.annotationItem();
                        }
                    }
                    this.state = 140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 141;
                this.match(GCLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationItem() {
        let _localctx = new AnnotationItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, GCLParser.RULE_annotationItem);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.identifier();
                this.state = 144;
                this.match(GCLParser.T__5);
                this.state = 145;
                _la = this._input.LA(1);
                if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (GCLParser.BooleanLiteral - 85)) | (1 << (GCLParser.DecimalFloatLiteral - 85)) | (1 << (GCLParser.DecimalIntegerLiteral - 85)) | (1 << (GCLParser.HexIntegerLiteral - 85)) | (1 << (GCLParser.StringLiteral - 85)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    doxygen() {
        let _localctx = new DoxygenContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, GCLParser.RULE_doxygen);
        let _la;
        try {
            this.state = 153;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GCLParser.DoxygenSingle:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 147;
                                    this.match(GCLParser.DoxygenSingle);
                                }
                            }
                            this.state = 150;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === GCLParser.DoxygenSingle);
                    }
                    break;
                case GCLParser.DoxygenMulti:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 152;
                        this.match(GCLParser.DoxygenMulti);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractDefinition() {
        let _localctx = new ContractDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, GCLParser.RULE_contractDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.DoxygenSingle || _la === GCLParser.DoxygenMulti) {
                    {
                        this.state = 155;
                        this.doxygen();
                    }
                }
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__2) {
                    {
                        this.state = 158;
                        this.annotation();
                    }
                }
                this.state = 161;
                this.match(GCLParser.ContractKeyword);
                this.state = 162;
                this.identifier();
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ImplementsKeyword) {
                    {
                        this.state = 163;
                        this.match(GCLParser.ImplementsKeyword);
                        this.state = 164;
                        this.interfaceRef();
                        this.state = 169;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GCLParser.T__3) {
                            {
                                {
                                    this.state = 165;
                                    this.match(GCLParser.T__3);
                                    this.state = 166;
                                    this.interfaceRef();
                                }
                            }
                            this.state = 171;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 174;
                this.match(GCLParser.T__6);
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__2) | (1 << GCLParser.T__8) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (GCLParser.DoxygenSingle - 56)) | (1 << (GCLParser.DoxygenMulti - 56)) | (1 << (GCLParser.ConstantKeyword - 56)) | (1 << (GCLParser.AddressKeyword - 56)) | (1 << (GCLParser.StructKeyword - 56)) | (1 << (GCLParser.EnumKeyword - 56)) | (1 << (GCLParser.FunctionKeyword - 56)) | (1 << (GCLParser.InterfaceKeyword - 56)) | (1 << (GCLParser.FloatType - 56)) | (1 << (GCLParser.IntType - 56)) | (1 << (GCLParser.UintType - 56)))) !== 0) || _la === GCLParser.Identifier) {
                    {
                        {
                            this.state = 175;
                            this.contractPart();
                        }
                    }
                    this.state = 180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 181;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceRef() {
        let _localctx = new InterfaceRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, GCLParser.RULE_interfaceRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 183;
                            _localctx._contractName = this.identifier();
                            this.state = 184;
                            this.match(GCLParser.T__0);
                        }
                        break;
                }
                this.state = 188;
                _localctx._interfaceName = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractPart() {
        let _localctx = new ContractPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, GCLParser.RULE_contractPart);
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 190;
                        this.stateVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.constVariableDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 192;
                        this.structDefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 193;
                        this.enumDefinition();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 194;
                        this.interfaceDefinition();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 195;
                        this.functionDefinition();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateVariableDeclaration() {
        let _localctx = new StateVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, GCLParser.RULE_stateVariableDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.DoxygenSingle || _la === GCLParser.DoxygenMulti) {
                    {
                        this.state = 198;
                        this.doxygen();
                    }
                }
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__2) {
                    {
                        this.state = 201;
                        this.annotation();
                    }
                }
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__8) {
                    {
                        this.state = 204;
                        this.scope();
                    }
                }
                this.state = 207;
                this.typeName();
                this.state = 208;
                this.identifier();
                this.state = 209;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constVariableDeclaration() {
        let _localctx = new ConstVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, GCLParser.RULE_constVariableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(GCLParser.ConstantKeyword);
                this.state = 212;
                this.typeName();
                this.state = 213;
                this.identifier();
                this.state = 214;
                this.match(GCLParser.T__5);
                this.state = 215;
                this.expression(0);
                this.state = 216;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    scope() {
        let _localctx = new ScopeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, GCLParser.RULE_scope);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(GCLParser.T__8);
                this.state = 219;
                _la = this._input.LA(1);
                if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (GCLParser.ShardKeyword - 65)) | (1 << (GCLParser.GlobalKeyword - 65)) | (1 << (GCLParser.AddressKeyword - 65)) | (1 << (GCLParser.UintType - 65)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structDefinition() {
        let _localctx = new StructDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, GCLParser.RULE_structDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.DoxygenSingle || _la === GCLParser.DoxygenMulti) {
                    {
                        this.state = 221;
                        this.doxygen();
                    }
                }
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__2) {
                    {
                        this.state = 224;
                        this.annotation();
                    }
                }
                this.state = 227;
                this.match(GCLParser.StructKeyword);
                this.state = 228;
                this.identifier();
                this.state = 229;
                this.match(GCLParser.T__6);
                this.state = 235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)) | (1 << (GCLParser.Identifier - 68)))) !== 0)) {
                    {
                        {
                            this.state = 230;
                            this.variableDeclaration();
                            this.state = 231;
                            this.match(GCLParser.T__1);
                        }
                    }
                    this.state = 237;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 238;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceDefinition() {
        let _localctx = new InterfaceDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, GCLParser.RULE_interfaceDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(GCLParser.InterfaceKeyword);
                this.state = 241;
                this.identifier();
                this.state = 242;
                this.match(GCLParser.T__6);
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GCLParser.T__2 || _la === GCLParser.T__8 || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (GCLParser.DoxygenSingle - 56)) | (1 << (GCLParser.DoxygenMulti - 56)) | (1 << (GCLParser.FunctionKeyword - 56)))) !== 0)) {
                    {
                        {
                            this.state = 243;
                            this.functionDeclaration();
                            this.state = 244;
                            this.match(GCLParser.T__1);
                        }
                    }
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 251;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumDefinition() {
        let _localctx = new EnumDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, GCLParser.RULE_enumDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.DoxygenSingle || _la === GCLParser.DoxygenMulti) {
                    {
                        this.state = 253;
                        this.doxygen();
                    }
                }
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__2) {
                    {
                        this.state = 256;
                        this.annotation();
                    }
                }
                this.state = 259;
                this.match(GCLParser.EnumKeyword);
                this.state = 260;
                this.identifier();
                this.state = 261;
                this.match(GCLParser.T__6);
                this.state = 263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.Identifier) {
                    {
                        this.state = 262;
                        this.identifier();
                    }
                }
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GCLParser.T__3) {
                    {
                        {
                            this.state = 265;
                            this.match(GCLParser.T__3);
                            this.state = 266;
                            this.identifier();
                        }
                    }
                    this.state = 271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 272;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDefinition() {
        let _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, GCLParser.RULE_functionDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.functionDeclaration();
                this.state = 275;
                this.match(GCLParser.T__6);
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 276;
                            this.statement();
                        }
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 282;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDeclaration() {
        let _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, GCLParser.RULE_functionDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.DoxygenSingle || _la === GCLParser.DoxygenMulti) {
                    {
                        this.state = 284;
                        this.doxygen();
                    }
                }
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__2) {
                    {
                        this.state = 287;
                        this.annotation();
                    }
                }
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__8) {
                    {
                        this.state = 290;
                        this.scope();
                    }
                }
                this.state = 293;
                this.match(GCLParser.FunctionKeyword);
                this.state = 295;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 294;
                            this.functionReturnTypeName();
                        }
                        break;
                }
                this.state = 297;
                this.identifier();
                this.state = 298;
                this.match(GCLParser.T__9);
                this.state = 299;
                this.functionParameterList();
                this.state = 300;
                this.match(GCLParser.T__10);
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GCLParser.PublicKeyword || _la === GCLParser.ExportKeyword) {
                    {
                        {
                            this.state = 301;
                            this.accessSpecifier();
                        }
                    }
                    this.state = 306;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ConstantKeyword) {
                    {
                        this.state = 307;
                        this.match(GCLParser.ConstantKeyword);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionReturnTypeName() {
        let _localctx = new FunctionReturnTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, GCLParser.RULE_functionReturnTypeName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ConstantKeyword) {
                    {
                        this.state = 310;
                        this.match(GCLParser.ConstantKeyword);
                    }
                }
                this.state = 313;
                this.typeName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionParameterList() {
        let _localctx = new FunctionParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, GCLParser.RULE_functionParameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (GCLParser.ConstantKeyword - 59)) | (1 << (GCLParser.AddressKeyword - 59)) | (1 << (GCLParser.FloatType - 59)) | (1 << (GCLParser.IntType - 59)) | (1 << (GCLParser.UintType - 59)))) !== 0) || _la === GCLParser.Identifier) {
                    {
                        this.state = 315;
                        this.functionParameter();
                        this.state = 320;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GCLParser.T__3) {
                            {
                                {
                                    this.state = 316;
                                    this.match(GCLParser.T__3);
                                    this.state = 317;
                                    this.functionParameter();
                                }
                            }
                            this.state = 322;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionParameter() {
        let _localctx = new FunctionParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, GCLParser.RULE_functionParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ConstantKeyword) {
                    {
                        this.state = 325;
                        this.match(GCLParser.ConstantKeyword);
                    }
                }
                this.state = 328;
                this.typeName();
                this.state = 329;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    accessSpecifier() {
        let _localctx = new AccessSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, GCLParser.RULE_accessSpecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 331;
                _la = this._input.LA(1);
                if (!(_la === GCLParser.PublicKeyword || _la === GCLParser.ExportKeyword)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaration() {
        let _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, GCLParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.typeName();
                this.state = 334;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeNameOrAuto() {
        let _localctx = new TypeNameOrAutoContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, GCLParser.RULE_typeNameOrAuto);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ConstantKeyword) {
                    {
                        this.state = 336;
                        this.match(GCLParser.ConstantKeyword);
                    }
                }
                this.state = 341;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case GCLParser.T__11:
                    case GCLParser.T__12:
                    case GCLParser.T__13:
                    case GCLParser.T__14:
                    case GCLParser.T__15:
                    case GCLParser.T__16:
                    case GCLParser.T__19:
                    case GCLParser.AddressKeyword:
                    case GCLParser.FloatType:
                    case GCLParser.IntType:
                    case GCLParser.UintType:
                    case GCLParser.Identifier:
                        {
                            this.state = 339;
                            this.typeName();
                        }
                        break;
                    case GCLParser.AutoKeyword:
                        {
                            this.state = 340;
                            this.match(GCLParser.AutoKeyword);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeName() {
        let _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, GCLParser.RULE_typeName);
        try {
            this.state = 346;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GCLParser.T__11:
                case GCLParser.T__12:
                case GCLParser.T__13:
                case GCLParser.T__14:
                case GCLParser.T__15:
                case GCLParser.AddressKeyword:
                case GCLParser.FloatType:
                case GCLParser.IntType:
                case GCLParser.UintType:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 343;
                        this.fundamentalTypeName();
                    }
                    break;
                case GCLParser.T__16:
                case GCLParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 344;
                        this.builtInContainerTypeName();
                    }
                    break;
                case GCLParser.Identifier:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 345;
                        this.userDefinedTypeName();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fundamentalTypeName() {
        let _localctx = new FundamentalTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, GCLParser.RULE_fundamentalTypeName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    builtInContainerTypeName() {
        let _localctx = new BuiltInContainerTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, GCLParser.RULE_builtInContainerTypeName);
        try {
            this.state = 352;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GCLParser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 350;
                        this.mapTypeName();
                    }
                    break;
                case GCLParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 351;
                        this.arrayTypeName();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapKeyTypeName() {
        let _localctx = new MapKeyTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, GCLParser.RULE_mapKeyTypeName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__11) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapTypeName() {
        let _localctx = new MapTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, GCLParser.RULE_mapTypeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.match(GCLParser.T__16);
                this.state = 357;
                this.match(GCLParser.T__17);
                this.state = 358;
                this.mapKeyTypeName();
                this.state = 359;
                this.match(GCLParser.T__3);
                this.state = 360;
                this.typeName();
                this.state = 361;
                this.match(GCLParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayTypeName() {
        let _localctx = new ArrayTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, GCLParser.RULE_arrayTypeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(GCLParser.T__19);
                this.state = 364;
                this.match(GCLParser.T__17);
                this.state = 365;
                this.typeName();
                this.state = 366;
                this.match(GCLParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    userDefinedTypeName() {
        let _localctx = new UserDefinedTypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, GCLParser.RULE_userDefinedTypeName);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 368;
                                this.identifier();
                                this.state = 369;
                                this.match(GCLParser.T__0);
                            }
                        }
                    }
                    this.state = 375;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                }
                this.state = 376;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    userBlockStatement() {
        let _localctx = new UserBlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, GCLParser.RULE_userBlockStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                this.match(GCLParser.T__6);
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 379;
                            this.statement();
                        }
                    }
                    this.state = 384;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 385;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, GCLParser.RULE_statement);
        try {
            this.state = 398;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 387;
                        this.ifStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 388;
                        this.whileStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 389;
                        this.forStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 390;
                        this.userBlockStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 391;
                        this.doWhileStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 392;
                        this.continueStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 393;
                        this.breakStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 394;
                        this.returnStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 395;
                        this.relayStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 396;
                        this.variableDeclarationStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 397;
                        this.expressionStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, GCLParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                this.expression(0);
                this.state = 401;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifStatement() {
        let _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, GCLParser.RULE_ifStatement);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.ifWithBlock();
                this.state = 407;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 404;
                                this.elseIfWithBlock();
                            }
                        }
                    }
                    this.state = 409;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                }
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ElseKeyword) {
                    {
                        this.state = 410;
                        this.elseWithBlock();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifWithBlock() {
        let _localctx = new IfWithBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, GCLParser.RULE_ifWithBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 413;
                this.match(GCLParser.IfKeyword);
                this.state = 414;
                this.match(GCLParser.T__9);
                this.state = 415;
                this.expression(0);
                this.state = 416;
                this.match(GCLParser.T__10);
                this.state = 417;
                this.match(GCLParser.T__6);
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 418;
                            this.statement();
                        }
                    }
                    this.state = 423;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 424;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseWithBlock() {
        let _localctx = new ElseWithBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, GCLParser.RULE_elseWithBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this.match(GCLParser.ElseKeyword);
                this.state = 427;
                this.match(GCLParser.T__6);
                this.state = 431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 428;
                            this.statement();
                        }
                    }
                    this.state = 433;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 434;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseIfWithBlock() {
        let _localctx = new ElseIfWithBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, GCLParser.RULE_elseIfWithBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.match(GCLParser.ElseKeyword);
                this.state = 437;
                this.match(GCLParser.IfKeyword);
                this.state = 438;
                this.match(GCLParser.T__9);
                this.state = 439;
                this.expression(0);
                this.state = 440;
                this.match(GCLParser.T__10);
                this.state = 441;
                this.match(GCLParser.T__6);
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 442;
                            this.statement();
                        }
                    }
                    this.state = 447;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 448;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whileStatement() {
        let _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, GCLParser.RULE_whileStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.match(GCLParser.T__20);
                this.state = 451;
                this.match(GCLParser.T__9);
                this.state = 452;
                this.expression(0);
                this.state = 453;
                this.match(GCLParser.T__10);
                this.state = 454;
                this.match(GCLParser.T__6);
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 455;
                            this.statement();
                        }
                    }
                    this.state = 460;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 461;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relayStatement() {
        let _localctx = new RelayStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, GCLParser.RULE_relayStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.match(GCLParser.RelayKeyword);
                this.state = 464;
                this.match(GCLParser.T__8);
                this.state = 465;
                this.relayType();
                this.state = 473;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case GCLParser.Identifier:
                        {
                            {
                                this.state = 466;
                                this.identifier();
                                this.state = 467;
                                this.match(GCLParser.T__9);
                                this.state = 468;
                                this.functionCallArguments();
                                this.state = 469;
                                this.match(GCLParser.T__10);
                                this.state = 470;
                                this.match(GCLParser.T__1);
                            }
                        }
                        break;
                    case GCLParser.T__9:
                        {
                            this.state = 472;
                            this.relayLambdaDefinition();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relayType() {
        let _localctx = new RelayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, GCLParser.RULE_relayType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case GCLParser.T__9:
                    case GCLParser.T__11:
                    case GCLParser.T__12:
                    case GCLParser.T__13:
                    case GCLParser.T__14:
                    case GCLParser.T__15:
                    case GCLParser.T__16:
                    case GCLParser.T__19:
                    case GCLParser.T__25:
                    case GCLParser.T__26:
                    case GCLParser.T__27:
                    case GCLParser.T__28:
                    case GCLParser.T__29:
                    case GCLParser.T__30:
                    case GCLParser.AddressKeyword:
                    case GCLParser.FloatType:
                    case GCLParser.IntType:
                    case GCLParser.UintType:
                    case GCLParser.BooleanLiteral:
                    case GCLParser.DecimalFloatLiteral:
                    case GCLParser.DecimalIntegerLiteral:
                    case GCLParser.AddressLiteral:
                    case GCLParser.HashLiteral:
                    case GCLParser.HexIntegerLiteral:
                    case GCLParser.DecimalBigIntegerLiteral:
                    case GCLParser.HexBigIntegerLiteral:
                    case GCLParser.Identifier:
                    case GCLParser.StringLiteral:
                        {
                            this.state = 475;
                            this.expression(0);
                        }
                        break;
                    case GCLParser.ShardsKeyword:
                        {
                            this.state = 476;
                            this.match(GCLParser.ShardsKeyword);
                        }
                        break;
                    case GCLParser.GlobalKeyword:
                        {
                            this.state = 477;
                            this.match(GCLParser.GlobalKeyword);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relayLambdaDefinition() {
        let _localctx = new RelayLambdaDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, GCLParser.RULE_relayLambdaDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 480;
                this.match(GCLParser.T__9);
                this.state = 489;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__21))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (GCLParser.ConstantKeyword - 59)) | (1 << (GCLParser.AddressKeyword - 59)) | (1 << (GCLParser.AutoKeyword - 59)) | (1 << (GCLParser.FloatType - 59)) | (1 << (GCLParser.IntType - 59)) | (1 << (GCLParser.UintType - 59)))) !== 0) || _la === GCLParser.Identifier) {
                    {
                        this.state = 481;
                        this.relayLambdaParameter();
                        this.state = 486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GCLParser.T__3) {
                            {
                                {
                                    this.state = 482;
                                    this.match(GCLParser.T__3);
                                    this.state = 483;
                                    this.relayLambdaParameter();
                                }
                            }
                            this.state = 488;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 491;
                this.match(GCLParser.T__10);
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.ConstantKeyword) {
                    {
                        this.state = 492;
                        this.match(GCLParser.ConstantKeyword);
                    }
                }
                this.state = 495;
                this.match(GCLParser.T__6);
                this.state = 499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 496;
                            this.statement();
                        }
                    }
                    this.state = 501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 502;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relayLambdaParameter() {
        let _localctx = new RelayLambdaParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, GCLParser.RULE_relayLambdaParameter);
        try {
            this.state = 511;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GCLParser.T__11:
                case GCLParser.T__12:
                case GCLParser.T__13:
                case GCLParser.T__14:
                case GCLParser.T__15:
                case GCLParser.T__16:
                case GCLParser.T__19:
                case GCLParser.ConstantKeyword:
                case GCLParser.AddressKeyword:
                case GCLParser.AutoKeyword:
                case GCLParser.FloatType:
                case GCLParser.IntType:
                case GCLParser.UintType:
                case GCLParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 504;
                            this.typeNameOrAuto();
                            this.state = 505;
                            this.identifier();
                            this.state = 506;
                            this.match(GCLParser.T__5);
                            this.state = 507;
                            this.expression(0);
                        }
                    }
                    break;
                case GCLParser.T__21:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 509;
                            this.match(GCLParser.T__21);
                            this.state = 510;
                            this.identifier();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forStatement() {
        let _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, GCLParser.RULE_forStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.match(GCLParser.T__22);
                this.state = 514;
                this.match(GCLParser.T__9);
                this.state = 517;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                    case 1:
                        {
                            this.state = 515;
                            this.localVariableDeclaration();
                        }
                        break;
                    case 2:
                        {
                            this.state = 516;
                            _localctx._firstExpression = this.expression(0);
                        }
                        break;
                }
                this.state = 519;
                this.match(GCLParser.T__1);
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)) | (1 << (GCLParser.BooleanLiteral - 68)) | (1 << (GCLParser.DecimalFloatLiteral - 68)) | (1 << (GCLParser.DecimalIntegerLiteral - 68)) | (1 << (GCLParser.AddressLiteral - 68)) | (1 << (GCLParser.HashLiteral - 68)) | (1 << (GCLParser.HexIntegerLiteral - 68)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 68)) | (1 << (GCLParser.HexBigIntegerLiteral - 68)) | (1 << (GCLParser.Identifier - 68)) | (1 << (GCLParser.StringLiteral - 68)))) !== 0)) {
                    {
                        this.state = 520;
                        _localctx._secondExpression = this.expression(0);
                    }
                }
                this.state = 523;
                this.match(GCLParser.T__1);
                this.state = 525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)) | (1 << (GCLParser.BooleanLiteral - 68)) | (1 << (GCLParser.DecimalFloatLiteral - 68)) | (1 << (GCLParser.DecimalIntegerLiteral - 68)) | (1 << (GCLParser.AddressLiteral - 68)) | (1 << (GCLParser.HashLiteral - 68)) | (1 << (GCLParser.HexIntegerLiteral - 68)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 68)) | (1 << (GCLParser.HexBigIntegerLiteral - 68)) | (1 << (GCLParser.Identifier - 68)) | (1 << (GCLParser.StringLiteral - 68)))) !== 0)) {
                    {
                        this.state = 524;
                        _localctx._thirdExpression = this.expression(0);
                    }
                }
                this.state = 527;
                this.match(GCLParser.T__10);
                this.state = 528;
                this.match(GCLParser.T__6);
                this.state = 532;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 529;
                            this.statement();
                        }
                    }
                    this.state = 534;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 535;
                this.match(GCLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    doWhileStatement() {
        let _localctx = new DoWhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, GCLParser.RULE_doWhileStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 537;
                this.match(GCLParser.T__23);
                this.state = 538;
                this.match(GCLParser.T__6);
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__6) | (1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__20) | (1 << GCLParser.T__22) | (1 << GCLParser.T__23) | (1 << GCLParser.T__24) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (GCLParser.BreakKeyword - 58)) | (1 << (GCLParser.ConstantKeyword - 58)) | (1 << (GCLParser.ContinueKeyword - 58)) | (1 << (GCLParser.RelayKeyword - 58)) | (1 << (GCLParser.IfKeyword - 58)) | (1 << (GCLParser.AddressKeyword - 58)) | (1 << (GCLParser.AutoKeyword - 58)) | (1 << (GCLParser.FloatType - 58)) | (1 << (GCLParser.IntType - 58)) | (1 << (GCLParser.UintType - 58)) | (1 << (GCLParser.BooleanLiteral - 58)) | (1 << (GCLParser.DecimalFloatLiteral - 58)) | (1 << (GCLParser.DecimalIntegerLiteral - 58)) | (1 << (GCLParser.AddressLiteral - 58)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (GCLParser.HashLiteral - 90)) | (1 << (GCLParser.HexIntegerLiteral - 90)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 90)) | (1 << (GCLParser.HexBigIntegerLiteral - 90)) | (1 << (GCLParser.Identifier - 90)) | (1 << (GCLParser.StringLiteral - 90)))) !== 0)) {
                    {
                        {
                            this.state = 539;
                            this.statement();
                        }
                    }
                    this.state = 544;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 545;
                this.match(GCLParser.T__7);
                this.state = 546;
                this.match(GCLParser.T__20);
                this.state = 547;
                this.match(GCLParser.T__9);
                this.state = 548;
                this.expression(0);
                this.state = 549;
                this.match(GCLParser.T__10);
                this.state = 550;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    continueStatement() {
        let _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, GCLParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 552;
                this.match(GCLParser.ContinueKeyword);
                this.state = 553;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    breakStatement() {
        let _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, GCLParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                this.match(GCLParser.BreakKeyword);
                this.state = 556;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    returnStatement() {
        let _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, GCLParser.RULE_returnStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 558;
                this.match(GCLParser.T__24);
                this.state = 560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)) | (1 << (GCLParser.BooleanLiteral - 68)) | (1 << (GCLParser.DecimalFloatLiteral - 68)) | (1 << (GCLParser.DecimalIntegerLiteral - 68)) | (1 << (GCLParser.AddressLiteral - 68)) | (1 << (GCLParser.HashLiteral - 68)) | (1 << (GCLParser.HexIntegerLiteral - 68)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 68)) | (1 << (GCLParser.HexBigIntegerLiteral - 68)) | (1 << (GCLParser.Identifier - 68)) | (1 << (GCLParser.StringLiteral - 68)))) !== 0)) {
                    {
                        this.state = 559;
                        this.expression(0);
                    }
                }
                this.state = 562;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarationStatement() {
        let _localctx = new VariableDeclarationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, GCLParser.RULE_variableDeclarationStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 564;
                this.localVariableDeclaration();
                this.state = 565;
                this.match(GCLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localVariableDeclaration() {
        let _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, GCLParser.RULE_localVariableDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
                this.typeNameOrAuto();
                this.state = 568;
                this.identifier();
                this.state = 571;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GCLParser.T__5) {
                    {
                        this.state = 569;
                        this.match(GCLParser.T__5);
                        this.state = 570;
                        this.expression(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 98;
        this.enterRecursionRule(_localctx, 98, GCLParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case GCLParser.T__9:
                        {
                            this.state = 574;
                            this.match(GCLParser.T__9);
                            this.state = 575;
                            this.expression(0);
                            this.state = 576;
                            this.match(GCLParser.T__10);
                            _localctx.expressionType = 5;
                        }
                        break;
                    case GCLParser.T__25:
                        {
                            this.state = 579;
                            this.match(GCLParser.T__25);
                            this.state = 580;
                            this.expression(37);
                            _localctx.expressionType = 6;
                        }
                        break;
                    case GCLParser.T__26:
                        {
                            this.state = 583;
                            this.match(GCLParser.T__26);
                            this.state = 584;
                            this.expression(36);
                            _localctx.expressionType = 7;
                        }
                        break;
                    case GCLParser.T__27:
                        {
                            this.state = 587;
                            this.match(GCLParser.T__27);
                            this.state = 588;
                            this.expression(35);
                            _localctx.expressionType = 8;
                        }
                        break;
                    case GCLParser.T__28:
                        {
                            this.state = 591;
                            this.match(GCLParser.T__28);
                            this.state = 592;
                            this.expression(34);
                            _localctx.expressionType = 9;
                        }
                        break;
                    case GCLParser.T__29:
                        {
                            this.state = 595;
                            this.match(GCLParser.T__29);
                            this.state = 596;
                            this.expression(33);
                            _localctx.expressionType = 10;
                        }
                        break;
                    case GCLParser.T__30:
                        {
                            this.state = 599;
                            this.match(GCLParser.T__30);
                            this.state = 600;
                            this.expression(32);
                            _localctx.expressionType = 11;
                        }
                        break;
                    case GCLParser.T__11:
                    case GCLParser.T__12:
                    case GCLParser.T__13:
                    case GCLParser.T__14:
                    case GCLParser.T__15:
                    case GCLParser.T__16:
                    case GCLParser.T__19:
                    case GCLParser.AddressKeyword:
                    case GCLParser.FloatType:
                    case GCLParser.IntType:
                    case GCLParser.UintType:
                    case GCLParser.BooleanLiteral:
                    case GCLParser.DecimalFloatLiteral:
                    case GCLParser.DecimalIntegerLiteral:
                    case GCLParser.AddressLiteral:
                    case GCLParser.HashLiteral:
                    case GCLParser.HexIntegerLiteral:
                    case GCLParser.DecimalBigIntegerLiteral:
                    case GCLParser.HexBigIntegerLiteral:
                    case GCLParser.Identifier:
                    case GCLParser.StringLiteral:
                        {
                            this.state = 603;
                            this.primaryExpression();
                            _localctx.expressionType = 42;
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 786;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 784;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 608;
                                        if (!(this.precpred(this._ctx, 31))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
                                        }
                                        this.state = 609;
                                        this.match(GCLParser.T__31);
                                        this.state = 610;
                                        this.expression(32);
                                        _localctx.expressionType = 12;
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 613;
                                        if (!(this.precpred(this._ctx, 30))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
                                        }
                                        this.state = 614;
                                        this.match(GCLParser.T__32);
                                        this.state = 615;
                                        this.expression(31);
                                        _localctx.expressionType = 13;
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 618;
                                        if (!(this.precpred(this._ctx, 29))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
                                        }
                                        this.state = 619;
                                        this.match(GCLParser.T__33);
                                        this.state = 620;
                                        this.expression(30);
                                        _localctx.expressionType = 14;
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 623;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 624;
                                        this.match(GCLParser.T__27);
                                        this.state = 625;
                                        this.expression(29);
                                        _localctx.expressionType = 15;
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 628;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 629;
                                        this.match(GCLParser.T__28);
                                        this.state = 630;
                                        this.expression(28);
                                        _localctx.expressionType = 16;
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 633;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 634;
                                        this.match(GCLParser.T__34);
                                        this.state = 635;
                                        this.expression(27);
                                        _localctx.expressionType = 17;
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 638;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 639;
                                        this.match(GCLParser.T__18);
                                        this.state = 640;
                                        this.match(GCLParser.T__18);
                                        this.state = 641;
                                        this.expression(26);
                                        _localctx.expressionType = 18;
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 644;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 645;
                                        this.match(GCLParser.T__17);
                                        this.state = 646;
                                        this.expression(25);
                                        _localctx.expressionType = 19;
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 649;
                                        if (!(this.precpred(this._ctx, 23))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
                                        }
                                        this.state = 650;
                                        this.match(GCLParser.T__18);
                                        this.state = 651;
                                        this.expression(24);
                                        _localctx.expressionType = 20;
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 654;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
                                        }
                                        this.state = 655;
                                        this.match(GCLParser.T__35);
                                        this.state = 656;
                                        this.expression(23);
                                        _localctx.expressionType = 21;
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 659;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 660;
                                        this.match(GCLParser.T__36);
                                        this.state = 661;
                                        this.expression(22);
                                        _localctx.expressionType = 22;
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 664;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 665;
                                        this.match(GCLParser.T__37);
                                        this.state = 666;
                                        this.expression(21);
                                        _localctx.expressionType = 23;
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 669;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 670;
                                        this.match(GCLParser.T__38);
                                        this.state = 671;
                                        this.expression(20);
                                        _localctx.expressionType = 24;
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 674;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 675;
                                        this.match(GCLParser.T__39);
                                        this.state = 676;
                                        this.expression(19);
                                        _localctx.expressionType = 25;
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 679;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 680;
                                        this.match(GCLParser.T__21);
                                        this.state = 681;
                                        this.expression(18);
                                        _localctx.expressionType = 26;
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 684;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 685;
                                        this.match(GCLParser.T__40);
                                        this.state = 686;
                                        this.expression(17);
                                        _localctx.expressionType = 27;
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 689;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 690;
                                        this.match(GCLParser.T__41);
                                        this.state = 691;
                                        this.expression(16);
                                        _localctx.expressionType = 28;
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 694;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 695;
                                        this.match(GCLParser.T__42);
                                        this.state = 696;
                                        this.expression(15);
                                        _localctx.expressionType = 29;
                                    }
                                    break;
                                case 19:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 699;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 700;
                                        this.match(GCLParser.T__43);
                                        this.state = 701;
                                        this.expression(0);
                                        this.state = 702;
                                        this.match(GCLParser.T__44);
                                        this.state = 703;
                                        this.expression(14);
                                        _localctx.expressionType = 30;
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 706;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 707;
                                        this.match(GCLParser.T__5);
                                        this.state = 708;
                                        this.expression(13);
                                        _localctx.expressionType = 31;
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 711;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 712;
                                        this.match(GCLParser.T__45);
                                        this.state = 713;
                                        this.expression(12);
                                        _localctx.expressionType = 32;
                                    }
                                    break;
                                case 22:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 716;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 717;
                                        this.match(GCLParser.T__46);
                                        this.state = 718;
                                        this.expression(11);
                                        _localctx.expressionType = 33;
                                    }
                                    break;
                                case 23:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 721;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 722;
                                        this.match(GCLParser.T__47);
                                        this.state = 723;
                                        this.expression(10);
                                        _localctx.expressionType = 34;
                                    }
                                    break;
                                case 24:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 726;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 727;
                                        this.match(GCLParser.T__48);
                                        this.state = 728;
                                        this.expression(9);
                                        _localctx.expressionType = 35;
                                    }
                                    break;
                                case 25:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 731;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 732;
                                        this.match(GCLParser.T__49);
                                        this.state = 733;
                                        this.expression(8);
                                        _localctx.expressionType = 36;
                                    }
                                    break;
                                case 26:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 736;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 737;
                                        this.match(GCLParser.T__50);
                                        this.state = 738;
                                        this.expression(7);
                                        _localctx.expressionType = 37;
                                    }
                                    break;
                                case 27:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 741;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 742;
                                        this.match(GCLParser.T__51);
                                        this.state = 743;
                                        this.expression(6);
                                        _localctx.expressionType = 38;
                                    }
                                    break;
                                case 28:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 746;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 747;
                                        this.match(GCLParser.T__52);
                                        this.state = 748;
                                        this.expression(5);
                                        _localctx.expressionType = 39;
                                    }
                                    break;
                                case 29:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 751;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 752;
                                        this.match(GCLParser.T__53);
                                        this.state = 753;
                                        this.expression(4);
                                        _localctx.expressionType = 40;
                                    }
                                    break;
                                case 30:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 756;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 757;
                                        this.match(GCLParser.T__54);
                                        this.state = 758;
                                        this.expression(3);
                                        _localctx.expressionType = 41;
                                    }
                                    break;
                                case 31:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 761;
                                        if (!(this.precpred(this._ctx, 43))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 43)");
                                        }
                                        this.state = 762;
                                        this.match(GCLParser.T__25);
                                        _localctx.expressionType = 0;
                                    }
                                    break;
                                case 32:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 764;
                                        if (!(this.precpred(this._ctx, 42))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
                                        }
                                        this.state = 765;
                                        this.match(GCLParser.T__26);
                                        _localctx.expressionType = 1;
                                    }
                                    break;
                                case 33:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 767;
                                        if (!(this.precpred(this._ctx, 41))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
                                        }
                                        this.state = 768;
                                        this.match(GCLParser.T__2);
                                        this.state = 769;
                                        this.expression(0);
                                        this.state = 770;
                                        this.match(GCLParser.T__4);
                                        _localctx.expressionType = 2;
                                    }
                                    break;
                                case 34:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 773;
                                        if (!(this.precpred(this._ctx, 40))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
                                        }
                                        this.state = 774;
                                        this.match(GCLParser.T__9);
                                        this.state = 775;
                                        this.functionCallArguments();
                                        this.state = 776;
                                        this.match(GCLParser.T__10);
                                        _localctx.expressionType = 3;
                                    }
                                    break;
                                case 35:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, GCLParser.RULE_expression);
                                        this.state = 779;
                                        if (!(this.precpred(this._ctx, 39))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
                                        }
                                        this.state = 780;
                                        this.match(GCLParser.T__0);
                                        this.state = 781;
                                        this.identifier();
                                        _localctx.expressionType = 4;
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 788;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primaryExpression() {
        let _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, GCLParser.RULE_primaryExpression);
        try {
            this.state = 801;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GCLParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 789;
                        this.match(GCLParser.BooleanLiteral);
                    }
                    break;
                case GCLParser.DecimalIntegerLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 790;
                        this.match(GCLParser.DecimalIntegerLiteral);
                    }
                    break;
                case GCLParser.DecimalFloatLiteral:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.match(GCLParser.DecimalFloatLiteral);
                    }
                    break;
                case GCLParser.HexIntegerLiteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 792;
                        this.match(GCLParser.HexIntegerLiteral);
                    }
                    break;
                case GCLParser.DecimalBigIntegerLiteral:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 793;
                        this.match(GCLParser.DecimalBigIntegerLiteral);
                    }
                    break;
                case GCLParser.HexBigIntegerLiteral:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 794;
                        this.match(GCLParser.HexBigIntegerLiteral);
                    }
                    break;
                case GCLParser.StringLiteral:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 795;
                        this.match(GCLParser.StringLiteral);
                    }
                    break;
                case GCLParser.AddressLiteral:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 796;
                        this.match(GCLParser.AddressLiteral);
                    }
                    break;
                case GCLParser.HashLiteral:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 797;
                        this.match(GCLParser.HashLiteral);
                    }
                    break;
                case GCLParser.Identifier:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 798;
                        this.identifier();
                    }
                    break;
                case GCLParser.T__11:
                case GCLParser.T__12:
                case GCLParser.T__13:
                case GCLParser.T__14:
                case GCLParser.T__15:
                case GCLParser.AddressKeyword:
                case GCLParser.FloatType:
                case GCLParser.IntType:
                case GCLParser.UintType:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 799;
                        this.fundamentalTypeName();
                    }
                    break;
                case GCLParser.T__16:
                case GCLParser.T__19:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 800;
                        this.builtInContainerTypeName();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionCallArguments() {
        let _localctx = new FunctionCallArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, GCLParser.RULE_functionCallArguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 811;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GCLParser.T__9) | (1 << GCLParser.T__11) | (1 << GCLParser.T__12) | (1 << GCLParser.T__13) | (1 << GCLParser.T__14) | (1 << GCLParser.T__15) | (1 << GCLParser.T__16) | (1 << GCLParser.T__19) | (1 << GCLParser.T__25) | (1 << GCLParser.T__26) | (1 << GCLParser.T__27) | (1 << GCLParser.T__28) | (1 << GCLParser.T__29) | (1 << GCLParser.T__30))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (GCLParser.AddressKeyword - 68)) | (1 << (GCLParser.FloatType - 68)) | (1 << (GCLParser.IntType - 68)) | (1 << (GCLParser.UintType - 68)) | (1 << (GCLParser.BooleanLiteral - 68)) | (1 << (GCLParser.DecimalFloatLiteral - 68)) | (1 << (GCLParser.DecimalIntegerLiteral - 68)) | (1 << (GCLParser.AddressLiteral - 68)) | (1 << (GCLParser.HashLiteral - 68)) | (1 << (GCLParser.HexIntegerLiteral - 68)) | (1 << (GCLParser.DecimalBigIntegerLiteral - 68)) | (1 << (GCLParser.HexBigIntegerLiteral - 68)) | (1 << (GCLParser.Identifier - 68)) | (1 << (GCLParser.StringLiteral - 68)))) !== 0)) {
                    {
                        this.state = 803;
                        this.expression(0);
                        this.state = 808;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GCLParser.T__3) {
                            {
                                {
                                    this.state = 804;
                                    this.match(GCLParser.T__3);
                                    this.state = 805;
                                    this.expression(0);
                                }
                            }
                            this.state = 810;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, GCLParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 813;
                this.match(GCLParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 49:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 31);
            case 1:
                return this.precpred(this._ctx, 30);
            case 2:
                return this.precpred(this._ctx, 29);
            case 3:
                return this.precpred(this._ctx, 28);
            case 4:
                return this.precpred(this._ctx, 27);
            case 5:
                return this.precpred(this._ctx, 26);
            case 6:
                return this.precpred(this._ctx, 25);
            case 7:
                return this.precpred(this._ctx, 24);
            case 8:
                return this.precpred(this._ctx, 23);
            case 9:
                return this.precpred(this._ctx, 22);
            case 10:
                return this.precpred(this._ctx, 21);
            case 11:
                return this.precpred(this._ctx, 20);
            case 12:
                return this.precpred(this._ctx, 19);
            case 13:
                return this.precpred(this._ctx, 18);
            case 14:
                return this.precpred(this._ctx, 17);
            case 15:
                return this.precpred(this._ctx, 16);
            case 16:
                return this.precpred(this._ctx, 15);
            case 17:
                return this.precpred(this._ctx, 14);
            case 18:
                return this.precpred(this._ctx, 13);
            case 19:
                return this.precpred(this._ctx, 12);
            case 20:
                return this.precpred(this._ctx, 11);
            case 21:
                return this.precpred(this._ctx, 10);
            case 22:
                return this.precpred(this._ctx, 9);
            case 23:
                return this.precpred(this._ctx, 8);
            case 24:
                return this.precpred(this._ctx, 7);
            case 25:
                return this.precpred(this._ctx, 6);
            case 26:
                return this.precpred(this._ctx, 5);
            case 27:
                return this.precpred(this._ctx, 4);
            case 28:
                return this.precpred(this._ctx, 3);
            case 29:
                return this.precpred(this._ctx, 2);
            case 30:
                return this.precpred(this._ctx, 43);
            case 31:
                return this.precpred(this._ctx, 42);
            case 32:
                return this.precpred(this._ctx, 41);
            case 33:
                return this.precpred(this._ctx, 40);
            case 34:
                return this.precpred(this._ctx, 39);
        }
        return true;
    }
    static get _ATN() {
        if (!GCLParser.__ATN) {
            GCLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GCLParser._serializedATN));
        }
        return GCLParser.__ATN;
    }
}
exports.GCLParser = GCLParser;
GCLParser.T__0 = 1;
GCLParser.T__1 = 2;
GCLParser.T__2 = 3;
GCLParser.T__3 = 4;
GCLParser.T__4 = 5;
GCLParser.T__5 = 6;
GCLParser.T__6 = 7;
GCLParser.T__7 = 8;
GCLParser.T__8 = 9;
GCLParser.T__9 = 10;
GCLParser.T__10 = 11;
GCLParser.T__11 = 12;
GCLParser.T__12 = 13;
GCLParser.T__13 = 14;
GCLParser.T__14 = 15;
GCLParser.T__15 = 16;
GCLParser.T__16 = 17;
GCLParser.T__17 = 18;
GCLParser.T__18 = 19;
GCLParser.T__19 = 20;
GCLParser.T__20 = 21;
GCLParser.T__21 = 22;
GCLParser.T__22 = 23;
GCLParser.T__23 = 24;
GCLParser.T__24 = 25;
GCLParser.T__25 = 26;
GCLParser.T__26 = 27;
GCLParser.T__27 = 28;
GCLParser.T__28 = 29;
GCLParser.T__29 = 30;
GCLParser.T__30 = 31;
GCLParser.T__31 = 32;
GCLParser.T__32 = 33;
GCLParser.T__33 = 34;
GCLParser.T__34 = 35;
GCLParser.T__35 = 36;
GCLParser.T__36 = 37;
GCLParser.T__37 = 38;
GCLParser.T__38 = 39;
GCLParser.T__39 = 40;
GCLParser.T__40 = 41;
GCLParser.T__41 = 42;
GCLParser.T__42 = 43;
GCLParser.T__43 = 44;
GCLParser.T__44 = 45;
GCLParser.T__45 = 46;
GCLParser.T__46 = 47;
GCLParser.T__47 = 48;
GCLParser.T__48 = 49;
GCLParser.T__49 = 50;
GCLParser.T__50 = 51;
GCLParser.T__51 = 52;
GCLParser.T__52 = 53;
GCLParser.T__53 = 54;
GCLParser.T__54 = 55;
GCLParser.DoxygenSingle = 56;
GCLParser.DoxygenMulti = 57;
GCLParser.BreakKeyword = 58;
GCLParser.ConstantKeyword = 59;
GCLParser.ContinueKeyword = 60;
GCLParser.RelayKeyword = 61;
GCLParser.SupplyKeyword = 62;
GCLParser.IfKeyword = 63;
GCLParser.ElseKeyword = 64;
GCLParser.ShardKeyword = 65;
GCLParser.ShardsKeyword = 66;
GCLParser.GlobalKeyword = 67;
GCLParser.AddressKeyword = 68;
GCLParser.AutoKeyword = 69;
GCLParser.MinerKeyword = 70;
GCLParser.StructKeyword = 71;
GCLParser.EnumKeyword = 72;
GCLParser.ContractKeyword = 73;
GCLParser.ImportKeyword = 74;
GCLParser.FunctionKeyword = 75;
GCLParser.PublicKeyword = 76;
GCLParser.ExportKeyword = 77;
GCLParser.AsKeyword = 78;
GCLParser.UsingKeyword = 79;
GCLParser.InterfaceKeyword = 80;
GCLParser.ImplementsKeyword = 81;
GCLParser.FloatType = 82;
GCLParser.IntType = 83;
GCLParser.UintType = 84;
GCLParser.BooleanLiteral = 85;
GCLParser.DecimalFloatLiteral = 86;
GCLParser.DecimalIntegerLiteral = 87;
GCLParser.DecimalIntegerLiteralBody = 88;
GCLParser.AddressLiteral = 89;
GCLParser.HashLiteral = 90;
GCLParser.HexIntegerLiteral = 91;
GCLParser.HexIntegerLiteralBody = 92;
GCLParser.DecimalBigIntegerLiteral = 93;
GCLParser.HexBigIntegerLiteral = 94;
GCLParser.Identifier = 95;
GCLParser.StringLiteral = 96;
GCLParser.WS = 97;
GCLParser.COMMENT = 98;
GCLParser.LINE_COMMENT = 99;
GCLParser.RULE_GCLSource = 0;
GCLParser.RULE_directive = 1;
GCLParser.RULE_importDirective = 2;
GCLParser.RULE_annotation = 3;
GCLParser.RULE_annotationItem = 4;
GCLParser.RULE_doxygen = 5;
GCLParser.RULE_contractDefinition = 6;
GCLParser.RULE_interfaceRef = 7;
GCLParser.RULE_contractPart = 8;
GCLParser.RULE_stateVariableDeclaration = 9;
GCLParser.RULE_constVariableDeclaration = 10;
GCLParser.RULE_scope = 11;
GCLParser.RULE_structDefinition = 12;
GCLParser.RULE_interfaceDefinition = 13;
GCLParser.RULE_enumDefinition = 14;
GCLParser.RULE_functionDefinition = 15;
GCLParser.RULE_functionDeclaration = 16;
GCLParser.RULE_functionReturnTypeName = 17;
GCLParser.RULE_functionParameterList = 18;
GCLParser.RULE_functionParameter = 19;
GCLParser.RULE_accessSpecifier = 20;
GCLParser.RULE_variableDeclaration = 21;
GCLParser.RULE_typeNameOrAuto = 22;
GCLParser.RULE_typeName = 23;
GCLParser.RULE_fundamentalTypeName = 24;
GCLParser.RULE_builtInContainerTypeName = 25;
GCLParser.RULE_mapKeyTypeName = 26;
GCLParser.RULE_mapTypeName = 27;
GCLParser.RULE_arrayTypeName = 28;
GCLParser.RULE_userDefinedTypeName = 29;
GCLParser.RULE_userBlockStatement = 30;
GCLParser.RULE_statement = 31;
GCLParser.RULE_expressionStatement = 32;
GCLParser.RULE_ifStatement = 33;
GCLParser.RULE_ifWithBlock = 34;
GCLParser.RULE_elseWithBlock = 35;
GCLParser.RULE_elseIfWithBlock = 36;
GCLParser.RULE_whileStatement = 37;
GCLParser.RULE_relayStatement = 38;
GCLParser.RULE_relayType = 39;
GCLParser.RULE_relayLambdaDefinition = 40;
GCLParser.RULE_relayLambdaParameter = 41;
GCLParser.RULE_forStatement = 42;
GCLParser.RULE_doWhileStatement = 43;
GCLParser.RULE_continueStatement = 44;
GCLParser.RULE_breakStatement = 45;
GCLParser.RULE_returnStatement = 46;
GCLParser.RULE_variableDeclarationStatement = 47;
GCLParser.RULE_localVariableDeclaration = 48;
GCLParser.RULE_expression = 49;
GCLParser.RULE_primaryExpression = 50;
GCLParser.RULE_functionCallArguments = 51;
GCLParser.RULE_identifier = 52;
// tslint:disable:no-trailing-whitespace
GCLParser.ruleNames = [
    "GCLSource", "directive", "importDirective", "annotation", "annotationItem",
    "doxygen", "contractDefinition", "interfaceRef", "contractPart", "stateVariableDeclaration",
    "constVariableDeclaration", "scope", "structDefinition", "interfaceDefinition",
    "enumDefinition", "functionDefinition", "functionDeclaration", "functionReturnTypeName",
    "functionParameterList", "functionParameter", "accessSpecifier", "variableDeclaration",
    "typeNameOrAuto", "typeName", "fundamentalTypeName", "builtInContainerTypeName",
    "mapKeyTypeName", "mapTypeName", "arrayTypeName", "userDefinedTypeName",
    "userBlockStatement", "statement", "expressionStatement", "ifStatement",
    "ifWithBlock", "elseWithBlock", "elseIfWithBlock", "whileStatement", "relayStatement",
    "relayType", "relayLambdaDefinition", "relayLambdaParameter", "forStatement",
    "doWhileStatement", "continueStatement", "breakStatement", "returnStatement",
    "variableDeclarationStatement", "localVariableDeclaration", "expression",
    "primaryExpression", "functionCallArguments", "identifier",
];
GCLParser._LITERAL_NAMES = [
    undefined, "'.'", "';'", "'['", "','", "']'", "'='", "'{'", "'}'", "'@'",
    "'('", "')'", "'bool'", "'string'", "'blob'", "'hash'", "'bigint'", "'map'",
    "'<'", "'>'", "'array'", "'while'", "'^'", "'for'", "'do'", "'return'",
    "'++'", "'--'", "'+'", "'-'", "'!'", "'~'", "'*'", "'/'", "'%'", "'<<'",
    "'<='", "'>='", "'=='", "'!='", "'&'", "'|'", "'&&'", "'||'", "'?'", "':'",
    "'+='", "'-='", "'*='", "'/='", "'%='", "'<<='", "'>>='", "'&='", "'^='",
    "'|='", undefined, undefined, "'break'", "'const'", "'continue'", "'relay'",
    "'supply'", "'if'", "'else'", "'shard'", "'shards'", "'global'", "'address'",
    "'auto'", "'miner'", "'struct'", "'enum'", "'contract'", "'import'", "'function'",
    "'public'", "'export'", "'as'", "'using'", "'interface'", "'implements'",
];
GCLParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "DoxygenSingle", "DoxygenMulti", "BreakKeyword", "ConstantKeyword", "ContinueKeyword",
    "RelayKeyword", "SupplyKeyword", "IfKeyword", "ElseKeyword", "ShardKeyword",
    "ShardsKeyword", "GlobalKeyword", "AddressKeyword", "AutoKeyword", "MinerKeyword",
    "StructKeyword", "EnumKeyword", "ContractKeyword", "ImportKeyword", "FunctionKeyword",
    "PublicKeyword", "ExportKeyword", "AsKeyword", "UsingKeyword", "InterfaceKeyword",
    "ImplementsKeyword", "FloatType", "IntType", "UintType", "BooleanLiteral",
    "DecimalFloatLiteral", "DecimalIntegerLiteral", "DecimalIntegerLiteralBody",
    "AddressLiteral", "HashLiteral", "HexIntegerLiteral", "HexIntegerLiteralBody",
    "DecimalBigIntegerLiteral", "HexBigIntegerLiteral", "Identifier", "StringLiteral",
    "WS", "COMMENT", "LINE_COMMENT",
];
GCLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GCLParser._LITERAL_NAMES, GCLParser._SYMBOLIC_NAMES, []);
GCLParser._serializedATNSegments = 2;
GCLParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u0332\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x03\x02\x07\x02n\n\x02\f\x02\x0E\x02q\v\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
    "|\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\x81\n\x04\x03\x04\x03\x04\x03" +
    "\x05\x03\x05\x05\x05\x87\n\x05\x03\x05\x03\x05\x07\x05\x8B\n\x05\f\x05" +
    "\x0E\x05\x8E\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x07\x06\x07\x97\n\x07\r\x07\x0E\x07\x98\x03\x07\x05\x07\x9C\n\x07\x03" +
    "\b\x05\b\x9F\n\b\x03\b\x05\b\xA2\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x07\b\xAA\n\b\f\b\x0E\b\xAD\v\b\x05\b\xAF\n\b\x03\b\x03\b\x07\b\xB3" +
    "\n\b\f\b\x0E\b\xB6\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xBD\n\t\x03" +
    "\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xC7\n\n\x03\v\x05\v" +
    "\xCA\n\v\x03\v\x05\v\xCD\n\v\x03\v\x05\v\xD0\n\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
    "\x05\x0E\xE1\n\x0E\x03\x0E\x05\x0E\xE4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x07\x0E\xEC\n\x0E\f\x0E\x0E\x0E\xEF\v\x0E\x03\x0E" +
    "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xF9\n" +
    "\x0F\f\x0F\x0E\x0F\xFC\v\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\u0101\n\x10" +
    "\x03\x10\x05\x10\u0104\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u010A" +
    "\n\x10\x03\x10\x03\x10\x07\x10\u010E\n\x10\f\x10\x0E\x10\u0111\v\x10\x03" +
    "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0118\n\x11\f\x11\x0E\x11" +
    "\u011B\v\x11\x03\x11\x03\x11\x03\x12\x05\x12\u0120\n\x12\x03\x12\x05\x12" +
    "\u0123\n\x12\x03\x12\x05\x12\u0126\n\x12\x03\x12\x03\x12\x05\x12\u012A" +
    "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0131\n\x12\f\x12" +
    "\x0E\x12\u0134\v\x12\x03\x12\x05\x12\u0137\n\x12\x03\x13\x05\x13\u013A" +
    "\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0141\n\x14\f\x14" +
    "\x0E\x14\u0144\v\x14\x05\x14\u0146\n\x14\x03\x15\x05\x15\u0149\n\x15\x03" +
    "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x05" +
    "\x18\u0154\n\x18\x03\x18\x03\x18\x05\x18\u0158\n\x18\x03\x19\x03\x19\x03" +
    "\x19\x05\x19\u015D\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0163" +
    "\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
    "\x07\x1F\u0176\n\x1F\f\x1F\x0E\x1F\u0179\v\x1F\x03\x1F\x03\x1F\x03 \x03" +
    " \x07 \u017F\n \f \x0E \u0182\v \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03" +
    "!\x03!\x03!\x03!\x03!\x03!\x05!\u0191\n!\x03\"\x03\"\x03\"\x03#\x03#\x07" +
    "#\u0198\n#\f#\x0E#\u019B\v#\x03#\x05#\u019E\n#\x03$\x03$\x03$\x03$\x03" +
    "$\x03$\x07$\u01A6\n$\f$\x0E$\u01A9\v$\x03$\x03$\x03%\x03%\x03%\x07%\u01B0" +
    "\n%\f%\x0E%\u01B3\v%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07" +
    "&\u01BE\n&\f&\x0E&\u01C1\v&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
    "\'\x07\'\u01CB\n\'\f\'\x0E\'\u01CE\v\'\x03\'\x03\'\x03(\x03(\x03(\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u01DC\n(\x03)\x03)\x03)\x05)\u01E1" +
    "\n)\x03*\x03*\x03*\x03*\x07*\u01E7\n*\f*\x0E*\u01EA\v*\x05*\u01EC\n*\x03" +
    "*\x03*\x05*\u01F0\n*\x03*\x03*\x07*\u01F4\n*\f*\x0E*\u01F7\v*\x03*\x03" +
    "*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0202\n+\x03,\x03,\x03,\x03" +
    ",\x05,\u0208\n,\x03,\x03,\x05,\u020C\n,\x03,\x03,\x05,\u0210\n,\x03,\x03" +
    ",\x03,\x07,\u0215\n,\f,\x0E,\u0218\v,\x03,\x03,\x03-\x03-\x03-\x07-\u021F" +
    "\n-\f-\x0E-\u0222\v-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03" +
    ".\x03/\x03/\x03/\x030\x030\x050\u0233\n0\x030\x030\x031\x031\x031\x03" +
    "2\x032\x032\x032\x052\u023E\n2\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u0261\n" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x033\x033\x033\x033\x073\u0313\n3\f3\x0E3\u0316" +
    "\v3\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0324" +
    "\n4\x035\x035\x035\x075\u0329\n5\f5\x0E5\u032C\v5\x055\u032E\n5\x036\x03" +
    "6\x036\x02\x02\x03d7\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
    "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
    "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
    ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
    "Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02\x02\x07\x05\x02WY]]bb\x05" +
    "\x02CCEFVV\x03\x02NO\x05\x02\x0E\x12FFTV\x06\x02\x0E\x0E\x10\x11FFTV\x02" +
    "\u0382\x02o\x03\x02\x02\x02\x04u\x03\x02\x02\x02\x06w\x03\x02\x02\x02" +
    "\b\x84\x03\x02\x02\x02\n\x91\x03\x02\x02\x02\f\x9B\x03\x02\x02\x02\x0E" +
    "\x9E\x03\x02\x02\x02\x10\xBC\x03\x02\x02\x02\x12\xC6\x03\x02\x02\x02\x14" +
    "\xC9\x03\x02\x02\x02\x16\xD5\x03\x02\x02\x02\x18\xDC\x03\x02\x02\x02\x1A" +
    "\xE0\x03\x02\x02\x02\x1C\xF2\x03\x02\x02\x02\x1E\u0100\x03\x02\x02\x02" +
    " \u0114\x03\x02\x02\x02\"\u011F\x03\x02\x02\x02$\u0139\x03\x02\x02\x02" +
    "&\u0145\x03\x02\x02\x02(\u0148\x03\x02\x02\x02*\u014D\x03\x02\x02\x02" +
    ",\u014F\x03\x02\x02\x02.\u0153\x03\x02\x02\x020\u015C\x03\x02\x02\x02" +
    "2\u015E\x03\x02\x02\x024\u0162\x03\x02\x02\x026\u0164\x03\x02\x02\x02" +
    "8\u0166\x03\x02\x02\x02:\u016D\x03\x02\x02\x02<\u0177\x03\x02\x02\x02" +
    ">\u017C\x03\x02\x02\x02@\u0190\x03\x02\x02\x02B\u0192\x03\x02\x02\x02" +
    "D\u0195\x03\x02\x02\x02F\u019F\x03\x02\x02\x02H\u01AC\x03\x02\x02\x02" +
    "J\u01B6\x03\x02\x02\x02L\u01C4\x03\x02\x02\x02N\u01D1\x03\x02\x02\x02" +
    "P\u01E0\x03\x02\x02\x02R\u01E2\x03\x02\x02\x02T\u0201\x03\x02\x02\x02" +
    "V\u0203\x03\x02\x02\x02X\u021B\x03\x02\x02\x02Z\u022A\x03\x02\x02\x02" +
    "\\\u022D\x03\x02\x02\x02^\u0230\x03\x02\x02\x02`\u0236\x03\x02\x02\x02" +
    "b\u0239\x03\x02\x02\x02d\u0260\x03\x02\x02\x02f\u0323\x03\x02\x02\x02" +
    "h\u032D\x03\x02\x02\x02j\u032F\x03\x02\x02\x02ln\x05\x04\x03\x02ml\x03" +
    "\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03" +
    "\x02\x02\x02qo\x03\x02\x02\x02rs\x05\x0E\b\x02st\x07\x02\x02\x03t\x03" +
    "\x03\x02\x02\x02uv\x05\x06\x04\x02v\x05\x03\x02\x02\x02w{\x07L\x02\x02" +
    "xy\x05j6\x02yz\x07\x03\x02\x02z|\x03\x02\x02\x02{x\x03\x02\x02\x02{|\x03" +
    "\x02\x02\x02|}\x03\x02\x02\x02}\x80\x05j6\x02~\x7F\x07P\x02\x02\x7F\x81" +
    "\x05j6\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03\x02" +
    "\x02\x02\x82\x83\x07\x04\x02\x02\x83\x07\x03\x02\x02\x02\x84\x86\x07\x05" +
    "\x02\x02\x85\x87\x05\n\x06\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02" +
    "\x02\x02\x87\x8C\x03\x02\x02\x02\x88\x89\x07\x06\x02\x02\x89\x8B\x05\n" +
    "\x06\x02\x8A\x88\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02" +
    "\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02" +
    "\x02\x02\x8F\x90\x07\x07\x02\x02\x90\t\x03\x02\x02\x02\x91\x92\x05j6\x02" +
    "\x92\x93\x07\b\x02\x02\x93\x94\t\x02\x02\x02\x94\v\x03\x02\x02\x02\x95" +
    "\x97\x07:\x02\x02\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
    "\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A" +
    "\x9C\x07;\x02\x02\x9B\x96\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C" +
    "\r\x03\x02\x02\x02\x9D\x9F\x05\f\x07\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F" +
    "\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\xA2\x05\b\x05\x02\xA1\xA0" +
    "\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4" +
    "\x07K\x02\x02\xA4\xAE\x05j6\x02\xA5\xA6\x07S\x02\x02\xA6\xAB\x05\x10\t" +
    "\x02\xA7\xA8\x07\x06\x02\x02\xA8\xAA\x05\x10\t\x02\xA9\xA7\x03\x02\x02" +
    "\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02" +
    "\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xA5\x03\x02\x02" +
    "\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB4\x07\t\x02" +
    "\x02\xB1\xB3\x05\x12\n\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02" +
    "\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02" +
    "\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07\n\x02\x02\xB8\x0F\x03\x02\x02" +
    "\x02\xB9\xBA\x05j6\x02\xBA\xBB\x07\x03\x02\x02\xBB\xBD\x03\x02\x02\x02" +
    "\xBC\xB9\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
    "\xBE\xBF\x05j6\x02\xBF\x11\x03\x02\x02\x02\xC0\xC7\x05\x14\v\x02\xC1\xC7" +
    "\x05\x16\f\x02\xC2\xC7\x05\x1A\x0E\x02\xC3\xC7\x05\x1E\x10\x02\xC4\xC7" +
    "\x05\x1C\x0F\x02\xC5\xC7\x05 \x11\x02\xC6\xC0\x03\x02\x02\x02\xC6\xC1" +
    "\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC6\xC3\x03\x02\x02\x02\xC6\xC4" +
    "\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\x13\x03\x02\x02\x02\xC8\xCA" +
    "\x05\f\x07\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC" +
    "\x03\x02\x02\x02\xCB\xCD\x05\b\x05\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD" +
    "\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xD0\x05\x18\r\x02\xCF\xCE" +
    "\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2" +
    "\x050\x19\x02\xD2\xD3\x05j6\x02\xD3\xD4\x07\x04\x02\x02\xD4\x15\x03\x02" +
    "\x02\x02\xD5\xD6\x07=\x02\x02\xD6\xD7\x050\x19\x02\xD7\xD8\x05j6\x02\xD8" +
    "\xD9\x07\b\x02\x02\xD9\xDA\x05d3\x02\xDA\xDB\x07\x04\x02\x02\xDB\x17\x03" +
    "\x02\x02\x02\xDC\xDD\x07\v\x02\x02\xDD\xDE\t\x03\x02\x02\xDE\x19\x03\x02" +
    "\x02\x02\xDF\xE1\x05\f\x07\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02" +
    "\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE4\x05\b\x05\x02\xE3\xE2\x03\x02" +
    "\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07I" +
    "\x02\x02\xE6\xE7\x05j6\x02\xE7\xED\x07\t\x02\x02\xE8\xE9\x05,\x17\x02" +
    "\xE9\xEA\x07\x04\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE8\x03\x02\x02\x02" +
    "\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
    "\xEE\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF1\x07\n\x02\x02" +
    "\xF1\x1B\x03\x02\x02\x02\xF2\xF3\x07R\x02\x02\xF3\xF4\x05j6\x02\xF4\xFA" +
    "\x07\t\x02\x02\xF5\xF6\x05\"\x12\x02\xF6\xF7\x07\x04\x02\x02\xF7\xF9\x03" +
    "\x02\x02\x02\xF8\xF5\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03" +
    "\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC\xFA\x03" +
    "\x02\x02\x02\xFD\xFE\x07\n\x02\x02\xFE\x1D\x03\x02\x02\x02\xFF\u0101\x05" +
    "\f\x07\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
    "\u0103\x03\x02\x02\x02\u0102\u0104\x05\b\x05\x02\u0103\u0102\x03\x02\x02" +
    "\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106" +
    "\x07J\x02\x02\u0106\u0107\x05j6\x02\u0107\u0109\x07\t\x02\x02\u0108\u010A" +
    "\x05j6\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
    "\u010F\x03\x02\x02\x02\u010B\u010C\x07\x06\x02\x02\u010C\u010E\x05j6\x02" +
    "\u010D\u010B\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03" +
    "\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111" +
    "\u010F\x03\x02\x02\x02\u0112\u0113\x07\n\x02\x02\u0113\x1F\x03\x02\x02" +
    "\x02\u0114\u0115\x05\"\x12\x02\u0115\u0119\x07\t\x02\x02\u0116\u0118\x05" +
    "@!\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117" +
    "\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02" +
    "\u011B\u0119\x03\x02\x02\x02\u011C\u011D\x07\n\x02\x02\u011D!\x03\x02" +
    "\x02\x02\u011E\u0120\x05\f\x07\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120" +
    "\x03\x02\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u0123\x05\b\x05\x02" +
    "\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03" +
    "\x02\x02\x02\u0124\u0126\x05\x18\r\x02\u0125\u0124\x03\x02\x02\x02\u0125" +
    "\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0129\x07M\x02" +
    "\x02\u0128\u012A\x05$\x13\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A" +
    "\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x05j6\x02\u012C" +
    "\u012D\x07\f\x02\x02\u012D\u012E\x05&\x14\x02\u012E\u0132\x07\r\x02\x02" +
    "\u012F\u0131\x05*\x16\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0134\x03" +
    "\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
    "\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0137\x07=\x02" +
    "\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137#\x03" +
    "\x02\x02\x02\u0138\u013A\x07=\x02\x02\u0139\u0138\x03\x02\x02\x02\u0139" +
    "\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x050\x19" +
    "\x02\u013C%\x03\x02\x02\x02\u013D\u0142\x05(\x15\x02\u013E\u013F\x07\x06" +
    "\x02\x02\u013F\u0141\x05(\x15\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0144" +
    "\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02" +
    "\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u013D\x03" +
    "\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\'\x03\x02\x02\x02\u0147" +
    "\u0149\x07=\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02" +
    "\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x050\x19\x02\u014B\u014C" +
    "\x05j6\x02\u014C)\x03\x02\x02\x02\u014D\u014E\t\x04\x02\x02\u014E+\x03" +
    "\x02\x02\x02\u014F\u0150\x050\x19\x02\u0150\u0151\x05j6\x02\u0151-\x03" +
    "\x02\x02\x02\u0152\u0154\x07=\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153" +
    "\u0154\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0158\x050\x19" +
    "\x02\u0156\u0158\x07G\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0156" +
    "\x03\x02\x02\x02\u0158/\x03\x02\x02\x02\u0159\u015D\x052\x1A\x02\u015A" +
    "\u015D\x054\x1B\x02\u015B\u015D\x05<\x1F\x02\u015C\u0159\x03\x02\x02\x02" +
    "\u015C\u015A\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D1\x03\x02" +
    "\x02\x02\u015E\u015F\t\x05\x02\x02\u015F3\x03\x02\x02\x02\u0160\u0163" +
    "\x058\x1D\x02\u0161\u0163\x05:\x1E\x02\u0162\u0160\x03\x02\x02\x02\u0162" +
    "\u0161\x03\x02\x02\x02\u01635\x03\x02\x02\x02\u0164\u0165\t\x06\x02\x02" +
    "\u01657\x03\x02\x02\x02\u0166\u0167\x07\x13\x02\x02\u0167\u0168\x07\x14" +
    "\x02\x02\u0168\u0169\x056\x1C\x02\u0169\u016A\x07\x06\x02\x02\u016A\u016B" +
    "\x050\x19\x02\u016B\u016C\x07\x15\x02\x02\u016C9\x03\x02\x02\x02\u016D" +
    "\u016E\x07\x16\x02\x02\u016E\u016F\x07\x14\x02\x02\u016F\u0170\x050\x19" +
    "\x02\u0170\u0171\x07\x15\x02\x02\u0171;\x03\x02\x02\x02\u0172\u0173\x05" +
    "j6\x02\u0173\u0174\x07\x03\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0172" +
    "\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02" +
    "\u0177\u0178\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0177\x03" +
    "\x02\x02\x02\u017A\u017B\x05j6\x02\u017B=\x03\x02\x02\x02\u017C\u0180" +
    "\x07\t\x02\x02\u017D\u017F\x05@!\x02\u017E\u017D\x03\x02\x02\x02\u017F" +
    "\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02" +
    "\x02\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
    "\u0184\x07\n\x02\x02\u0184?\x03\x02\x02\x02\u0185\u0191\x05D#\x02\u0186" +
    "\u0191\x05L\'\x02\u0187\u0191\x05V,\x02\u0188\u0191\x05> \x02\u0189\u0191" +
    "\x05X-\x02\u018A\u0191\x05Z.\x02\u018B\u0191\x05\\/\x02\u018C\u0191\x05" +
    "^0\x02\u018D\u0191\x05N(\x02\u018E\u0191\x05`1\x02\u018F\u0191\x05B\"" +
    "\x02\u0190\u0185\x03\x02\x02\x02\u0190\u0186\x03\x02\x02\x02\u0190\u0187" +
    "\x03\x02\x02\x02\u0190\u0188\x03\x02\x02\x02\u0190\u0189\x03\x02\x02\x02" +
    "\u0190\u018A\x03\x02\x02\x02\u0190\u018B\x03\x02\x02\x02\u0190\u018C\x03" +
    "\x02\x02\x02\u0190\u018D\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190" +
    "\u018F\x03\x02\x02\x02\u0191A\x03\x02\x02\x02\u0192\u0193\x05d3\x02\u0193" +
    "\u0194\x07\x04\x02\x02\u0194C\x03\x02\x02\x02\u0195\u0199\x05F$\x02\u0196" +
    "\u0198\x05J&\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02" +
    "\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019D\x03" +
    "\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019E\x05H%\x02\u019D\u019C" +
    "\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019EE\x03\x02\x02\x02\u019F" +
    "\u01A0\x07A\x02\x02\u01A0\u01A1\x07\f\x02\x02\u01A1\u01A2\x05d3\x02\u01A2" +
    "\u01A3\x07\r\x02\x02\u01A3\u01A7\x07\t\x02\x02\u01A4\u01A6\x05@!\x02\u01A5" +
    "\u01A4\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02" +
    "\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9" +
    "\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\n\x02\x02\u01ABG\x03\x02\x02\x02" +
    "\u01AC\u01AD\x07B\x02\x02\u01AD\u01B1\x07\t\x02\x02\u01AE\u01B0\x05@!" +
    "\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF" +
    "\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4\x03\x02\x02\x02" +
    "\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B5\x07\n\x02\x02\u01B5I\x03\x02" +
    "\x02\x02\u01B6\u01B7\x07B\x02\x02\u01B7\u01B8\x07A\x02\x02\u01B8\u01B9" +
    "\x07\f\x02\x02\u01B9\u01BA\x05d3\x02\u01BA\u01BB\x07\r\x02\x02\u01BB\u01BF" +
    "\x07\t\x02\x02\u01BC\u01BE\x05@!\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE" +
    "\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
    "\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
    "\u01C3\x07\n\x02\x02\u01C3K\x03\x02\x02\x02\u01C4\u01C5\x07\x17\x02\x02" +
    "\u01C5\u01C6\x07\f\x02\x02\u01C6\u01C7\x05d3\x02\u01C7\u01C8\x07\r\x02" +
    "\x02\u01C8\u01CC\x07\t\x02\x02\u01C9\u01CB\x05@!\x02\u01CA\u01C9\x03\x02" +
    "\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC" +
    "\u01CD\x03\x02\x02\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
    "\x02\x02\u01CF\u01D0\x07\n\x02\x02\u01D0M\x03\x02\x02\x02\u01D1\u01D2" +
    "\x07?\x02\x02\u01D2\u01D3\x07\v\x02\x02\u01D3\u01DB\x05P)\x02\u01D4\u01D5" +
    "\x05j6\x02\u01D5\u01D6\x07\f\x02\x02\u01D6\u01D7\x05h5\x02\u01D7\u01D8" +
    "\x07\r\x02\x02\u01D8\u01D9\x07\x04\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
    "\u01DA\u01DC\x05R*\x02\u01DB\u01D4\x03\x02\x02\x02\u01DB\u01DA\x03\x02" +
    "\x02\x02\u01DCO\x03\x02\x02\x02\u01DD\u01E1\x05d3\x02\u01DE\u01E1\x07" +
    "D\x02\x02\u01DF\u01E1\x07E\x02\x02\u01E0\u01DD\x03\x02\x02\x02\u01E0\u01DE" +
    "\x03\x02\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E1Q\x03\x02\x02\x02\u01E2" +
    "\u01EB\x07\f\x02\x02\u01E3\u01E8\x05T+\x02\u01E4\u01E5\x07\x06\x02\x02" +
    "\u01E5\u01E7\x05T+\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EA\x03\x02" +
    "\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
    "\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01E3\x03\x02" +
    "\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
    "\u01EF\x07\r\x02\x02\u01EE\u01F0\x07=\x02\x02\u01EF\u01EE\x03\x02\x02" +
    "\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F5" +
    "\x07\t\x02\x02\u01F2\u01F4\x05@!\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4" +
    "\u01F7\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02" +
    "\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01F5\x03";
GCLParser._serializedATNSegment1 = "\x02\x02\x02\u01F8\u01F9\x07\n\x02\x02\u01F9S\x03\x02\x02\x02\u01FA\u01FB" +
    "\x05.\x18\x02\u01FB\u01FC\x05j6\x02\u01FC\u01FD\x07\b\x02\x02\u01FD\u01FE" +
    "\x05d3\x02\u01FE\u0202\x03\x02\x02\x02\u01FF\u0200\x07\x18\x02\x02\u0200" +
    "\u0202\x05j6\x02\u0201\u01FA\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
    "\u0202U\x03\x02\x02\x02\u0203\u0204\x07\x19\x02\x02\u0204\u0207\x07\f" +
    "\x02\x02\u0205\u0208\x05b2\x02\u0206\u0208\x05d3\x02\u0207\u0205\x03\x02" +
    "\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
    "\u0209\x03\x02\x02\x02\u0209\u020B\x07\x04\x02\x02\u020A\u020C\x05d3\x02" +
    "\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03" +
    "\x02\x02\x02\u020D\u020F\x07\x04\x02\x02\u020E\u0210\x05d3\x02\u020F\u020E" +
    "\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
    "\u0211\u0212\x07\r\x02\x02\u0212\u0216\x07\t\x02\x02\u0213\u0215\x05@" +
    "!\x02\u0214\u0213\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214" +
    "\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0219\x03\x02\x02\x02" +
    "\u0218\u0216\x03\x02\x02\x02\u0219\u021A\x07\n\x02\x02\u021AW\x03\x02" +
    "\x02\x02\u021B\u021C\x07\x1A\x02\x02\u021C\u0220\x07\t\x02\x02\u021D\u021F" +
    "\x05@!\x02\u021E\u021D\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220" +
    "\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02" +
    "\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0224\x07\n\x02\x02\u0224\u0225" +
    "\x07\x17\x02\x02\u0225\u0226\x07\f\x02\x02\u0226\u0227\x05d3\x02\u0227" +
    "\u0228\x07\r\x02\x02\u0228\u0229\x07\x04\x02\x02\u0229Y\x03\x02\x02\x02" +
    "\u022A\u022B\x07>\x02\x02\u022B\u022C\x07\x04\x02\x02\u022C[\x03\x02\x02" +
    "\x02\u022D\u022E\x07<\x02\x02\u022E\u022F\x07\x04\x02\x02\u022F]\x03\x02" +
    "\x02\x02\u0230\u0232\x07\x1B\x02\x02\u0231\u0233\x05d3\x02\u0232\u0231" +
    "\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02" +
    "\u0234\u0235\x07\x04\x02\x02\u0235_\x03\x02\x02\x02\u0236\u0237\x05b2" +
    "\x02\u0237\u0238\x07\x04\x02\x02\u0238a\x03\x02\x02\x02\u0239\u023A\x05" +
    ".\x18\x02\u023A\u023D\x05j6\x02\u023B\u023C\x07\b\x02\x02\u023C\u023E" +
    "\x05d3\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E" +
    "c\x03\x02\x02\x02\u023F\u0240\b3\x01\x02\u0240\u0241\x07\f\x02\x02\u0241" +
    "\u0242\x05d3\x02\u0242\u0243\x07\r\x02\x02\u0243\u0244\b3\x01\x02\u0244" +
    "\u0261\x03\x02\x02\x02\u0245\u0246\x07\x1C\x02\x02\u0246\u0247\x05d3\'" +
    "\u0247\u0248\b3\x01\x02\u0248\u0261\x03\x02\x02\x02\u0249\u024A\x07\x1D" +
    "\x02\x02\u024A\u024B\x05d3&\u024B\u024C\b3\x01\x02\u024C\u0261\x03\x02" +
    "\x02\x02\u024D\u024E\x07\x1E\x02\x02\u024E\u024F\x05d3%\u024F\u0250\b" +
    "3\x01\x02\u0250\u0261\x03\x02\x02\x02\u0251\u0252\x07\x1F\x02\x02\u0252" +
    "\u0253\x05d3$\u0253\u0254\b3\x01\x02\u0254\u0261\x03\x02\x02\x02\u0255" +
    "\u0256\x07 \x02\x02\u0256\u0257\x05d3#\u0257\u0258\b3\x01\x02\u0258\u0261" +
    "\x03\x02\x02\x02\u0259\u025A\x07!\x02\x02\u025A\u025B\x05d3\"\u025B\u025C" +
    "\b3\x01\x02\u025C\u0261\x03\x02\x02\x02\u025D\u025E\x05f4\x02\u025E\u025F" +
    "\b3\x01\x02\u025F\u0261\x03\x02\x02\x02\u0260\u023F\x03\x02\x02\x02\u0260" +
    "\u0245\x03\x02\x02\x02\u0260\u0249\x03\x02\x02\x02\u0260\u024D\x03\x02" +
    "\x02\x02\u0260\u0251\x03\x02\x02\x02\u0260\u0255\x03\x02\x02\x02\u0260" +
    "\u0259\x03\x02\x02\x02\u0260\u025D\x03\x02\x02\x02\u0261\u0314\x03\x02" +
    "\x02\x02\u0262\u0263\f!\x02\x02\u0263\u0264\x07\"\x02\x02\u0264\u0265" +
    "\x05d3\"\u0265\u0266\b3\x01\x02\u0266\u0313\x03\x02\x02\x02\u0267\u0268" +
    "\f \x02\x02\u0268\u0269\x07#\x02\x02\u0269\u026A\x05d3!\u026A\u026B\b" +
    "3\x01\x02\u026B\u0313\x03\x02\x02\x02\u026C\u026D\f\x1F\x02\x02\u026D" +
    "\u026E\x07$\x02\x02\u026E\u026F\x05d3 \u026F\u0270\b3\x01\x02\u0270\u0313" +
    "\x03\x02\x02\x02\u0271\u0272\f\x1E\x02\x02\u0272\u0273\x07\x1E\x02\x02" +
    "\u0273\u0274\x05d3\x1F\u0274\u0275\b3\x01\x02\u0275\u0313\x03\x02\x02" +
    "\x02\u0276\u0277\f\x1D\x02\x02\u0277\u0278\x07\x1F\x02\x02\u0278\u0279" +
    "\x05d3\x1E\u0279\u027A\b3\x01\x02\u027A\u0313\x03\x02\x02\x02\u027B\u027C" +
    "\f\x1C\x02\x02\u027C\u027D\x07%\x02\x02\u027D\u027E\x05d3\x1D\u027E\u027F" +
    "\b3\x01\x02\u027F\u0313\x03\x02\x02\x02\u0280\u0281\f\x1B\x02\x02\u0281" +
    "\u0282\x07\x15\x02\x02\u0282\u0283\x07\x15\x02\x02\u0283\u0284\x05d3\x1C" +
    "\u0284\u0285\b3\x01\x02\u0285\u0313\x03\x02\x02\x02\u0286\u0287\f\x1A" +
    "\x02\x02\u0287\u0288\x07\x14\x02\x02\u0288\u0289\x05d3\x1B\u0289\u028A" +
    "\b3\x01\x02\u028A\u0313\x03\x02\x02\x02\u028B\u028C\f\x19\x02\x02\u028C" +
    "\u028D\x07\x15\x02\x02\u028D\u028E\x05d3\x1A\u028E\u028F\b3\x01\x02\u028F" +
    "\u0313\x03\x02\x02\x02\u0290\u0291\f\x18\x02\x02\u0291\u0292\x07&\x02" +
    "\x02\u0292\u0293\x05d3\x19\u0293\u0294\b3\x01\x02\u0294\u0313\x03\x02" +
    "\x02\x02\u0295\u0296\f\x17\x02\x02\u0296\u0297\x07\'\x02\x02\u0297\u0298" +
    "\x05d3\x18\u0298\u0299\b3\x01\x02\u0299\u0313\x03\x02\x02\x02\u029A\u029B" +
    "\f\x16\x02\x02\u029B\u029C\x07(\x02\x02\u029C\u029D\x05d3\x17\u029D\u029E" +
    "\b3\x01\x02\u029E\u0313\x03\x02\x02\x02\u029F\u02A0\f\x15\x02\x02\u02A0" +
    "\u02A1\x07)\x02\x02\u02A1\u02A2\x05d3\x16\u02A2\u02A3\b3\x01\x02\u02A3" +
    "\u0313\x03\x02\x02\x02\u02A4\u02A5\f\x14\x02\x02\u02A5\u02A6\x07*\x02" +
    "\x02\u02A6\u02A7\x05d3\x15\u02A7\u02A8\b3\x01\x02\u02A8\u0313\x03\x02" +
    "\x02\x02\u02A9\u02AA\f\x13\x02\x02\u02AA\u02AB\x07\x18\x02\x02\u02AB\u02AC" +
    "\x05d3\x14\u02AC\u02AD\b3\x01\x02\u02AD\u0313\x03\x02\x02\x02\u02AE\u02AF" +
    "\f\x12\x02\x02\u02AF\u02B0\x07+\x02\x02\u02B0\u02B1\x05d3\x13\u02B1\u02B2" +
    "\b3\x01\x02\u02B2\u0313\x03\x02\x02\x02\u02B3\u02B4\f\x11\x02\x02\u02B4" +
    "\u02B5\x07,\x02\x02\u02B5\u02B6\x05d3\x12\u02B6\u02B7\b3\x01\x02\u02B7" +
    "\u0313\x03\x02\x02\x02\u02B8\u02B9\f\x10\x02\x02\u02B9\u02BA\x07-\x02" +
    "\x02\u02BA\u02BB\x05d3\x11\u02BB\u02BC\b3\x01\x02\u02BC\u0313\x03\x02" +
    "\x02\x02\u02BD\u02BE\f\x0F\x02\x02\u02BE\u02BF\x07.\x02\x02\u02BF\u02C0" +
    "\x05d3\x02\u02C0\u02C1\x07/\x02\x02\u02C1\u02C2\x05d3\x10\u02C2\u02C3" +
    "\b3\x01\x02\u02C3\u0313\x03\x02\x02\x02\u02C4\u02C5\f\x0E\x02\x02\u02C5" +
    "\u02C6\x07\b\x02\x02\u02C6\u02C7\x05d3\x0F\u02C7\u02C8\b3\x01\x02\u02C8" +
    "\u0313\x03\x02\x02\x02\u02C9\u02CA\f\r\x02\x02\u02CA\u02CB\x070\x02\x02" +
    "\u02CB\u02CC\x05d3\x0E\u02CC\u02CD\b3\x01\x02\u02CD\u0313\x03\x02\x02" +
    "\x02\u02CE\u02CF\f\f\x02\x02\u02CF\u02D0\x071\x02\x02\u02D0\u02D1\x05" +
    "d3\r\u02D1\u02D2\b3\x01\x02\u02D2\u0313\x03\x02\x02\x02\u02D3\u02D4\f" +
    "\v\x02\x02\u02D4\u02D5\x072\x02\x02\u02D5\u02D6\x05d3\f\u02D6\u02D7\b" +
    "3\x01\x02\u02D7\u0313\x03\x02\x02\x02\u02D8\u02D9\f\n\x02\x02\u02D9\u02DA" +
    "\x073\x02\x02\u02DA\u02DB\x05d3\v\u02DB\u02DC\b3\x01\x02\u02DC\u0313\x03" +
    "\x02\x02\x02\u02DD\u02DE\f\t\x02\x02\u02DE\u02DF\x074\x02\x02\u02DF\u02E0" +
    "\x05d3\n\u02E0\u02E1\b3\x01\x02\u02E1\u0313\x03\x02\x02\x02\u02E2\u02E3" +
    "\f\b\x02\x02\u02E3\u02E4\x075\x02\x02\u02E4\u02E5\x05d3\t\u02E5\u02E6" +
    "\b3\x01\x02\u02E6\u0313\x03\x02\x02\x02\u02E7\u02E8\f\x07\x02\x02\u02E8" +
    "\u02E9\x076\x02\x02\u02E9\u02EA\x05d3\b\u02EA\u02EB\b3\x01\x02\u02EB\u0313" +
    "\x03\x02\x02\x02\u02EC\u02ED\f\x06\x02\x02\u02ED\u02EE\x077\x02\x02\u02EE" +
    "\u02EF\x05d3\x07\u02EF\u02F0\b3\x01\x02\u02F0\u0313\x03\x02\x02\x02\u02F1" +
    "\u02F2\f\x05\x02\x02\u02F2\u02F3\x078\x02\x02\u02F3\u02F4\x05d3\x06\u02F4" +
    "\u02F5\b3\x01\x02\u02F5\u0313\x03\x02\x02\x02\u02F6\u02F7\f\x04\x02\x02" +
    "\u02F7\u02F8\x079\x02\x02\u02F8\u02F9\x05d3\x05\u02F9\u02FA\b3\x01\x02" +
    "\u02FA\u0313\x03\x02\x02\x02\u02FB\u02FC\f-\x02\x02\u02FC\u02FD\x07\x1C" +
    "\x02\x02\u02FD\u0313\b3\x01\x02\u02FE\u02FF\f,\x02\x02\u02FF\u0300\x07" +
    "\x1D\x02\x02\u0300\u0313\b3\x01\x02\u0301\u0302\f+\x02\x02\u0302\u0303" +
    "\x07\x05\x02\x02\u0303\u0304\x05d3\x02\u0304\u0305\x07\x07\x02\x02\u0305" +
    "\u0306\b3\x01\x02\u0306\u0313\x03\x02\x02\x02\u0307\u0308\f*\x02\x02\u0308" +
    "\u0309\x07\f\x02\x02\u0309\u030A\x05h5\x02\u030A\u030B\x07\r\x02\x02\u030B" +
    "\u030C\b3\x01\x02\u030C\u0313\x03\x02\x02\x02\u030D\u030E\f)\x02\x02\u030E" +
    "\u030F\x07\x03\x02\x02\u030F\u0310\x05j6\x02\u0310\u0311\b3\x01\x02\u0311" +
    "\u0313\x03\x02\x02\x02\u0312\u0262\x03\x02\x02\x02\u0312\u0267\x03\x02" +
    "\x02\x02\u0312\u026C\x03\x02\x02\x02\u0312\u0271\x03\x02\x02\x02\u0312" +
    "\u0276\x03\x02\x02\x02\u0312\u027B\x03\x02\x02\x02\u0312\u0280\x03\x02" +
    "\x02\x02\u0312\u0286\x03\x02\x02\x02\u0312\u028B\x03\x02\x02\x02\u0312" +
    "\u0290\x03\x02\x02\x02\u0312\u0295\x03\x02\x02\x02\u0312\u029A\x03\x02" +
    "\x02\x02\u0312\u029F\x03\x02\x02\x02\u0312\u02A4\x03\x02\x02\x02\u0312" +
    "\u02A9\x03\x02\x02\x02\u0312\u02AE\x03\x02\x02\x02\u0312\u02B3\x03\x02" +
    "\x02\x02\u0312\u02B8\x03\x02\x02\x02\u0312\u02BD\x03\x02\x02\x02\u0312" +
    "\u02C4\x03\x02\x02\x02\u0312\u02C9\x03\x02\x02\x02\u0312\u02CE\x03\x02" +
    "\x02\x02\u0312\u02D3\x03\x02\x02\x02\u0312\u02D8\x03\x02\x02\x02\u0312" +
    "\u02DD\x03\x02\x02\x02\u0312\u02E2\x03\x02\x02\x02\u0312\u02E7\x03\x02" +
    "\x02\x02\u0312\u02EC\x03\x02\x02\x02\u0312\u02F1\x03\x02\x02\x02\u0312" +
    "\u02F6\x03\x02\x02\x02\u0312\u02FB\x03\x02\x02\x02\u0312\u02FE\x03\x02" +
    "\x02\x02\u0312\u0301\x03\x02\x02\x02\u0312\u0307\x03\x02\x02\x02\u0312" +
    "\u030D\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02" +
    "\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315e\x03\x02\x02\x02\u0316\u0314" +
    "\x03\x02\x02\x02\u0317\u0324\x07W\x02\x02\u0318\u0324\x07Y\x02\x02\u0319" +
    "\u0324\x07X\x02\x02\u031A\u0324\x07]\x02\x02\u031B\u0324\x07_\x02\x02" +
    "\u031C\u0324\x07`\x02\x02\u031D\u0324\x07b\x02\x02\u031E\u0324\x07[\x02" +
    "\x02\u031F\u0324\x07\\\x02\x02\u0320\u0324\x05j6\x02\u0321\u0324\x052" +
    "\x1A\x02\u0322\u0324\x054\x1B\x02\u0323\u0317\x03\x02\x02\x02\u0323\u0318" +
    "\x03\x02\x02\x02\u0323\u0319\x03\x02\x02\x02\u0323\u031A\x03\x02\x02\x02" +
    "\u0323\u031B\x03\x02\x02\x02\u0323\u031C\x03\x02\x02\x02\u0323\u031D\x03" +
    "\x02\x02\x02\u0323\u031E\x03\x02\x02\x02\u0323\u031F\x03\x02\x02\x02\u0323" +
    "\u0320\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0322\x03\x02" +
    "\x02\x02\u0324g\x03\x02\x02\x02\u0325\u032A\x05d3\x02\u0326\u0327\x07" +
    "\x06\x02\x02\u0327\u0329\x05d3\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032C" +
    "\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02" +
    "\u032B\u032E\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D\u0325\x03" +
    "\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032Ei\x03\x02\x02\x02\u032F" +
    "\u0330\x07a\x02\x02\u0330k\x03\x02\x02\x02Go{\x80\x86\x8C\x98\x9B\x9E" +
    "\xA1\xAB\xAE\xB4\xBC\xC6\xC9\xCC\xCF\xE0\xE3\xED\xFA\u0100\u0103\u0109" +
    "\u010F\u0119\u011F\u0122\u0125\u0129\u0132\u0136\u0139\u0142\u0145\u0148" +
    "\u0153\u0157\u015C\u0162\u0177\u0180\u0190\u0199\u019D\u01A7\u01B1\u01BF" +
    "\u01CC\u01DB\u01E0\u01E8\u01EB\u01EF\u01F5\u0201\u0207\u020B\u020F\u0216" +
    "\u0220\u0232\u023D\u0260\u0312\u0314\u0323\u032A\u032D";
GCLParser._serializedATN = Utils.join([
    GCLParser._serializedATNSegment0,
    GCLParser._serializedATNSegment1,
], "");
class GCLSourceContext extends ParserRuleContext_1.ParserRuleContext {
    contractDefinition() {
        return this.getRuleContext(0, ContractDefinitionContext);
    }
    EOF() { return this.getToken(GCLParser.EOF, 0); }
    directive(i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveContext);
        }
        else {
            return this.getRuleContext(i, DirectiveContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_GCLSource; }
    // @Override
    enterRule(listener) {
        if (listener.enterGCLSource) {
            listener.enterGCLSource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGCLSource) {
            listener.exitGCLSource(this);
        }
    }
}
exports.GCLSourceContext = GCLSourceContext;
class DirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    importDirective() {
        return this.getRuleContext(0, ImportDirectiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    }
}
exports.DirectiveContext = DirectiveContext;
class ImportDirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ImportKeyword() { return this.getToken(GCLParser.ImportKeyword, 0); }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    AsKeyword() { return this.tryGetToken(GCLParser.AsKeyword, 0); }
    // @Override
    get ruleIndex() { return GCLParser.RULE_importDirective; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportDirective) {
            listener.enterImportDirective(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportDirective) {
            listener.exitImportDirective(this);
        }
    }
}
exports.ImportDirectiveContext = ImportDirectiveContext;
class AnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    annotationItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationItemContext);
        }
        else {
            return this.getRuleContext(i, AnnotationItemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_annotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }
}
exports.AnnotationContext = AnnotationContext;
class AnnotationItemContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    BooleanLiteral() { return this.tryGetToken(GCLParser.BooleanLiteral, 0); }
    DecimalIntegerLiteral() { return this.tryGetToken(GCLParser.DecimalIntegerLiteral, 0); }
    DecimalFloatLiteral() { return this.tryGetToken(GCLParser.DecimalFloatLiteral, 0); }
    HexIntegerLiteral() { return this.tryGetToken(GCLParser.HexIntegerLiteral, 0); }
    StringLiteral() { return this.tryGetToken(GCLParser.StringLiteral, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_annotationItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationItem) {
            listener.enterAnnotationItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationItem) {
            listener.exitAnnotationItem(this);
        }
    }
}
exports.AnnotationItemContext = AnnotationItemContext;
class DoxygenContext extends ParserRuleContext_1.ParserRuleContext {
    DoxygenSingle(i) {
        if (i === undefined) {
            return this.getTokens(GCLParser.DoxygenSingle);
        }
        else {
            return this.getToken(GCLParser.DoxygenSingle, i);
        }
    }
    DoxygenMulti() { return this.tryGetToken(GCLParser.DoxygenMulti, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_doxygen; }
    // @Override
    enterRule(listener) {
        if (listener.enterDoxygen) {
            listener.enterDoxygen(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDoxygen) {
            listener.exitDoxygen(this);
        }
    }
}
exports.DoxygenContext = DoxygenContext;
class ContractDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    ContractKeyword() { return this.getToken(GCLParser.ContractKeyword, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    doxygen() {
        return this.tryGetRuleContext(0, DoxygenContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    ImplementsKeyword() { return this.tryGetToken(GCLParser.ImplementsKeyword, 0); }
    interfaceRef(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceRefContext);
        }
        else {
            return this.getRuleContext(i, InterfaceRefContext);
        }
    }
    contractPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractPartContext);
        }
        else {
            return this.getRuleContext(i, ContractPartContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_contractDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractDefinition) {
            listener.enterContractDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractDefinition) {
            listener.exitContractDefinition(this);
        }
    }
}
exports.ContractDefinitionContext = ContractDefinitionContext;
class InterfaceRefContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_interfaceRef; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceRef) {
            listener.enterInterfaceRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceRef) {
            listener.exitInterfaceRef(this);
        }
    }
}
exports.InterfaceRefContext = InterfaceRefContext;
class ContractPartContext extends ParserRuleContext_1.ParserRuleContext {
    stateVariableDeclaration() {
        return this.tryGetRuleContext(0, StateVariableDeclarationContext);
    }
    constVariableDeclaration() {
        return this.tryGetRuleContext(0, ConstVariableDeclarationContext);
    }
    structDefinition() {
        return this.tryGetRuleContext(0, StructDefinitionContext);
    }
    enumDefinition() {
        return this.tryGetRuleContext(0, EnumDefinitionContext);
    }
    interfaceDefinition() {
        return this.tryGetRuleContext(0, InterfaceDefinitionContext);
    }
    functionDefinition() {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_contractPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractPart) {
            listener.enterContractPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractPart) {
            listener.exitContractPart(this);
        }
    }
}
exports.ContractPartContext = ContractPartContext;
class StateVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    doxygen() {
        return this.tryGetRuleContext(0, DoxygenContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    scope() {
        return this.tryGetRuleContext(0, ScopeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_stateVariableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterStateVariableDeclaration) {
            listener.enterStateVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateVariableDeclaration) {
            listener.exitStateVariableDeclaration(this);
        }
    }
}
exports.StateVariableDeclarationContext = StateVariableDeclarationContext;
class ConstVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    ConstantKeyword() { return this.getToken(GCLParser.ConstantKeyword, 0); }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_constVariableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstVariableDeclaration) {
            listener.enterConstVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstVariableDeclaration) {
            listener.exitConstVariableDeclaration(this);
        }
    }
}
exports.ConstVariableDeclarationContext = ConstVariableDeclarationContext;
class ScopeContext extends ParserRuleContext_1.ParserRuleContext {
    ShardKeyword() { return this.tryGetToken(GCLParser.ShardKeyword, 0); }
    GlobalKeyword() { return this.tryGetToken(GCLParser.GlobalKeyword, 0); }
    AddressKeyword() { return this.tryGetToken(GCLParser.AddressKeyword, 0); }
    UintType() { return this.tryGetToken(GCLParser.UintType, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_scope; }
    // @Override
    enterRule(listener) {
        if (listener.enterScope) {
            listener.enterScope(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitScope) {
            listener.exitScope(this);
        }
    }
}
exports.ScopeContext = ScopeContext;
class StructDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    StructKeyword() { return this.getToken(GCLParser.StructKeyword, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    doxygen() {
        return this.tryGetRuleContext(0, DoxygenContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    variableDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_structDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructDefinition) {
            listener.enterStructDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructDefinition) {
            listener.exitStructDefinition(this);
        }
    }
}
exports.StructDefinitionContext = StructDefinitionContext;
class InterfaceDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    InterfaceKeyword() { return this.getToken(GCLParser.InterfaceKeyword, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    functionDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDeclarationContext);
        }
        else {
            return this.getRuleContext(i, FunctionDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_interfaceDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceDefinition) {
            listener.enterInterfaceDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceDefinition) {
            listener.exitInterfaceDefinition(this);
        }
    }
}
exports.InterfaceDefinitionContext = InterfaceDefinitionContext;
class EnumDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    EnumKeyword() { return this.getToken(GCLParser.EnumKeyword, 0); }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    doxygen() {
        return this.tryGetRuleContext(0, DoxygenContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_enumDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumDefinition) {
            listener.enterEnumDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumDefinition) {
            listener.exitEnumDefinition(this);
        }
    }
}
exports.EnumDefinitionContext = EnumDefinitionContext;
class FunctionDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    functionDeclaration() {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    }
}
exports.FunctionDefinitionContext = FunctionDefinitionContext;
class FunctionDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    FunctionKeyword() { return this.getToken(GCLParser.FunctionKeyword, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    functionParameterList() {
        return this.getRuleContext(0, FunctionParameterListContext);
    }
    doxygen() {
        return this.tryGetRuleContext(0, DoxygenContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    scope() {
        return this.tryGetRuleContext(0, ScopeContext);
    }
    functionReturnTypeName() {
        return this.tryGetRuleContext(0, FunctionReturnTypeNameContext);
    }
    accessSpecifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(AccessSpecifierContext);
        }
        else {
            return this.getRuleContext(i, AccessSpecifierContext);
        }
    }
    ConstantKeyword() { return this.tryGetToken(GCLParser.ConstantKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    }
}
exports.FunctionDeclarationContext = FunctionDeclarationContext;
class FunctionReturnTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    ConstantKeyword() { return this.tryGetToken(GCLParser.ConstantKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionReturnTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionReturnTypeName) {
            listener.enterFunctionReturnTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionReturnTypeName) {
            listener.exitFunctionReturnTypeName(this);
        }
    }
}
exports.FunctionReturnTypeNameContext = FunctionReturnTypeNameContext;
class FunctionParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    functionParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParameterContext);
        }
        else {
            return this.getRuleContext(i, FunctionParameterContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionParameterList; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionParameterList) {
            listener.enterFunctionParameterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionParameterList) {
            listener.exitFunctionParameterList(this);
        }
    }
}
exports.FunctionParameterListContext = FunctionParameterListContext;
class FunctionParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    ConstantKeyword() { return this.tryGetToken(GCLParser.ConstantKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionParameter) {
            listener.enterFunctionParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionParameter) {
            listener.exitFunctionParameter(this);
        }
    }
}
exports.FunctionParameterContext = FunctionParameterContext;
class AccessSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    PublicKeyword() { return this.tryGetToken(GCLParser.PublicKeyword, 0); }
    ExportKeyword() { return this.tryGetToken(GCLParser.ExportKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_accessSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterAccessSpecifier) {
            listener.enterAccessSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAccessSpecifier) {
            listener.exitAccessSpecifier(this);
        }
    }
}
exports.AccessSpecifierContext = AccessSpecifierContext;
class VariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_variableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    }
}
exports.VariableDeclarationContext = VariableDeclarationContext;
class TypeNameOrAutoContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.tryGetRuleContext(0, TypeNameContext);
    }
    AutoKeyword() { return this.tryGetToken(GCLParser.AutoKeyword, 0); }
    ConstantKeyword() { return this.tryGetToken(GCLParser.ConstantKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_typeNameOrAuto; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeNameOrAuto) {
            listener.enterTypeNameOrAuto(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeNameOrAuto) {
            listener.exitTypeNameOrAuto(this);
        }
    }
}
exports.TypeNameOrAutoContext = TypeNameOrAutoContext;
class TypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    fundamentalTypeName() {
        return this.tryGetRuleContext(0, FundamentalTypeNameContext);
    }
    builtInContainerTypeName() {
        return this.tryGetRuleContext(0, BuiltInContainerTypeNameContext);
    }
    userDefinedTypeName() {
        return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_typeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    }
}
exports.TypeNameContext = TypeNameContext;
class FundamentalTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    IntType() { return this.tryGetToken(GCLParser.IntType, 0); }
    UintType() { return this.tryGetToken(GCLParser.UintType, 0); }
    FloatType() { return this.tryGetToken(GCLParser.FloatType, 0); }
    AddressKeyword() { return this.tryGetToken(GCLParser.AddressKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_fundamentalTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterFundamentalTypeName) {
            listener.enterFundamentalTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFundamentalTypeName) {
            listener.exitFundamentalTypeName(this);
        }
    }
}
exports.FundamentalTypeNameContext = FundamentalTypeNameContext;
class BuiltInContainerTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    mapTypeName() {
        return this.tryGetRuleContext(0, MapTypeNameContext);
    }
    arrayTypeName() {
        return this.tryGetRuleContext(0, ArrayTypeNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_builtInContainerTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterBuiltInContainerTypeName) {
            listener.enterBuiltInContainerTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBuiltInContainerTypeName) {
            listener.exitBuiltInContainerTypeName(this);
        }
    }
}
exports.BuiltInContainerTypeNameContext = BuiltInContainerTypeNameContext;
class MapKeyTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    IntType() { return this.tryGetToken(GCLParser.IntType, 0); }
    UintType() { return this.tryGetToken(GCLParser.UintType, 0); }
    FloatType() { return this.tryGetToken(GCLParser.FloatType, 0); }
    AddressKeyword() { return this.tryGetToken(GCLParser.AddressKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_mapKeyTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapKeyTypeName) {
            listener.enterMapKeyTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapKeyTypeName) {
            listener.exitMapKeyTypeName(this);
        }
    }
}
exports.MapKeyTypeNameContext = MapKeyTypeNameContext;
class MapTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    mapKeyTypeName() {
        return this.getRuleContext(0, MapKeyTypeNameContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_mapTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapTypeName) {
            listener.enterMapTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapTypeName) {
            listener.exitMapTypeName(this);
        }
    }
}
exports.MapTypeNameContext = MapTypeNameContext;
class ArrayTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_arrayTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayTypeName) {
            listener.enterArrayTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayTypeName) {
            listener.exitArrayTypeName(this);
        }
    }
}
exports.ArrayTypeNameContext = ArrayTypeNameContext;
class UserDefinedTypeNameContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_userDefinedTypeName; }
    // @Override
    enterRule(listener) {
        if (listener.enterUserDefinedTypeName) {
            listener.enterUserDefinedTypeName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUserDefinedTypeName) {
            listener.exitUserDefinedTypeName(this);
        }
    }
}
exports.UserDefinedTypeNameContext = UserDefinedTypeNameContext;
class UserBlockStatementContext extends ParserRuleContext_1.ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_userBlockStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterUserBlockStatement) {
            listener.enterUserBlockStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUserBlockStatement) {
            listener.exitUserBlockStatement(this);
        }
    }
}
exports.UserBlockStatementContext = UserBlockStatementContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    ifStatement() {
        return this.tryGetRuleContext(0, IfStatementContext);
    }
    whileStatement() {
        return this.tryGetRuleContext(0, WhileStatementContext);
    }
    forStatement() {
        return this.tryGetRuleContext(0, ForStatementContext);
    }
    userBlockStatement() {
        return this.tryGetRuleContext(0, UserBlockStatementContext);
    }
    doWhileStatement() {
        return this.tryGetRuleContext(0, DoWhileStatementContext);
    }
    continueStatement() {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    }
    breakStatement() {
        return this.tryGetRuleContext(0, BreakStatementContext);
    }
    returnStatement() {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    }
    relayStatement() {
        return this.tryGetRuleContext(0, RelayStatementContext);
    }
    variableDeclarationStatement() {
        return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
    }
    expressionStatement() {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
exports.StatementContext = StatementContext;
class ExpressionStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_expressionStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
}
exports.ExpressionStatementContext = ExpressionStatementContext;
class IfStatementContext extends ParserRuleContext_1.ParserRuleContext {
    ifWithBlock() {
        return this.getRuleContext(0, IfWithBlockContext);
    }
    elseIfWithBlock(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfWithBlockContext);
        }
        else {
            return this.getRuleContext(i, ElseIfWithBlockContext);
        }
    }
    elseWithBlock() {
        return this.tryGetRuleContext(0, ElseWithBlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_ifStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
}
exports.IfStatementContext = IfStatementContext;
class IfWithBlockContext extends ParserRuleContext_1.ParserRuleContext {
    IfKeyword() { return this.getToken(GCLParser.IfKeyword, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_ifWithBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfWithBlock) {
            listener.enterIfWithBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfWithBlock) {
            listener.exitIfWithBlock(this);
        }
    }
}
exports.IfWithBlockContext = IfWithBlockContext;
class ElseWithBlockContext extends ParserRuleContext_1.ParserRuleContext {
    ElseKeyword() { return this.getToken(GCLParser.ElseKeyword, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_elseWithBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseWithBlock) {
            listener.enterElseWithBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseWithBlock) {
            listener.exitElseWithBlock(this);
        }
    }
}
exports.ElseWithBlockContext = ElseWithBlockContext;
class ElseIfWithBlockContext extends ParserRuleContext_1.ParserRuleContext {
    ElseKeyword() { return this.getToken(GCLParser.ElseKeyword, 0); }
    IfKeyword() { return this.getToken(GCLParser.IfKeyword, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_elseIfWithBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseIfWithBlock) {
            listener.enterElseIfWithBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseIfWithBlock) {
            listener.exitElseIfWithBlock(this);
        }
    }
}
exports.ElseIfWithBlockContext = ElseIfWithBlockContext;
class WhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_whileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class RelayStatementContext extends ParserRuleContext_1.ParserRuleContext {
    RelayKeyword() { return this.getToken(GCLParser.RelayKeyword, 0); }
    relayType() {
        return this.getRuleContext(0, RelayTypeContext);
    }
    relayLambdaDefinition() {
        return this.tryGetRuleContext(0, RelayLambdaDefinitionContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    functionCallArguments() {
        return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_relayStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelayStatement) {
            listener.enterRelayStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelayStatement) {
            listener.exitRelayStatement(this);
        }
    }
}
exports.RelayStatementContext = RelayStatementContext;
class RelayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    ShardsKeyword() { return this.tryGetToken(GCLParser.ShardsKeyword, 0); }
    GlobalKeyword() { return this.tryGetToken(GCLParser.GlobalKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_relayType; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelayType) {
            listener.enterRelayType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelayType) {
            listener.exitRelayType(this);
        }
    }
}
exports.RelayTypeContext = RelayTypeContext;
class RelayLambdaDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    relayLambdaParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelayLambdaParameterContext);
        }
        else {
            return this.getRuleContext(i, RelayLambdaParameterContext);
        }
    }
    ConstantKeyword() { return this.tryGetToken(GCLParser.ConstantKeyword, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_relayLambdaDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelayLambdaDefinition) {
            listener.enterRelayLambdaDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelayLambdaDefinition) {
            listener.exitRelayLambdaDefinition(this);
        }
    }
}
exports.RelayLambdaDefinitionContext = RelayLambdaDefinitionContext;
class RelayLambdaParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeNameOrAuto() {
        return this.tryGetRuleContext(0, TypeNameOrAutoContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_relayLambdaParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelayLambdaParameter) {
            listener.enterRelayLambdaParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelayLambdaParameter) {
            listener.exitRelayLambdaParameter(this);
        }
    }
}
exports.RelayLambdaParameterContext = RelayLambdaParameterContext;
class ForStatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    localVariableDeclaration() {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_forStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
}
exports.ForStatementContext = ForStatementContext;
class DoWhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_doWhileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterDoWhileStatement) {
            listener.enterDoWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDoWhileStatement) {
            listener.exitDoWhileStatement(this);
        }
    }
}
exports.DoWhileStatementContext = DoWhileStatementContext;
class ContinueStatementContext extends ParserRuleContext_1.ParserRuleContext {
    ContinueKeyword() { return this.getToken(GCLParser.ContinueKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_continueStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }
}
exports.ContinueStatementContext = ContinueStatementContext;
class BreakStatementContext extends ParserRuleContext_1.ParserRuleContext {
    BreakKeyword() { return this.getToken(GCLParser.BreakKeyword, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_breakStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }
}
exports.BreakStatementContext = BreakStatementContext;
class ReturnStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_returnStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    }
}
exports.ReturnStatementContext = ReturnStatementContext;
class VariableDeclarationStatementContext extends ParserRuleContext_1.ParserRuleContext {
    localVariableDeclaration() {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_variableDeclarationStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclarationStatement) {
            listener.enterVariableDeclarationStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclarationStatement) {
            listener.exitVariableDeclarationStatement(this);
        }
    }
}
exports.VariableDeclarationStatementContext = VariableDeclarationStatementContext;
class LocalVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeNameOrAuto() {
        return this.getRuleContext(0, TypeNameOrAutoContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_localVariableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalVariableDeclaration) {
            listener.enterLocalVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalVariableDeclaration) {
            listener.exitLocalVariableDeclaration(this);
        }
    }
}
exports.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this.expressionType = -1;
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    functionCallArguments() {
        return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    primaryExpression() {
        return this.tryGetRuleContext(0, PrimaryExpressionContext);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class PrimaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    BooleanLiteral() { return this.tryGetToken(GCLParser.BooleanLiteral, 0); }
    DecimalIntegerLiteral() { return this.tryGetToken(GCLParser.DecimalIntegerLiteral, 0); }
    DecimalFloatLiteral() { return this.tryGetToken(GCLParser.DecimalFloatLiteral, 0); }
    HexIntegerLiteral() { return this.tryGetToken(GCLParser.HexIntegerLiteral, 0); }
    DecimalBigIntegerLiteral() { return this.tryGetToken(GCLParser.DecimalBigIntegerLiteral, 0); }
    HexBigIntegerLiteral() { return this.tryGetToken(GCLParser.HexBigIntegerLiteral, 0); }
    StringLiteral() { return this.tryGetToken(GCLParser.StringLiteral, 0); }
    AddressLiteral() { return this.tryGetToken(GCLParser.AddressLiteral, 0); }
    HashLiteral() { return this.tryGetToken(GCLParser.HashLiteral, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    fundamentalTypeName() {
        return this.tryGetRuleContext(0, FundamentalTypeNameContext);
    }
    builtInContainerTypeName() {
        return this.tryGetRuleContext(0, BuiltInContainerTypeNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_primaryExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    }
}
exports.PrimaryExpressionContext = PrimaryExpressionContext;
class FunctionCallArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_functionCallArguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionCallArguments) {
            listener.enterFunctionCallArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionCallArguments) {
            listener.exitFunctionCallArguments(this);
        }
    }
}
exports.FunctionCallArgumentsContext = FunctionCallArgumentsContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.getToken(GCLParser.Identifier, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GCLParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
//# sourceMappingURL=LangParser.js.map