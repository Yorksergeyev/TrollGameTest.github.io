/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bot.js/boss.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bot.js/boss.js":
/*!************************!*\
  !*** ./bot.js/boss.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let i = 300;\r\nlet i1 = 600;\r\nlet m = 100;\r\nlet m1 = 0;\r\nlet game = document.getElementById('game');\r\nlet gameMag = document.getElementById('gameMag');\r\nlet panel = document.getElementById('panelMagic');\r\nlet infoMagic = document.getElementById('infoMagic');\r\nlet infoMagic1 = document.getElementById('infoMagic1');\r\nlet infoMagic2 = document.getElementById('infoMagic2');\r\nlet HP = document.getElementById('HP');\r\nlet MP = document.getElementById('MP');\r\n\r\n\r\nfunction HPMP() {\r\n\r\n    HP.innerHTML = ('<a class=\"HPMP\"> У вас '+ i +' жизней </a> <a class=\"HPMP\"> У троля '+ i1+' жизней </a>');\r\n    MP.innerHTML = ('<a class=\"HPMP\"> У вас '+ m +' маны &nbsp;&nbsp;</a> <a class=\"HPMP\"> У троля '+ m1+' маны </a>');\r\n}\r\n\r\n\r\nfunction final() {\r\n        if (i<=0) {\r\n        let g = ('Вы убиты');\r\n        game.innerHTML = g\r\n        if (i1<=0) {\r\n            game.innerHTML = ('Вы оба погибли')\r\n            gameMag.innerHTML = ('');\r\n            }\r\n        }\r\n    else if (i1<=0) {\r\n        let g = ('Троль убит');\r\n        game.innerHTML = g\r\n        gameMag.innerHTML = ('');         \r\n}\r\n}\r\n\r\nHPMP();\r\n        \r\ndocument.getElementById('ataka').onclick = function ataka() {\r\n    if (i>0 && i1>0) {\r\n        let r = Math.random();\r\n        if (r>=0.75) {\r\n            let z = Math.ceil(Math.random() * 100);\r\n            let z1 = Math.ceil(Math.random() * 150);\r\n                if (z>z1){\r\n                    i1 -= z\r\n                    HPMP();\r\n                    game.innerHTML = ('Пробив защиту троля вы нанесли '+z+' урона');\r\n                    gameMag.innerHTML = ('');\r\n                    \r\n                }\r\n                else if (z<=z1){\r\n                    i -= z\r\n                    HPMP();\r\n                    game.innerHTML = ('Троль блокировал '+z+' урона');\r\n                    gameMag.innerHTML = ('');\r\n                }\r\n        }\r\n        else if (r<0.75) {\r\n            let z = Math.ceil(Math.random() * 80);\r\n            let z1 = Math.ceil(Math.random() * 50);\r\n            i -= z\r\n            i1 -= z1\r\n            HPMP();\r\n            game.innerHTML = ('Вы нанесли ' +z1+ ' урона тролю <br> <br> Вам нанесли '+z+ ' урона'); \r\n            gameMag.innerHTML = ('');\r\n    }\r\n        }\r\n    \r\n    final()\r\n            \r\n     }\r\n\r\n     document.getElementById('block').onclick = function block() {\r\n    if (i>0 && i1>0) {\r\n        let r = Math.random();\r\n        if (r>=0.05) {\r\n            let z = Math.ceil(Math.random() * 100);\r\n            let z1 = Math.ceil(Math.random() * 90);\r\n                if ( z>z1) {\r\n                i -= z\r\n                HPMP();\r\n                gameMag.innerHTML = ('');\r\n                game.innerHTML = ('Троль пробив блок нанес '+z+' урона');\r\n            }\r\n                else {\r\n                i1 -= z\r\n                HPMP();\r\n                gameMag.innerHTML = ('');\r\n                game.innerHTML = ('Вы блокировали '+z+' урона');\r\n            }\r\n    }\r\n\r\n        else if (r<0.05) {\r\n            gameMag.innerHTML = ('');\r\n            game.innerHTML = ('Троль и вы заняли оборонительные стойки');\r\n        }\r\n    \r\n    final()\r\n    }\r\n            \r\n     }\r\n\r\n    document.getElementById('magic').onclick = function magic() {\r\n    if (i>0 && i1>0 && m>0) {\r\n            document.querySelector('.but_mag').style.display = 'flex';\r\n            infoMagic.innerHTML =  ('<div><a class=\"inf\"> Верятность срабатывания: 70%</a> <a class=\"inf\"> Верятность срабатывания: 70% </a></div>')\r\n            infoMagic1.innerHTML = ('<div><a class=\"inf\">  Сила 25-75 </a> <a class=\"inf\"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сила 100-200 </a></div>')\r\n            infoMagic2.innerHTML = ('<div><a class=\"inf\"> Требует маны: 50 </a> <a class=\"inf\">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Требует маны: 100 </a></div>')\r\n            let z = Math.ceil(Math.random() * 80);\r\n            i -= z\r\n            HPMP();\r\n            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим троль нанес '+z+ ' урона'); \r\n            document.getElementById('magic').hidden = true;\r\n        \r\n        }\r\n        \r\n    }\r\n\r\n    document.getElementById('heal').onclick = function heal() {\r\n    if (m>49) {\r\n        let r = Math.random();\r\n            if (r>=0.3){\r\n                let z = Math.ceil(Math.random() * (75-25) + 25);\r\n                i += z\r\n                m -= 50\r\n                HPMP();\r\n                game.innerHTML = ('Удачно! Вы востановили '+z+' жизней');\r\n                gameMag.innerHTML = ('');  \r\n            }\r\n        else {\r\n            m-= 50\r\n               HPMP();\r\n                game.innerHTML = ('Неудачно!');\r\n                gameMag.innerHTML = ('');\r\n        }\r\n\r\n    }\r\n    else {\r\n        alert('Недостаточно маны!');\r\n \r\n    }\r\n}\r\n            \r\ndocument.getElementById('fire').onclick = function fire() {\r\n        if (i>0 && i1>0 && m>99) {\r\n            let r = Math.random();\r\n            if (r>=0.3){\r\n                let z = Math.ceil(Math.random() * (200-100) + 100);\r\n                i1 -= z\r\n                m -= 100\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли ' +z+ ' урона тролю');\r\n                }\r\n            else {\r\n                let z = Math.ceil(Math.random() * (200-100) + 100);\r\n                i -= z\r\n                m -= 100\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли ' +z+ ' урона себе');\r\n            }\r\n\r\n        \r\n    }\r\n    else {\r\n        alert('Недостаточно маны!');\r\n \r\n    }  \r\n    final()\r\n    }\r\n\r\n    document.getElementById('anti').onclick = function anti() {\r\n        if (m>24 && m1>1) {\r\n        let r = Math.random();\r\n            if (r>=0.7){\r\n                let z = Math.ceil(Math.random() * 50);\r\n                m1 -= z\r\n                m += z\r\n                m -= 25\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали '+z+' маны'); \r\n            }\r\n        else {\r\n            let z = Math.ceil(Math.random() * 50);\r\n            m1 -= z\r\n            m-= 25\r\n               HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь '+z+' маны противнику');\r\n\r\n    }\r\n        }\r\n        else if (m1<1) {\r\n        alert('У противника недостаточно маны!');\r\n \r\n    }\r\n        \r\n    else if (m<1) {\r\n        alert('Недостаточно маны!');\r\n \r\n    }\r\n        }\r\n\r\nfunction error() {\r\n    alert('В разработке!');\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./bot.js/boss.js?");

/***/ })

/******/ });