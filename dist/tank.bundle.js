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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bot.js/tank.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bot.js/tank.js":
/*!************************!*\
  !*** ./bot.js/tank.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let i = 300;\r\nlet i1 = 450;\r\nlet m = 100;\r\nlet m1 = 50;\r\nlet game = document.getElementById('game');\r\nlet gameMag = document.getElementById('gameMag');\r\nlet panel = document.getElementById('panelMagic');\r\nlet infoMagic = document.getElementById('infoMagic');\r\nlet infoMagic1 = document.getElementById('infoMagic1');\r\nlet infoMagic2 = document.getElementById('infoMagic2');\r\nlet HP = document.getElementById('HP');\r\nlet MP = document.getElementById('MP');\r\n\r\n\r\nfunction HPMP() {\r\n\r\n    HP.innerHTML = ('<a class=\"HPMP\"> У вас '+ i +' жизней </a> <a class=\"HPMP\"> У викинга '+ i1+' жизней </a>');\r\n    MP.innerHTML = ('<a class=\"HPMP\"> У вас '+ m +' маны &nbsp;&nbsp;</a> <a class=\"HPMP\"> У викинга '+ m1+' маны </a>');\r\n}\r\n\r\n\r\nfunction final() {\r\n        if (i<=0) {\r\n        let g = ('Вы убиты');\r\n        game.innerHTML = g\r\n        if (i1<=0) {\r\n            game.innerHTML = ('Вы оба погибли')\r\n            gameMag.innerHTML = ('');\r\n            }\r\n        }\r\n    else if (i1<=0) {\r\n        let g = ('Викинг убит');\r\n        game.innerHTML = g\r\n        gameMag.innerHTML = ('');         \r\n}\r\n}\r\n\r\nHPMP();\r\n        \r\ndocument.getElementById('ataka').onclick = function ataka() {\r\n    if (i>0 && i1>0) {\r\n        let r = Math.random();\r\n        if (r>=0.1) {\r\n            let z = Math.ceil(Math.random() * 80);\r\n            let z1 = Math.ceil(Math.random() * 80);\r\n                if (z>z1){\r\n                    i1 -= z\r\n                    HPMP();\r\n                    game.innerHTML = ('Пробив защиту викинга вы нанесли '+z+' урона');\r\n                    gameMag.innerHTML = ('');\r\n                    \r\n                }\r\n                else if (z<=z1){\r\n                    i -= z\r\n                    HPMP();\r\n                    game.innerHTML = ('Викинг блокировал '+z+' урона');\r\n                    gameMag.innerHTML = ('');\r\n                }\r\n        }\r\n        else if (r<0.1) {\r\n            let z = Math.ceil(Math.random() * 30);\r\n            let z1 = Math.ceil(Math.random() * 50);\r\n            i -= z\r\n            i1 -= z1\r\n            HPMP();\r\n            game.innerHTML = ('Вы нанесли ' +z1+ ' урона викингу <br> <br> Вам нанесли '+z+ ' урона'); \r\n            gameMag.innerHTML = ('');\r\n    }\r\n        }\r\n    \r\n    final()\r\n            \r\n     }\r\n\r\n    document.getElementById('block').onclick = function block() {\r\n    if (i>0 && i1>0) {\r\n        let r = Math.random();\r\n        if (r<=0.3) {\r\n            let z = Math.ceil(Math.random() * 80);\r\n            let z1 = Math.ceil(Math.random() * 80);\r\n                if ( z>z1) {\r\n                i -= z\r\n                HPMP();\r\n                gameMag.innerHTML = ('');\r\n                game.innerHTML = ('Викинг пробив блок нанес '+z+' урона');\r\n            }\r\n                else {\r\n                i1 -= z\r\n                HPMP();\r\n                gameMag.innerHTML = ('');\r\n                game.innerHTML = ('Вы блокировали '+z+' урона');\r\n            }\r\n    }\r\n\r\n        else if (r>0.3) {\r\n            gameMag.innerHTML = ('');\r\n            game.innerHTML = ('Викинг и вы заняли оборонительные стойки');\r\n        }\r\n    \r\n    final()\r\n    }\r\n            \r\n     }\r\n\r\n    document.getElementById('magic').onclick = function magic() {\r\n    if (i>0 && i1>0 && m>0 && m1>0) {\r\n            document.querySelector('.but_mag').style.display = 'flex';\r\n            infoMagic.innerHTML =  ('<div><a class=\"inf\"> Верятность срабатывания: 50%</a> <a class=\"inf\"> Верятность срабатывания: 30% </a></div>')\r\n            infoMagic1.innerHTML = ('<div><a class=\"inf\">  Сила 1-50 </a> <a class=\"inf\"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сила 50-150 </a></div>')\r\n            infoMagic2.innerHTML = ('<div><a class=\"inf\"> Требует маны: 50 </a> <a class=\"inf\">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Требует маны: 100 </a></div>')\r\n            let z = Math.ceil(Math.random() * 30);\r\n            i -= z\r\n            HPMP();\r\n            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим викинг нанес '+z+ ' урона'); \r\n            document.getElementById('magic').hidden = true;\r\n        \r\n        }\r\n        \r\n    }\r\n\r\n    document.getElementById('heal').onclick = function heal() {\r\n    if (m>49) {\r\n        let r = Math.random();\r\n            if (r>=0.5 && m1<49){\r\n                let z = Math.ceil(Math.random() * 50);\r\n                i += z\r\n                m -= 50\r\n                HPMP();\r\n                game.innerHTML = ('Удачно! Вы востановили '+z+' жизней');\r\n                gameMag.innerHTML = (''); \r\n            }\r\n            if (r>= 0.5 && m1>49) {\r\n                let r = Math.random();\r\n                    if (r>=0.5) {\r\n                        let z = Math.ceil(Math.random() * 50);\r\n                        i1 += z\r\n                        m -= 50\r\n                        m1 -= 50\r\n                        HPMP();\r\n                        game.innerHTML = ('Викинг применил антимагию и забрал ваше востановление '+z+' жизней на себя!');\r\n                        gameMag.innerHTML = (''); \r\n                    }\r\n                    else {\r\n                        let z = Math.ceil(Math.random() * 50);\r\n                        i += z\r\n                        m -= 50\r\n                        m1 -= 50\r\n                        HPMP();\r\n                        game.innerHTML = ('Викинг применил антимагию, но вы смогли удачно востановить '+z+' жизней');\r\n                        gameMag.innerHTML = (''); \r\n                    }\r\n            } \r\n        if (r<0.5) {\r\n            m-= 50\r\n               HPMP();\r\n                game.innerHTML = ('Неудачно!');\r\n                gameMag.innerHTML = ('');\r\n        }\r\n\r\n    }\r\n    else {\r\n        alert('Недостаточно маны!');\r\n \r\n    }\r\n}\r\n            \r\ndocument.getElementById('fire').onclick = function fire() {\r\n        if (i>0 && i1>0 && m>99) {\r\n            let r = Math.random();\r\n            if (r>=0.7 && m1<49){\r\n                let z = Math.ceil(Math.random() * (150-50) + 50);\r\n                i1 -= z\r\n                m -= 100\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли ' +z+ ' урона викингу');\r\n                }\r\n            if (r>=0.7 && m1>49){\r\n                let r = Math.random();\r\n                    if (r>=0.5) {\r\n                        let z = Math.ceil(Math.random() * (150-50) + 50);\r\n                        i -= z\r\n                        m -= 100\r\n                        m1 -= 50\r\n                        HPMP();\r\n                        game.innerHTML = (\" \");\r\n                        gameMag.innerHTML = ('Викинг применил антимагию и отразил ваш огненый шар, вы получили ' +z+ ' урона!'); \r\n                    }\r\n                    else {\r\n                        let z = Math.ceil(Math.random() * (150-50) + 50);\r\n                        i1 -= z\r\n                        m -= 100\r\n                        m1 -= 50\r\n                        HPMP();\r\n                        game.innerHTML = (\" \");\r\n                        gameMag.innerHTML = ('Викинг применил неудачно антимагию и вы нанесли ' +z+ ' урона огненым шаром викингу');\r\n                    }\r\n                }\r\n            if (r<0.7) {\r\n                let z = Math.ceil(Math.random() * (150-50) + 50);\r\n                i -= z\r\n                m -= 100\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли ' +z+ ' урона себе');\r\n            }\r\n\r\n        \r\n    }\r\n    else {\r\n        alert('Недостаточно маны!');\r\n \r\n    }  \r\n    final()\r\n    }\r\n\r\n    document.getElementById('anti').onclick = function anti() {\r\n        if (m>24 && m1>1) {\r\n        let r = Math.random();\r\n            if (r>=0.7){\r\n                let z = Math.ceil(Math.random() * 50);\r\n                m1 -= z\r\n                m += z\r\n                m -= 25\r\n                HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали '+z+' маны'); \r\n            }\r\n        else {\r\n            let z = Math.ceil(Math.random() * 50);\r\n            m1 -= z\r\n            m-= 25\r\n               HPMP();\r\n                block();\r\n                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь '+z+' маны противнику');\r\n\r\n    }\r\n        }\r\n        else if (m1<1) {\r\n        alert('У противника недостаточно маны!');\r\n \r\n    }\r\n        \r\n    else if (m<1) {\r\n        alert('Недостаточно маны!');\r\n \r\n    }\r\n        }\r\n\r\nfunction error() {\r\n    alert('В разработке!');\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./bot.js/tank.js?");

/***/ })

/******/ });