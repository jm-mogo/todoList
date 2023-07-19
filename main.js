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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_add_task_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/add-task-menu.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/add-task-menu.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_add_task_menu_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: #07111c;\n}\n\nheader {\n  width: 100%;\n  height: 10vh;\n  font-size: 3rem;\n  background: linear-gradient(to right, #095fb4, #659edb);\n  color: #eef2fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menuToggle input {\n  display: none;\n}\n\n.navigation {\n  width: 30%;\n  padding: 28px;\n  background-color: #eef2fa;\n  min-height: calc(90vh - 56px);\n}\n\n.content {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.todo-list {\n  padding-top: 48px;\n  padding-bottom: 48px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-title {\n  color: #eef2fa;\n  font-size: 3rem;\n  margin-bottom: 48px;\n}\n\n.tasksList {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n}\n\n.task {\n  height: 40px;\n  width: 80%;\n  border-radius: 10px;\n  color: #eef2fa;\n}\n\n.priority-low {\n  background-color: green;\n}\n\n.priority-medium {\n  background-color: orange;\n}\n\n.priority-high {\n  background-color: red;\n}\n\n.new-task-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #095fb4;\n  width: 60px;\n  height: 60px;\n  border: none;\n  color: #eef2fa;\n  font-size: 42px;\n  border-radius: 50%;\n  box-shadow: 5px 6px 20px 10px #050c14;\n}\n\n#menu p {\n  font-size: 2rem;\n  font-weight: bold;\n  padding-bottom: 28px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  padding-left: 40px;\n  gap: 10px;\n}\n\n.project-button {\n  border: none;\n  background: none;\n  text-align: left;\n  font-size: 1.4rem;\n  transition: 0.2s;\n}\n\n.project-button:hover {\n  scale: 1.1;\n  background: #afdaff;\n}\n\n@media only screen and (max-width: 600px) {\n  #menuToggle {\n    display: block;\n    position: relative;\n    top: 20px;\n    left: 20px;\n    width: 44px;\n    z-index: 1;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  #menuToggle input {\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    top: -7px;\n    left: -5px;\n    cursor: pointer;\n    opacity: 0; /* hide this */\n    z-index: 2; /* and place it over the hamburger */\n    -webkit-touch-callout: none;\n  }\n  /*\n   * Just a quick hamburger\n   */\n  #menuToggle span {\n    display: block;\n    width: 33px;\n    height: 4px;\n    margin-bottom: 5px;\n    position: relative;\n    background: #294263;\n    border-radius: 3px;\n    z-index: 1;\n    transform-origin: 4px 0px;\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  }\n  #menuToggle span:first-child {\n    transform-origin: 0% 0%;\n  }\n  #menuToggle span:nth-child(4) {\n    transform-origin: 0% 100%;\n  }\n  /* \n   * Transform all the slices of hamburger\n   * into a cross mark.\n   */\n  #menuToggle input:checked ~ span {\n    opacity: 1;\n    transform: rotate(45deg) translate(-2px, -1px);\n  }\n  /*\n   * But let's hide the middle one.\n   */\n  #menuToggle input:checked ~ span:nth-child(3) {\n    opacity: 0;\n    transform: rotate(0deg) scale(0.2, 0.2);\n  }\n  /*\n   * Ohyeah and the last one should go the other direction\n   */\n  #menuToggle input:checked ~ span:nth-child(4) {\n    transform: rotate(-45deg) translate(0, -1px);\n  }\n  #menu {\n    position: absolute;\n    margin: -47px 0 0 -50px;\n    padding: 50px;\n    padding-top: 82px;\n    width: 65vw;\n    min-height: calc(90vh - 132px);\n    background: #eef2fa;\n    -webkit-font-smoothing: antialiased;\n    /* to stop flickering of text in safari */\n    transform-origin: 0% 0%;\n    transform: translate(-100%, 0);\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  }\n  /*\n   * And let's slide it in from the left\n   */\n  #menuToggle input:checked ~ div {\n    transform: none;\n  }\n  .todo-list {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  .navigation {\n    width: 0% !important;\n    background-color: none !important;\n    padding: 0 !important;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/add-task-menu.scss":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/add-task-menu.scss ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* The Overlay (background) */\n.overlay {\n    /* Height & width depends on how you want to reveal the overlay (see JS below) */\n    height: 0;\n    width: 100%;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    bottom: 0;\n    background-color: rgb(0, 0, 0); /* Black fallback color */\n    background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\n}\n\n/* Position the content inside the overlay */\n.overlay-content {\n    position: relative;\n    width: 100%; /* 100% width */\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nform {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    width: 340px;\n    height: 500px;\n    border-radius: 20px;\n    background: white;\n    gap: 20px;\n    align-items: center;\n}\n\n.titleNewTask {\n    padding: 20px;\n    font-size: 2rem;\n}\n\n.buttons-newTask {\n    padding-top: 40px;\n    display: grid;\n    width: 80%;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.input-new-task {\n    display: flex;\n    flex-direction: column;\n}\n\n.input-new-task input,\n.input-new-task select {\n    appearance: none;\n    border-radius: 4px;\n    padding: 5px;\n    width: 240px;\n    font-size: 1rem;\n    background: #f2f2f2;\n    border: none;\n    padding: 8px;\n    margin-top: 4px;\n    \n}\n\n.closebtn,\n.add-task-button {\n    height: 40px;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 4px 5px 12px 2px #a3a2a2;\n    transition: 0.2s;\n}\n\n.add-task-button {\n    background: #84d7a9;\n}\n\n\n.closebtn {\n    background: #d65656;\n}\n\n.add-task-button:hover,\n.closebtn:hover {\n    scale: 1.08;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/add-task-menu.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsManager: () => (/* binding */ projectsManager)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project.js */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_addNewTaskToProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addNewTaskToProject */ \"./src/modules/addNewTaskToProject.js\");\n/* harmony import */ var _ui_displayTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/displayTasks.js */ \"./src/ui/displayTasks.js\");\n/* harmony import */ var _ui_displayProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/displayProjects.js */ \"./src/ui/displayProjects.js\");\n/* harmony import */ var _modules_ProjectsManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ProjectsManager */ \"./src/modules/ProjectsManager.js\");\n\n\n\n\n\n\n\nconst work = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Work\");\nconst home = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Home\");\nconst school = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"School\");\nconst church = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Church\");\nconst sideProject = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Side project\");\nconst travel = new _modules_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Travel\");\n\nconst projectsManager = new _modules_ProjectsManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\nprojectsManager.addNewProject(work);\nprojectsManager.addNewProject(home);\nprojectsManager.addNewProject(school);\nprojectsManager.addNewProject(church);\nprojectsManager.addNewProject(sideProject);\nprojectsManager.addNewProject(travel);\n\n(0,_ui_displayProjects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectsManager.getProjects());\n\n(0,_ui_displayTasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    projectsManager.getCurrentProject().getTasks(),\n    projectsManager.getCurrentProject().name\n);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = []\n    }\n    \n    addTask(name, priority, description) {\n        this.tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, priority, description))\n    } \n\n    getTasks() {\n        return this.tasks\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectsManager.js":
/*!****************************************!*\
  !*** ./src/modules/ProjectsManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentProject)\n/* harmony export */ });\nclass CurrentProject {\n    constructor() {\n        this.id = 0\n        this.projects = []\n    }\n\n    getCurrentProject() {\n        return this.projects[this.id]\n    }\n\n    getProjects() {\n        return this.projects\n    }\n\n    addNewProject(project) {\n        this.projects.push(project)\n    }\n\n    setId(id) {\n        this.id = id\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/ProjectsManager.js?");

/***/ }),

