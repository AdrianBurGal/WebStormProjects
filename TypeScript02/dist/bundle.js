/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nvar result;\nfunction typeResult(arg) {\n    console.log(\"The argument is a \" + typeof arg);\n}\ntypeResult(result = true);\nvar car = { make: \"Audi\", model: \"A4\" };\nvar bus = { make: \"Vovo\", model: \"XC60\", payloadCapacity: 20 };\nvar vehicles = [car, bus];\nvehicles.forEach(function (vehicle) {\n    console.log(\"Make: \" + vehicle.make);\n    console.log(\"Model: \" + vehicle.model);\n    if (\"payloadCapacity\" in vehicle) {\n        console.log(\"PayLoadCapacity: \" + vehicle.payloadCapacity);\n    }\n});\n\n\n//# sourceURL=webpack://typescript02/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;