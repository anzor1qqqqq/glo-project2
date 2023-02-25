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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/time */ \"./src/modules/time.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./src/modules/regular.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 march 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://glo-project3/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst CreateMenu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = document.querySelectorAll('.close-modal');\r\n\r\n    let handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    document.querySelectorAll('a').forEach(elem => {\r\n        elem.addEventListener('click', event => {\r\n            if (elem.getAttribute('href')) {\r\n                event.preventDefault();\r\n                const id = elem.getAttribute('href');\r\n\r\n                document.querySelector(id).scrollIntoView({\r\n                    behavior: 'smooth',\r\n                    block: 'start',\r\n                });  \r\n            };\r\n        });\r\n    });\r\n\r\n    closeBtn.forEach(elem => elem.addEventListener('click', handleMenu));\r\n    menuBtn.addEventListener('click', handleMenu);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMenu); \n\n//# sourceURL=webpack://glo-project3/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst openModal = () => {\r\n    const popupBtn = document.querySelectorAll('.popup-btn');\r\n    const popup = document.querySelector('.popup');\r\n    const popupClose = document.querySelector('.popup-close');\r\n    const popupContent = document.querySelector('.popup-content');\r\n\r\n    let counter = 0;\r\n\r\n    const closeModal = () => {\r\n        popup.style.display = 'none';\r\n        document.body.style.overflowY = '';\r\n        counter = 0;\r\n    };\r\n\r\n    popupBtn.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            popup.style.display = 'flex';\r\n\r\n            if (window.screen.width > 768) {\r\n                a();\r\n            };\r\n\r\n            function a() {\r\n                let b = requestAnimationFrame(a);\r\n                counter += 4;\r\n                popupContent.style.left = counter+'%'\r\n\r\n                if (counter === 40) cancelAnimationFrame(b);\r\n            };\r\n            \r\n            document.body.style.overflowY = 'hidden';\r\n            \r\n            item.addEventListener('keydown', event => {\r\n                if (event.keyCode === 27) closeModal();\r\n            });\r\n        });\r\n    });\r\n\r\n    popupClose.addEventListener('click', closeModal);\r\n\r\n    popup.addEventListener('click', event => {\r\n        if (event.target.classList.contains('popup')) closeModal();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n//# sourceURL=webpack://glo-project3/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/regular.js":
/*!********************************!*\
  !*** ./src/modules/regular.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst checkRegExp = () => {\r\n    const calcItem = document.querySelectorAll('.calc_reg');\r\n    const messInput = document.querySelector('.mess');\r\n    const emailInput = document.querySelectorAll('[type=\"email\"]');\r\n    const telInput = document.querySelectorAll('[type=\"tel\"]');\r\n\r\n    calcItem.forEach(item => {\r\n        item.addEventListener('blur', elem => {\r\n            let protectCalc = elem.target.value.toLowerCase().match(/[a0-9z-а0-9я]/g).join('');\r\n            protectCalc = protectCalc.replace(/[a-z-а-я]/g, '');\r\n            elem.target.value = protectCalc;\r\n        });\r\n    });\r\n\r\n    messInput.addEventListener('blur', elem => {\r\n        let protect;\r\n\r\n        if (elem.target.value.match(/[\\а-яА-Я\\-?\\s]+/g)) {\r\n            protect = elem.target.value.toLowerCase().match(/[\\а-яА-Я\\-?\\s]+/g).join('').trim();\r\n\r\n            protect = protect.replace(/\\-+$/g, '');\r\n            protect = protect.replace(/^\\-+/g, '');\r\n            protect = protect.replace(/\\s{2,}/g, ' ');\r\n            protect = protect.replace(/\\-{2,}/g, '-');\r\n\r\n            let splited = protect[0].toUpperCase();\r\n            let splited2 = [...protect].splice(1, );\r\n\r\n            splited2.unshift(splited);\r\n            splited2 = splited2.join(''); \r\n\r\n            elem.target.value = splited2;\r\n        } else {\r\n            elem.target.value = ''   ;\r\n        };\r\n    });\r\n\r\n    emailInput.forEach(item => {\r\n        item.addEventListener('blur', elem => {\r\n            console.log(elem.target.value.toLowerCase().match(/[^\\a-zA-Z?\\.?\\-?\\_?\\!?\\~?\\*?\\'?\\@]+$/g, ''));\r\n        });\r\n    });\r\n/*\r\n    telInput.forEach(item => {\r\n        item.addEventListener('input', elem => {\r\n            elem.target.value = elem.target.value.replace(/[^\\d\\-\\()]+/g, '');\r\n        });\r\n    }); */\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkRegExp);\n\n//# sourceURL=webpack://glo-project3/./src/modules/regular.js?");

/***/ }),

/***/ "./src/modules/time.js":
/*!*****************************!*\
  !*** ./src/modules/time.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (dateUserDeadline) => {\r\n    const timerDays = document.querySelector('.timer-days');\r\n    const timerHours = document.querySelector('.timer-hours');\r\n    const timerMinutes = document.querySelector('.timer-minutes');\r\n    const timerSeconds = document.querySelector('.timer-seconds');\r\n\r\n    let startTimer = () => {\r\n        const dateToday = Date.parse(new Date);\r\n        const dateDeadline = new Date(dateUserDeadline).getTime();\r\n\r\n        const resul = (dateDeadline - dateToday) / 1000 ;\r\n\r\n        const seconds = parseInt(resul % 60);\r\n        const minutes = parseInt((resul / 60) % 60);\r\n        const hours = parseInt((resul / 3600) % 24);\r\n        const days = parseInt(resul / 90000);\r\n\r\n        return {resul, seconds, minutes, hours, days};\r\n    };\r\n\r\n    let createTimer = () => {\r\n        setInterval(() => {\r\n            const {resul, seconds, minutes, hours, days} = startTimer();\r\n\r\n            if (resul > 0) {\r\n                days >= 10 ? timerDays.textContent = days : timerDays.textContent = '0' + days;\r\n                hours >= 10 ? timerHours.textContent = hours : timerHours.textContent = '0' + hours;\r\n                minutes >= 10 ? timerMinutes.textContent = minutes : timerMinutes.textContent = '0' + minutes;\r\n                seconds >= 10 ? timerSeconds.textContent = seconds : timerSeconds.textContent = '0' + seconds;\r\n            } else {\r\n                timerDays.textContent = '00';\r\n                timerHours.textContent = '00';\r\n                timerMinutes.textContent = '00';\r\n                timerSeconds.textContent = '00';\r\n                return;\r\n            }\r\n        }, 1000);\r\n    };\r\n    \r\n    createTimer();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer); \n\n//# sourceURL=webpack://glo-project3/./src/modules/time.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;