/***/ "./src/modules/addNewTaskToProject.js":
/*!********************************************!*\
  !*** ./src/modules/addNewTaskToProject.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNewTask)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _ui_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/displayTasks.js */ \"./src/ui/displayTasks.js\");\n/* harmony import */ var _ui_displayAddTaskMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/displayAddTaskMenu.js */ \"./src/ui/displayAddTaskMenu.js\");\n\n\n\n\nfunction addNewTask() {\n    const project = ___WEBPACK_IMPORTED_MODULE_0__.projectsManager.getCurrentProject()\n    let taskName = document.getElementById(\"task-name\")\n    let taskPriority = document.getElementById(\"priority\")\n    \n    project.addTask(taskName.value, taskPriority.value, \"hello, im the description\")\n\n    console.table(project)\n\n    ;(0,_ui_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project.getTasks(), project.name)\n    ;(0,_ui_displayAddTaskMenu_js__WEBPACK_IMPORTED_MODULE_2__.closeNav)()\n}\n\ndocument.getElementById('add-task-button').addEventListener(\"click\", addNewTask)\n\n//# sourceURL=webpack://todo-list/./src/modules/addNewTaskToProject.js?");

/***/ }),

/***/ "./src/modules/changeCurrentProject.js":
/*!*********************************************!*\
  !*** ./src/modules/changeCurrentProject.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeCurrentProject)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _ui_displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/displayTasks */ \"./src/ui/displayTasks.js\");\n\n\n\nfunction changeCurrentProject() {\n    ___WEBPACK_IMPORTED_MODULE_0__.projectsManager.setId(this.id)\n    closeProjectMenu()\n    ;(0,_ui_displayTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(___WEBPACK_IMPORTED_MODULE_0__.projectsManager.getCurrentProject().getTasks(), ___WEBPACK_IMPORTED_MODULE_0__.projectsManager.getCurrentProject().name)\n}\n\nfunction closeProjectMenu() {\n    const menu = document.getElementById(\"menuCheck\")\n    menu.checked = false\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/changeCurrentProject.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ task)\n/* harmony export */ });\nclass task {\n    constructor(title, priority, description = \"\") {\n        this.title = title;\n        this.priority = priority\n        this.description = description;\n    }\n\n    set setDescription(description) {\n        this.description = description;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/ui/displayAddTaskMenu.js":
