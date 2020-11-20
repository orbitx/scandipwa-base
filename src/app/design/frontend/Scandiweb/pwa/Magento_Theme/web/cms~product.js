(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["cms~product"],{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.component.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Slider/Slider.component.js ***!
  \********************************************************************************************/
/*! exports provided: _Slider, Slider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Slider", function() { return _Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Draggable */ "../../../../../vendor/scandipwa/source/src/app/component/Draggable/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_CSS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/CSS */ "../../../../../vendor/scandipwa/source/src/app/util/CSS/index.js");
/* harmony import */ var _Slider_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slider.config */ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.config.js");
/* harmony import */ var _Slider_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slider.style */ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.style.scss");
/* harmony import */ var _Slider_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Slider_style__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-unused-state */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */








/**
 * Slider component
 * @class Slider
 * @namespace Component/Slider/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Slider =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Slider, _Extensible);

  function _Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sliderWidth", 0);

    _defineProperty(_assertThisInitialized(_this), "prevPosition", 0);

    _defineProperty(_assertThisInitialized(_this), "draggableRef",
    /*#__PURE__*/
    Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "sliderRef",
    /*#__PURE__*/
    Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", _this.handleInteraction.bind(_assertThisInitialized(_this), _this.handleDragStart));

    _defineProperty(_assertThisInitialized(_this), "handleDrag", _this.handleInteraction.bind(_assertThisInitialized(_this), _this.handleDrag));

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", _this.handleInteraction.bind(_assertThisInitialized(_this), _this.handleDragEnd));

    _defineProperty(_assertThisInitialized(_this), "renderCrumb", _this.renderCrumb.bind(_assertThisInitialized(_this)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (state, callback, e) {
      if (e.type === 'contextmenu') {
        _this.handleDragEnd(state, callback);
      }
    });

    return _this;
  }

  _createClass(_Slider, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_Slider.prototype), "__construct", this).call(this, props);

      var activeImage = this.props.activeImage;
      this.state = {
        prevActiveImage: activeImage
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.addWindowResizeWatcher();

      if (!this.getIsSlider()) {
        return;
      }

      var sliderChildren = this.draggableRef.current.children;
      var sliderWidth = this.draggableRef.current.offsetWidth;
      this.sliderWidth = sliderWidth;

      if (!sliderChildren || !sliderChildren[0]) {
        return;
      }

      sliderChildren[0].onload = function () {
        _app_design_frontend_Scandiweb_pwa_src_app_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(_this2.sliderRef, 'slider-height', "".concat(sliderChildren[0].offsetHeight, "px"));
      };

      setTimeout(function () {
        _app_design_frontend_Scandiweb_pwa_src_app_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(_this2.sliderRef, 'slider-height', "".concat(sliderChildren[0].offsetHeight, "px"));
      }, _Slider_config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION"]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevActiveImage = prevProps.activeImage;
      var activeImage = this.props.activeImage;

      if (activeImage !== prevActiveImage && this.getIsSlider()) {
        var newTranslate = -activeImage * this.getSlideWidth();
        this.setAnimationSpeedStyle(Math.abs((prevActiveImage - activeImage) * _Slider_config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION"]));
        this.setTranlateXStyle(newTranslate);
      }
    }
  }, {
    key: "addWindowResizeWatcher",
    value: function addWindowResizeWatcher() {
      var _this3 = this;

      window.addEventListener('resize', function () {
        var activeImage = _this3.props.activeImage;

        var newTranslate = -activeImage * _this3.getSlideWidth();

        _this3.setTranlateXStyle(newTranslate); // Removed animation to avoid image movement while changing window width.


        _this3.setAnimationSpeedStyle(0);

        var delay = 500;
        setTimeout(function () {
          _this3.setAnimationSpeedStyle();
        }, delay);
      });
    }
  }, {
    key: "setTranlateXStyle",
    value: function setTranlateXStyle(translate) {
      _app_design_frontend_Scandiweb_pwa_src_app_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(this.draggableRef, 'translateX', "".concat(translate, "px"));
    }
  }, {
    key: "setAnimationSpeedStyle",
    value: function setAnimationSpeedStyle() {
      var animationDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Slider_config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION"];
      _app_design_frontend_Scandiweb_pwa_src_app_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(this.draggableRef, 'animation-speed', "".concat(animationDuration, "ms"));
    }
  }, {
    key: "getIsSlider",
    value: function getIsSlider() {
      var children = this.props.children;
      return children.length !== 1;
    }
  }, {
    key: "getSlideWidth",
    value: function getSlideWidth() {
      var _ref = this.draggableRef.current || {},
          _ref$offsetWidth = _ref.offsetWidth,
          offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth;

      return offsetWidth;
    }
  }, {
    key: "onClickChangeSlide",
    value: function onClickChangeSlide(state, slideSize, lastTranslate, fullSliderSize) {
      var originalX = state.originalX;
      var prevActiveSlider = this.state.prevActiveImage;
      var _this$props = this.props,
          onActiveImageChange = _this$props.onActiveImageChange,
          device = _this$props.device;
      var fullSliderPoss = Math.round(fullSliderSize / slideSize);
      var elementPossitionInDOM = this.draggableRef.current.getBoundingClientRect().x;
      var sliderPossition = -prevActiveSlider;
      var realElementPossitionInDOM = elementPossitionInDOM - lastTranslate;
      var mousePossitionInElement = originalX - realElementPossitionInDOM;

      if (device.isMobile) {
        return sliderPossition;
      }

      if (slideSize / 2 < mousePossitionInElement && -fullSliderPoss < sliderPossition) {
        var activeSlide = sliderPossition - 1;
        onActiveImageChange(-activeSlide);
        return activeSlide;
      }

      if (slideSize / 2 > mousePossitionInElement && lastTranslate) {
        var _activeSlide = sliderPossition + 1;

        onActiveImageChange(-_activeSlide);
        return _activeSlide;
      }

      return sliderPossition;
    }
  }, {
    key: "getFullSliderWidth",
    value: function getFullSliderWidth() {
      var fullSliderWidth = this.draggableRef.current.scrollWidth;
      return fullSliderWidth - this.getSlideWidth();
    }
  }, {
    key: "calculateNextSlide",
    value: function calculateNextSlide(state) {
      var translate = state.translateX,
          lastTranslate = state.lastTranslateX;
      var onActiveImageChange = this.props.onActiveImageChange;
      var slideSize = this.getSlideWidth();
      var fullSliderSize = this.getFullSliderWidth();
      var activeSlidePosition = translate / slideSize;
      var activeSlidePercent = Math.abs(activeSlidePosition % 1);
      var isSlideBack = translate > lastTranslate;

      if (!translate) {
        return this.onClickChangeSlide(state, slideSize, lastTranslate, fullSliderSize);
      }

      if (translate >= 0) {
        onActiveImageChange(0);
        return 0;
      }

      if (translate < -fullSliderSize) {
        var _activeSlide2 = Math.round(fullSliderSize / -slideSize);

        onActiveImageChange(-_activeSlide2);
        return _activeSlide2;
      }

      if (isSlideBack && activeSlidePercent < 1 - _Slider_config__WEBPACK_IMPORTED_MODULE_6__["ACTIVE_SLIDE_PERCENT"]) {
        var _activeSlide3 = Math.ceil(activeSlidePosition);

        onActiveImageChange(-_activeSlide3);
        return _activeSlide3;
      }

      if (!isSlideBack && activeSlidePercent > _Slider_config__WEBPACK_IMPORTED_MODULE_6__["ACTIVE_SLIDE_PERCENT"]) {
        var _activeSlide4 = Math.floor(activeSlidePosition);

        onActiveImageChange(-_activeSlide4);
        return _activeSlide4;
      }

      var activeSlide = Math.round(activeSlidePosition);
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart() {
      this.setAnimationSpeedStyle(0);
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(state) {
      var translateX = state.translateX;
      var translate = translateX;
      var fullSliderSize = this.getFullSliderWidth();

      if (translate < 0 && translate > -fullSliderSize) {
        this.setTranlateXStyle(translate);
      }
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(state, callback) {
      var activeSlide = this.calculateNextSlide(state);
      var slideSize = this.getSlideWidth();
      var newTranslate = activeSlide * slideSize;
      this.setAnimationSpeedStyle();
      this.setTranlateXStyle(newTranslate);
      callback({
        originalX: newTranslate,
        lastTranslateX: newTranslate
      });
    }
  }, {
    key: "handleInteraction",
    value: function handleInteraction(callback) {
      var isInteractionDisabled = this.props.isInteractionDisabled;

      if (isInteractionDisabled || !callback) {
        return;
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      callback.call.apply(callback, [this].concat(args));
    }
  }, {
    key: "changeActiveImage",
    value: function changeActiveImage(activeImage) {
      var onActiveImageChange = this.props.onActiveImageChange;
      onActiveImageChange(activeImage);
    }
  }, {
    key: "renderCrumbs",
    value: function renderCrumbs() {
      var children = this.props.children;

      if (children.length <= 1) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Slider",
          elem: "Crumbs"
        }, react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, this.renderCrumb))
      );
    }
  }, {
    key: "renderCrumb",
    value: function renderCrumb(_, i) {
      var _this4 = this;

      var activeImage = this.props.activeImage;
      var isActive = i === Math.abs(-activeImage);
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Slider",
          elem: "Image",
          mods: {
            type: 'single'
          } // eslint-disable-next-line react/jsx-no-bind
          ,
          onClick: function onClick() {
            return _this4.changeActiveImage(i);
          }
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Slider",
          elem: "Crumb",
          mods: {
            isActive: isActive
          }
        }))
      );
    }
  }, {
    key: "renderSliderContent",
    value: function renderSliderContent() {
      var _this$props2 = this.props,
          activeImage = _this$props2.activeImage,
          children = _this$props2.children;

      if (!this.getIsSlider()) {
        return children;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Draggable__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mix: {
            block: 'Slider',
            elem: 'Wrapper'
          },
          draggableRef: this.draggableRef,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          onDrag: this.handleDrag,
          onClick: this.handleClick,
          shiftX: -activeImage * this.getSlideWidth()
        }, children)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showCrumbs = _this$props3.showCrumbs,
          mix = _this$props3.mix;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Slider",
          mix: mix,
          ref: this.sliderRef
        }, this.renderSliderContent(), showCrumbs && this.renderCrumbs())
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var activeImage = props.activeImage,
          children = props.children;
      var prevActiveImage = state.prevActiveImage;

      if (prevActiveImage !== activeImage && children.length !== 1) {
        return {
          prevActiveImage: activeImage
        };
      }

      return null;
    }
  }]);

  return _Slider;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_Slider, 'name', {
  value: 'Slider'
});

