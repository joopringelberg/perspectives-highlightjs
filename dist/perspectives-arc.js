/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["perspectivesarc"] = factory();
	else
		root["perspectivesarc"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/languages/perspectives-arc.js":
/*!*******************************************!*\
  !*** ./src/languages/perspectives-arc.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\nLanguage: Perspectives ARC\nAuthor: Joop Ringelberg <joopringelberg@perspect.it>\nContributors: Cor Baars <corbaars@perspect.it>\nDescription: A modelling language for co-operation.\nWebsite: https://joopringelberg.github.io/perspectives-documentation/\n*/\n\n///// COLOR VARIABLES\nconst\n    // base01\n    // base02\n    base03 = \"comment\",\n    base04 = \"tag\",\n    // base05\n    // base06\n    base05 = \"operator\",\n    base08 = \"variable\",\n    base09 = \"number\",\n    base0A = \"title\",\n    base0B = \"string\",\n    base0C = \"regexp\",\n    base0D = \"title.function\",\n    base0E = \"keyword\",\n    base0F = \"meta\"\n    ;\n\nconst whitespace = /\\s+/;\n\nconst identifier = /\\w+/;\n\nfunction lexeme(w)\n{\n    return new RegExp( \"\\\\b\" + w + \"\\\\b\");\n}\nconst lex = lexeme;\nconst l = lexeme;\n\n// CONTEXT KINDS (base0A)\nconst contexts = {\n    scope: base0A,\n    match: /\\b(domain|case|party|activity)\\b/,\n};\n\n// ROLE KINDS (NOT USER) (base0B)\nconst roles ={\n    scope: base0B,\n    match: /(?<=\\n\\s*)\\b(external|thing|context)\\b/\n};\n\n// USER ROLE IS SPECIAL (role name gets base03)\nconst user = {\n    begin: [lex(\"user\"), whitespace, identifier],\n    beginScope: {\n        1: base0B,\n        3: base03\n    }\n\n};\n\nconst property = {\n    scope: base08,\n    begin: lexeme(\"property\")\n};\n\nconst propertyFacets = {\n    scope: base08,\n    begin: /\\b(mandatory|relational|unlinked|minLength|maxLength|enumeration|pattern|maxInclusive|minInclusive)\\b/\n};\n\nconst perspective = {\n    scope: base0D,\n    begin: /\\bperspective(\\s+(on|of))?\\b/,\n}\n\nconst perspectiveParts = {\n    scope: base0D,\n    begin: /\\b(view(?=\\s+[\\w|:|\\$]+\\s+verbs)|verbs|props|only|except|defaults|all\\s+roleverbs|action)\\b/,\n}\n\nconst state = {\n    scope: base0E,\n    begin: lexeme(\"state\")\n};\n\n// STATE TRANSITION (ON ENTRY, ON EXIT)\nconst stateTransition = {\n    scope: base0E,\n    begin: /\\bon\\s+(entry|exit)\\b/\n};\n\n// NOTIFICATION\nconst notification = {\n    begin: [lexeme(\"notify\"), whitespace, identifier],\n    beginScope: {\n        1: base0E,\n        3: base03\n    }\n};\n\n// AUTOMATIC ACTION\n// User in `do for user` gets the role coloring.\nconst automaticAction = {\n    begin: [lexeme(\"do\"), whitespace, lexeme(\"for\"), whitespace, identifier],\n    beginScope: {\n        1: base0E,\n        3: base0E,\n        4: base03\n    }\n};\n\n// ASSIGNMENT\nconst remove = {\n    begin: [lexeme(\"remove\"), whitespace, /\\b(role|context)\\b/],\n    beginScope: {\n        1: base0E,\n        2: base0E\n    }\n};\n\nconst create = {\n    begin: [lexeme( \"create\" ), whitespace, lexeme(\"role\"), whitespace, identifier, whitespace, lexeme(\"in\")],\n    beginScope: {\n        1: base0E,\n        3: base0E,\n        7: base0E\n    }\n};\n\nconst deleteStatement = {\n    begin: [lexeme( \"delete\" ), whitespace, lexeme(\"role\"), whitespace, identifier, whitespace, lexeme(\"from\")],\n    beginScope: {\n        1: base0E,\n        3: base0E,\n        7: base0E\n    }\n};\n\n// SIMPLE VALUES\nconst boolean = {\n    begin: /true|false/,\n    scope: base09\n};\n\nconst date = {\n    begin: /\\'[\\d|\\-]+\\'/,\n    scope: base09\n};\n\nconst number = {\n    begin: /\\b\\d+\\b/,\n    scope: base09\n};\n\nconst regexp = {\n    begin: /\\/.*\\//,\n    scope: base09\n};\n\n// OPERATORS\nconst alphabeticOperator = {\n    begin: /\\b(either|both|binds|matches|and|or|not|exists|available|boundBy|binder|context|extern)\\b/,\n    scope: base0C\n};\n\nconst filter = {\n    begin: [lexeme(\"filter\"), /.*/, lexeme(\"with\")],\n    beginScope: {\n        1: base0C,\n        3: base0C\n    }\n};\n\nconst nonAlphabeticOperator = {\n    begin: /\\>\\>\\=|\\>\\>|\\*|\\/|\\+|\\-|\\=\\=|\\>\\=|\\<|>\\=|>/,\n    scope: base0C\n};\n\n// STANDARD VARIABLES\nconst standardVariables = {\n    begin: /\\b(currentcontext|nofifieduser|origin|currentactor)\\b/,\n    scope: base03\n};\n\n// PROPERTY RANGE\nconst propertyRange = {\n    begin: /\\b(String|Number|Boolean|DateTime)\\b/,\n    scope: base09\n};\n\n// ROLE VERBS\nconst roleVerbs = {\n    begin: /\\b(Remove|Delete|Create|CreateAndFill|Fill|Unbind|RemoveFiller|Move)\\b/,\n    scope: base0F\n};\n\n// PROPERTY VERBS\nconst propertyVerbs = {\n    begin: /\\b(RemovePropertyValue|DeleteProperty|AddPropertyValue|SetPropertyValue|Consult)\\b/,\n    scope: base0F\n};\n\n// META: ASPECT, INDEXED\nconst meta = {\n    begin: / \\b(aspect|indexed)\\b/,\n    scope: base05\n};\n\nconst use = {\n    begin: [lexeme(\"use\"), /.*/, lexeme(\"for\")],\n    beginScope: {\n        1: base05,\n        3: base05\n    }\n};\n\nconst blockComment = {\n    scope: base03,\n    begin: /\\{-/,\n    end: /-\\}/\n};\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(hljs) {\n    // COMMENT\n    const simpleComment = hljs.COMMENT('--', '$');\n\n\n    return {\n      name: \"Perspectives ARC\",\n      case_insensitive: false,\n      contains: \n        [ hljs.QUOTE_STRING_MODE\n        , hljs.APOS_STRING_MODE\n        , simpleComment\n        , blockComment\n        , contexts\n        , roles\n        , user\n        , property\n        , propertyFacets\n        , perspective\n        , perspectiveParts \n        , state\n        , stateTransition\n        , notification\n        , automaticAction\n        , remove\n        , create\n        , deleteStatement\n        , boolean, date, number, regexp\n        , alphabeticOperator\n        , filter\n        , nonAlphabeticOperator\n        , standardVariables\n        , propertyRange\n        , roleVerbs\n        , propertyVerbs\n        , meta\n        , use\n        ]\n    }\n  };\n\n//# sourceURL=webpack://perspectivesarc/./src/languages/perspectives-arc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/languages/perspectives-arc.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});