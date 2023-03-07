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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/time */ \"./src/modules/time.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./src/modules/regular.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculated */ \"./src/modules/calculated.js\");\n/* harmony import */ var _modules_db_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/db-fetch */ \"./src/modules/db-fetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 march 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calculated__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_db_fetch__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack://glo-project3/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculated.js":
/*!***********************************!*\
  !*** ./src/modules/calculated.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst createCalc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    let typeInterior;\r\n    let quentRoom;\r\n    let dayRealease;\r\n    let tally;\r\n\r\n    const fooAnimated = (a) => {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 100,\r\n\r\n            timing(timeFraction) {\r\n              return timeFraction;\r\n            },\r\n\r\n            draw(progress) {\r\n                total.textContent = parseInt(progress * a);\r\n            },\r\n        });\r\n    };\r\n\r\n    const countCalc = () => {\r\n        if (calcType.selectedIndex !== 0) {\r\n            typeInterior = +calcType[calcType.selectedIndex].value;\r\n\r\n            calcSquare.style.opacity = 1;\r\n            calcSquare.style.borderColor = '#19b5fe';\r\n            calcSquare.disabled = false;\r\n        } else {\r\n            calcSquare.style.opacity = '';\r\n            calcSquare.style.borderColor = '';\r\n            calcSquare.disabled = true;\r\n            calcSquare.value = '';\r\n            total.textContent = 0;\r\n        };\r\n\r\n        if (calcSquare.value !== '') {  \r\n            calcCount.style.opacity = 1;\r\n            calcCount.style.borderColor = '#19b5fe';\r\n            calcCount.disabled = false;\r\n\r\n            tally = Math.ceil(typeInterior * calcSquare.value * price);\r\n\r\n            fooAnimated(tally)\r\n        } else {\r\n            calcCount.style.opacity = '';\r\n            calcCount.style.borderColor = '';\r\n            calcCount.disabled = true;\r\n            calcCount.value = '';\r\n            total.textContent = 0;\r\n        };\r\n\r\n        if (calcCount.value !== '') {\r\n            quentRoom = 1;\r\n            calcCount.value > 1 ? quentRoom += calcCount.value / 10 : quentRoom = 1;\r\n\r\n            calcDay.style.opacity = 1;\r\n            calcDay.style.borderColor = '#19b5fe';\r\n            calcDay.disabled = false;\r\n\r\n            tally = Math.ceil(tally * quentRoom);\r\n\r\n            fooAnimated(tally)\r\n        } else {\r\n            calcDay.style.opacity = '';\r\n            calcDay.style.borderColor = '';\r\n            calcDay.disabled = true;\r\n            calcDay.value = '';\r\n        };\r\n\r\n        if (calcDay.value !== '') {\r\n            calcDay.value < 5 ? dayRealease = 2 : calcDay.value < 10 ? dayRealease = 1.5 : dayRealease = 1;\r\n\r\n            tally = Math.ceil(tally * dayRealease);\r\n\r\n            fooAnimated(tally)\r\n        };\r\n    };\r\n\r\n    calcBlock.addEventListener('input', () => {\r\n        countCalc();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCalc);\n\n//# sourceURL=webpack://glo-project3/./src/modules/calculated.js?");

/***/ }),