var Slider = middleware(_Slider, "Component/Slider/Component");

_defineProperty(Slider, "propTypes", {
  showCrumbs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  activeImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onActiveImageChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  mix: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  children: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"].isRequired,
  isInteractionDisabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].isRequired
});

_defineProperty(Slider, "defaultProps", {
  activeImage: 0,
  onActiveImageChange: function onActiveImageChange() {},
  showCrumbs: false,
  isInteractionDisabled: false,
  mix: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Slider);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.config.js":
/*!*****************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Slider/Slider.config.js ***!
  \*****************************************************************************************/
/*! exports provided: ANIMATION_DURATION, ACTIVE_SLIDE_PERCENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_SLIDE_PERCENT", function() { return ACTIVE_SLIDE_PERCENT; });
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
var ANIMATION_DURATION = 300;
var ACTIVE_SLIDE_PERCENT = 0.1;

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.container.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Slider/Slider.container.js ***!
  \********************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.component */ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.component.js");
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */


/** @namespace Component/Slider/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/Slider/Container/mapStateToProps");
/** @namespace Component/Slider/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/Slider/Container/mapDispatchToProps"); // eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(_Slider_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.style.scss":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Slider/Slider.style.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695995
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Slider/index.js":
/*!*********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Slider/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.container */ "../../../../../vendor/scandipwa/source/src/app/component/Slider/Slider.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */


/***/ })

}]);
//# sourceMappingURL=cms~product.js.map