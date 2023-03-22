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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/SpaceInvaders/spaceInvaders.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/SpaceInvaders/assets/images/spaceship.png":
/*!**********************************************************!*\
  !*** ./src/js/SpaceInvaders/assets/images/spaceship.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/images/spaceship.png");

/***/ }),

/***/ "./src/js/SpaceInvaders/spaceInvaders.js":
/*!***********************************************!*\
  !*** ./src/js/SpaceInvaders/spaceInvaders.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_spaceship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/spaceship.png */ "./src/js/SpaceInvaders/assets/images/spaceship.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
 // Get header element height

var headerHeight = document.querySelector('header').offsetHeight; // Set canvas width and height

canvas.width = innerWidth;
canvas.height = innerHeight - headerHeight;

var Player = /*#__PURE__*/function () {
  function Player() {
    var _this = this;

    _classCallCheck(this, Player);

    this.velocity = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    var image = new Image();
    image.src = _assets_images_spaceship_png__WEBPACK_IMPORTED_MODULE_0__["default"];

    image.onload = function () {
      var scale = 0.15;
      _this.image = image;
      _this.width = image.width * scale;
      _this.height = image.height * scale;
      _this.position = {
        x: canvas.width / 2 - _this.width / 2,
        y: canvas.height - _this.height - 20
      };
    };
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red';
      // c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.save();
      c.translate(player.position.x + player.width / 5, player.position.y + player.height / 5);
      c.rotate(this.rotation);
      c.translate(-player.position.x + player.width / 5, -player.position.y + player.height / 5);
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.image) {
        this.draw();
        this.position.x += this.velocity.x;
      }
    }
  }]);

  return Player;
}();

var player = new Player();
var keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  space: {
    pressed: false
  }
};

var animate = function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed && player.position.x > 0) {
    player.velocity.x = -5;
    player.rotation = -.15;
  } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
    player.velocity.x = 5;
    player.rotation = .15;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
  }
};

animate();
addEventListener('keydown', function (_ref) {
  var key = _ref.key;

  switch (key) {
    case 'a':
      console.log('left');
      keys.a.pressed = true;
      break;

    case 'd':
      console.log('right');
      keys.d.pressed = true;
      break;

    case ' ':
      console.log('space');
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case 'a':
      console.log('left');
      keys.a.pressed = false;
      break;

    case 'd':
      console.log('right');
      keys.d.pressed = false;
      break;

    case ' ':
      console.log('space');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=spaceInvaders.bundle.js.map