/*!**************************************!*\
  !*** ./src/ui/displayAddTaskMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeNav: () => (/* binding */ closeNav)\n/* harmony export */ });\nconst taskName = document.getElementById(\"task-name\")\n\nfunction cleanInputAreas() {\n    taskName.value = \"\"\n}\n\nfunction openNav() {\n    document.getElementById(\"myNav\").style.height = \"100%\";\n}\n\n/* Close when someone clicks on the \"x\" symbol inside the overlay */\nfunction closeNav() {\n    document.getElementById(\"myNav\").style.height = \"0%\";\n    cleanInputAreas()\n}\n\ndocument.getElementById(\"new-task-button\").addEventListener('click', openNav)\ndocument.getElementById(\"closebtn\").addEventListener('click', closeNav)\n\n\n//# sourceURL=webpack://todo-list/./src/ui/displayAddTaskMenu.js?");

/***/ }),

/***/ "./src/ui/displayProjects.js":
/*!***********************************!*\
  !*** ./src/ui/displayProjects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printProjects)\n/* harmony export */ });\n/* harmony import */ var _modules_changeCurrentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/changeCurrentProject */ \"./src/modules/changeCurrentProject.js\");\n\n\nfunction createProjectButton(project, index) {\n    let projectButton = document.createElement(\"button\");\n    projectButton.textContent = project.name;\n    projectButton.setAttribute(\"id\", index);\n    projectButton.classList.add(\"project-button\");\n\n    projectButton.addEventListener(\"click\", _modules_changeCurrentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n    return projectButton;\n}\n\nfunction printProjects(projects) {\n    const projectSection = document.getElementById(\"projects\");\n\n    for (let i = 0; i < projects.length; i++) {\n        projectSection.appendChild(createProjectButton(projects[i], i));\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui/displayProjects.js?");

/***/ }),

/***/ "./src/ui/displayTasks.js":
/*!********************************!*\
  !*** ./src/ui/displayTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printTasks)\n/* harmony export */ });\nconst title = document.getElementById(\"project-title\");\nconst tasksList = document.getElementById(\"tasksList\");\n\nfunction createTaskDiv(task) {\n    let div = document.createElement(\"div\");\n    div.classList.add(\"task\");\n    div.classList.add(`priority-${task.priority}`)\n    div.innerText = task.title;\n    return div;\n}\n\nfunction printProjectName(projectName) {\n    title.textContent = projectName\n}\n\nfunction printTasks(tasks, projectName) {\n    printProjectName(projectName)\n    tasksList.innerHTML = \"\";\n    if (tasks.length < 1) {\n        return\n    }\n    for (let i = 0; i < tasks.length; i++) {\n        tasksList.appendChild(createTaskDiv(tasks[i]));\n    }\n\n} \n\n//# sourceURL=webpack://todo-list/./src/ui/displayTasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;