/***/ "./src/modules/db-fetch.js":
/*!*********************************!*\
  !*** ./src/modules/db-fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst getDb = () => {\r\n    const sendData = (obj, url) => {\r\n\r\n        return fetch(url, {\r\n            method: 'POST',\r\n\r\n            body: obj,\r\n\r\n            headers: {\r\n              'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n        }).then((respone) => respone.json()).then((obj) => console.log(obj)).catch(() => console.log('error'));\r\n    };\r\n\r\n    const getData = () => {\r\n        const fet = fetch('../db.json');\r\n        let save;\r\n\r\n        function add(g) {\r\n            save = g;\r\n            console.log(save);\r\n        };\r\n    \r\n        fet.then((response) => response.json()).then((obj) => add(JSON.stringify(obj))).catch(() => console.log('error'));;\r\n\r\n        sendData(save, 'https://jsonplaceholder.typicode.com/posts');\r\n    };\r\n\r\n    getData();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDb);\n\n//# sourceURL=webpack://glo-project3/./src/modules/db-fetch.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({timing, draw, duration}) => {\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress);\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://glo-project3/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst CreateMenu = () => {\r\n    const menu = document.querySelector('menu');\r\n    const listBtn = document.querySelectorAll('.list_btn');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    listBtn.forEach(elem => {\r\n        elem.addEventListener('click', event => {\r\n            if (event.target.getAttribute('href') && event.target.classList.contains('close-modal')) {\r\n                event.preventDefault();\r\n                const id = event.target.getAttribute('href');\r\n\r\n                document.querySelector(id).scrollIntoView({\r\n                    behavior: 'smooth',\r\n                    block: 'start',\r\n                });  \r\n            };\r\n        });\r\n    });\r\n\r\n    document.addEventListener('click', event => {\r\n        if (menu.classList.contains('active-menu') && !event.target.closest('.active-menu')) {\r\n            handleMenu();\r\n        } else {\r\n            if (event.target.classList.contains('close-modal')) handleMenu();\r\n            if (event.target.classList.contains('menu') || event.target.closest('.menu')) handleMenu();\r\n        };\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMenu); \n\n//# sourceURL=webpack://glo-project3/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst openModal = () => {\r\n    const popupBtn = document.querySelectorAll('.popup-btn');\r\n    const popup = document.querySelector('.popup');\r\n    const popupContent = document.querySelector('.popup-content');\r\n\r\n    let counter = 0;\r\n\r\n    const closeModal = () => {\r\n        popup.style.display = 'none';\r\n        document.body.style.overflowY = '';\r\n        counter = 0;\r\n    };\r\n\r\n    popupBtn.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            popup.style.display = 'flex';\r\n\r\n            if (window.screen.width > 768) a();\r\n            \r\n            function a() {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 250,\r\n\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n\r\n                    draw(progress) {\r\n                      popupContent.style.left = progress * 40 + '%';\r\n                    },\r\n                  });\r\n            };\r\n            \r\n            document.body.style.overflowY = 'hidden';\r\n            \r\n            item.addEventListener('keydown', event => {\r\n                if (event.keyCode === 27) closeModal();\r\n            });\r\n        });\r\n    });\r\n    \r\n\r\n    popup.addEventListener('click', event => {\r\n        if (event.target.classList.contains('popup') || event.target.classList.contains('popup-close')) closeModal();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n//# sourceURL=webpack://glo-project3/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/regular.js":
/*!********************************!*\
  !*** ./src/modules/regular.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst checkRegExp = () => {\r\n    const calcItem = document.querySelectorAll('.calc_reg');\r\n    const messInput = document.querySelector('.mess');\r\n    const emailInput = document.querySelectorAll('[type=\"email\"]');\r\n    const telInput = document.querySelectorAll('[type=\"tel\"]');\r\n\r\n    calcItem.forEach(item => {\r\n        item.addEventListener('input', elem => {\r\n            elem.target.value = elem.target.value.replace(/\\D+/g, '')\r\n        });\r\n    });\r\n\r\n    messInput.addEventListener('input', elem => {\r\n        elem.target.value = elem.target.value.replace(/[^\\а-яА-Я\\-?\\s]+$/g, '')\r\n    });\r\n\r\n    emailInput.forEach(item => {\r\n        item.addEventListener('input', elem => {\r\n            elem.target.value = elem.target.value.replace(/[^\\a-zA-Z0-9?\\.?\\-?\\_?\\!?\\~?\\*?\\'?\\@]+$/g, '')\r\n        });\r\n    });\r\n\r\n    telInput.forEach(item => {\r\n        item.addEventListener('input', elem => {\r\n            elem.target.value = elem.target.value.replace(/[^\\d\\-\\()]+/g, '');\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkRegExp);\n\n//# sourceURL=webpack://glo-project3/./src/modules/regular.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createSlider = () => {\r\n    const portfolioItem = document.querySelectorAll('.portfolio-item');\r\n    const portfolioContent = document.querySelector('.portfolio-content');\r\n    const portfolioDots = document.querySelector('.portfolio-dots');\r\n\r\n    let counter = 0;\r\n    let interFoo;\r\n    let text;\r\n\r\n    portfolioItem.forEach((item, index) => {\r\n        index === 0 ? text = `<li class=\"dot dot-active\"></li>` : text = `<li class=\"dot\"></li>`;\r\n\r\n        portfolioDots.innerHTML += text;\r\n    });\r\n\r\n    const dot = document.querySelectorAll('.dot');\r\n\r\n    const swipepSlider = () => {\r\n        portfolioContent.addEventListener('click', event => {\r\n            if (event.target.classList.contains('next')) {\r\n                event.preventDefault();\r\n\r\n                portfolioItem[counter].classList.remove('portfolio-item-active');\r\n                dot[counter].classList.remove('dot-active');\r\n\r\n                counter++;\r\n\r\n                if (counter >= portfolioItem.length) counter = 0;\r\n\r\n                portfolioItem[counter].classList.add('portfolio-item-active');\r\n                dot[counter].classList.add('dot-active');\r\n            };\r\n\r\n            if (event.target.classList.contains('prev')) {\r\n                event.preventDefault();\r\n\r\n                portfolioItem[counter].classList.remove('portfolio-item-active');\r\n                dot[counter].classList.remove('dot-active');\r\n\r\n                counter--;\r\n\r\n                if (counter < 0) counter = portfolioItem.length - 1;\r\n\r\n                portfolioItem[counter].classList.add('portfolio-item-active');\r\n                dot[counter].classList.add('dot-active');\r\n            };\r\n        });\r\n\r\n            dot.forEach((item, index) => {\r\n                item.addEventListener('click', event => {\r\n                    portfolioItem[counter].classList.remove('portfolio-item-active');\r\n                    dot[counter].classList.remove('dot-active');\r\n\r\n                    portfolioItem[index].classList.add('portfolio-item-active');\r\n                    dot[index].classList.add('dot-active');\r\n\r\n                    counter = index;\r\n                });\r\n            });\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        portfolioItem[counter].classList.remove('portfolio-item-active');\r\n        dot[counter].classList.remove('dot-active');\r\n\r\n        counter++;\r\n\r\n        if (counter >= portfolioItem.length) counter = 0;\r\n\r\n        portfolioItem[counter].classList.add('portfolio-item-active');\r\n        dot[counter].classList.add('dot-active');\r\n    };\r\n\r\n    const stopSlider = () => {\r\n        portfolioContent.addEventListener('mouseenter', () => clearInterval(interFoo));\r\n        portfolioContent.addEventListener('mouseleave', () => interFoo = setInterval(autoSlide, 2000));\r\n    };\r\n\r\n    const startSlider = () => {\r\n        interFoo = setInterval(autoSlide, 2000);\r\n\r\n        stopSlider();\r\n        swipepSlider();\r\n    };\r\n\r\n    startSlider();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSlider);\n\n//# sourceURL=webpack://glo-project3/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst switchTabs = () => {\r\n    const serviceHeaderTab = document.querySelectorAll('.service-header-tab');\r\n    const serviceTab = document.querySelectorAll('.service-tab');\r\n    let dataTab;\r\n\r\n    serviceHeaderTab.forEach(elem => {\r\n        elem.addEventListener('click', () => {\r\n            \r\n            serviceHeaderTab.forEach(div => {\r\n                div.classList.remove('active');\r\n            });\r\n\r\n            elem.classList.add('active');\r\n\r\n            serviceTab.forEach(item => {\r\n                item.classList.add('d-none');\r\n            });\r\n\r\n            dataTab = elem.dataset.tab;\r\n\r\n            document.querySelector(dataTab).classList.remove('d-none');\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchTabs);\n\n//# sourceURL=webpack://glo-project3/./src/modules/tabs.js?");

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