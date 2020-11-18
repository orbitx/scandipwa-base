(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["checkout"],{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.component.js":
/*!**************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Braintree/Braintree.component.js ***!
  \**************************************************************************************************/
/*! exports provided: _Braintree, Braintree, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Braintree", function() { return _Braintree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Braintree", function() { return Braintree; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _Braintree_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Braintree.config */ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.config.js");
/* harmony import */ var _Braintree_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Braintree.style */ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.style.scss");
/* harmony import */ var _Braintree_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Braintree_style__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/** @namespace Component/Braintree/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Braintree =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Braintree, _Extensible);

  function _Braintree() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _Braintree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Braintree)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: true
    });

    return _this;
  }

  _createClass(_Braintree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var init = this.props.init;
      init().then(
      /** @namespace Component/Braintree/Component/initThen */
      middleware(function () {
        return _this2.setState({
          isLoading: false
        });
      }, "Component/Braintree/Component/initThen"));
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Braintree"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isLoading: isLoading
        }),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Braintree",
          elem: "Form",
          id: _Braintree_config__WEBPACK_IMPORTED_MODULE_3__["BRAINTREE_CONTAINER_ID"]
        }))
      );
    }
  }]);

  return _Braintree;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_Braintree, 'name', {
  value: 'Braintree'
});

var Braintree = middleware(_Braintree, "Component/Braintree/Component");

_defineProperty(Braintree, "propTypes", {
  init: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Braintree);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.config.js":
/*!***********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Braintree/Braintree.config.js ***!
  \***********************************************************************************************/
/*! exports provided: BRAINTREE_CONTAINER_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAINTREE_CONTAINER_ID", function() { return BRAINTREE_CONTAINER_ID; });
/* eslint-disable import/prefer-default-export */

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
var BRAINTREE_CONTAINER_ID = 'BRAINTREE_CONTAINER_ID';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.style.scss":
/*!************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Braintree/Braintree.style.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695399
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/index.js":
/*!************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Braintree/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Braintree_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Braintree.component */ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Braintree_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.component.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.component.js ***!
  \**********************************************************************************************************************/
/*! exports provided: _CheckoutAddressBook, CheckoutAddressBook, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutAddressBook", function() { return _CheckoutAddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressBook", function() { return CheckoutAddressBook; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutAddressForm */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutAddressTable */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/MyAccount/MyAccount.config */ "../../../../../vendor/scandipwa/source/src/app/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutAddressBook.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.style.scss");
/* harmony import */ var _CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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










/** @namespace Component/CheckoutAddressBook/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutAddressBook =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutAddressBook, _Extensible);

  function _CheckoutAddressBook() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutAddressBook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutAddressBook)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCustomAddressExpanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "expandCustomAddress", function () {
      var onAddressSelect = _this.props.onAddressSelect;

      _this.setState({
        isCustomAddressExpanded: true
      });

      onAddressSelect({});
    });

    _defineProperty(_assertThisInitialized(_this), "renderAddress", function (address) {
      var _this$props = _this.props,
          onAddressSelect = _this$props.onAddressSelect,
          selectedAddressId = _this$props.selectedAddressId;
      var id = address.id;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: onAddressSelect,
          isSelected: selectedAddressId === id,
          title: __('Address #%s', id),
          address: address,
          key: id
        })
      );
    });

    return _this;
  }

  _createClass(_CheckoutAddressBook, [{
    key: "renderNoAddresses",
    value: function renderNoAddresses() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", null,
        /*#__PURE__*/
        _checkBEM(React, "p", null, __('You have no configured addresses.')),
        /*#__PURE__*/
        _checkBEM(React, "p", null,
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
          to: "".concat(_app_design_frontend_Scandiweb_pwa_src_app_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__["MY_ACCOUNT_URL"], "/").concat(_app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_8__["ADDRESS_BOOK"])
        }, __('Go to Address Book to configure them!'))))
      );
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isLoading: true
        })
      );
    }
  }, {
    key: "renderAddressList",
    value: function renderAddressList() {
      var addresses = this.props.customer.addresses;

      if (!addresses) {
        return this.renderLoading();
      }

      if (!addresses.length) {
        return this.renderNoAddresses();
      }

      return addresses.map(this.renderAddress);
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      var isBilling = this.props.isBilling;
      var addressName = isBilling ? __('Select billing address') : __('Select shipping address');
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          block: "Checkout",
          elem: "Heading"
        }, addressName)
      );
    }
  }, {
    key: "renderCustomAddress",
    value: function renderCustomAddress() {
      var _this$props2 = this.props,
          isBilling = _this$props2.isBilling,
          onShippingEstimationFieldsChange = _this$props2.onShippingEstimationFieldsChange;
      var formPortalId = isBilling ? _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"] : _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["SHIPPING_STEP"];
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onShippingEstimationFieldsChange: onShippingEstimationFieldsChange,
          address: {},
          id: formPortalId
        })
      );
    }
  }, {
    key: "renderOptionalCustomAddress",
    value: function renderOptionalCustomAddress() {
      var isCustomAddressExpanded = this.state.isCustomAddressExpanded;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutAddressBook",
          elem: "CustomAddressWrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CheckoutAddressBook",
          elem: "Button",
          mods: {
            isCustomAddressExpanded: isCustomAddressExpanded
          },
          mix: {
            block: 'Button',
            mods: {
              isHollow: true
            }
          },
          type: "button",
          onClick: this.expandCustomAddress
        }, __('Use custom address')), isCustomAddressExpanded && this.renderCustomAddress())
      );
    }
  }, {
    key: "renderSignedInContent",
    value: function renderSignedInContent() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutAddressBook",
          elem: "Wrapper"
        }, this.renderAddressList()), this.renderOptionalCustomAddress())
      );
    }
  }, {
    key: "renderGuestContent",
    value: function renderGuestContent() {
      return this.renderCustomAddress();
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var isSignedIn = this.props.isSignedIn;

      if (isSignedIn) {
        return this.renderSignedInContent();
      }

      return this.renderGuestContent();
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutAddressBook"
        }, this.renderHeading(), this.renderContent())
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var selectedAddressId = props.selectedAddressId;

      if (selectedAddressId === 0) {
        return null;
      }

      return {
        isCustomAddressExpanded: false
      };
    }
  }]);

  return _CheckoutAddressBook;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutAddressBook, 'name', {
  value: 'CheckoutAddressBook'
});

var CheckoutAddressBook = middleware(_CheckoutAddressBook, "Component/CheckoutAddressBook/Component");

_defineProperty(CheckoutAddressBook, "propTypes", {
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_8__["customerType"].isRequired,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedAddressId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isSignedIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isBilling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressBook);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.container.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.container.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, _CheckoutAddressBookContainer, CheckoutAddressBookContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutAddressBookContainer", function() { return _CheckoutAddressBookContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressBookContainer", function() { return CheckoutAddressBookContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _CheckoutAddressBook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutAddressBook.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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





var MyAccountDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/MyAccount/MyAccount.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/MyAccount/MyAccount.dispatcher.js"));
/** @namespace Component/CheckoutAddressBook/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer,
    isSignedIn: state.MyAccountReducer.isSignedIn
  };
}, "Component/CheckoutAddressBook/Container/mapStateToProps");
/** @namespace Component/CheckoutAddressBook/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    requestCustomerData: function requestCustomerData() {
      return MyAccountDispatcher.then(function (_ref) {
        var dispatcher = _ref.default;
        return dispatcher.requestCustomerData(dispatch);
      });
    }
  };
}, "Component/CheckoutAddressBook/Container/mapDispatchToProps");
/** @namespace Component/CheckoutAddressBook/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutAddressBookContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutAddressBookContainer, _Extensible);

  function _CheckoutAddressBookContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutAddressBookContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutAddressBookContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      onAddressSelect: _this.onAddressSelect.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_CheckoutAddressBookContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutAddressBookContainer.prototype), "__construct", this).call(this, props);

      var requestCustomerData = props.requestCustomerData,
          customer = props.customer,
          onAddressSelect = props.onAddressSelect,
          isSignedIn = props.isSignedIn;

      if (isSignedIn && !Object.keys(customer).length) {
        requestCustomerData();
      }

      var defaultAddressId = CheckoutAddressBookContainer._getDefaultAddressId(props);

      if (defaultAddressId) {
        onAddressSelect(defaultAddressId);
        this.estimateShipping(defaultAddressId);
      }

      this.state = {
        prevDefaultAddressId: defaultAddressId,
        selectedAddressId: defaultAddressId
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this$props = this.props,
          onAddressSelect = _this$props.onAddressSelect,
          requestCustomerData = _this$props.requestCustomerData,
          isSignedIn = _this$props.isSignedIn,
          customer = _this$props.customer;
      var prevSelectedAddressId = prevState.selectedAddressId;
      var selectedAddressId = this.state.selectedAddressId;

      if (isSignedIn && !Object.keys(customer).length) {
        requestCustomerData();
      }

      if (selectedAddressId !== prevSelectedAddressId) {
        onAddressSelect(selectedAddressId);
        this.estimateShipping(selectedAddressId);
      }
    }
  }, {
    key: "onAddressSelect",
    value: function onAddressSelect(address) {
      var _address$id = address.id,
          id = _address$id === void 0 ? 0 : _address$id;
      this.setState({
        selectedAddressId: id
      });
    }
  }, {
    key: "estimateShipping",
    value: function estimateShipping(addressId) {
      var _this$props2 = this.props,
          onShippingEstimationFieldsChange = _this$props2.onShippingEstimationFieldsChange,
          _this$props2$customer = _this$props2.customer.addresses,
          addresses = _this$props2$customer === void 0 ? [] : _this$props2$customer;
      var address = addresses.find(function (_ref2) {
        var id = _ref2.id;
        return id === addressId;
      });

      if (!address) {
        return;
      }

      var city = address.city,
          country_id = address.country_id,
          postcode = address.postcode,
          _address$region = address.region;
      _address$region = _address$region === void 0 ? {} : _address$region;
      var region_id = _address$region.region_id,
          region = _address$region.region;

      if (!country_id) {
        return;
      }

      onShippingEstimationFieldsChange({
        city: city,
        country_id: country_id,
        region_id: region_id,
        region: region,
        postcode: postcode
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutAddressBook_component__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, this.state, this.containerFunctions))
      );
    }
  }], [{
    key: "_getDefaultAddressId",
    value: function _getDefaultAddressId(props) {
      var customer = props.customer,
          isBilling = props.isBilling;
      var defaultKey = isBilling ? 'default_billing' : 'default_shipping';
      var defaultAddressId = customer[defaultKey],
          addresses = customer.addresses;

      if (defaultAddressId) {
        return +defaultAddressId;
      }

      if (addresses && addresses.length) {
        return addresses[0].id;
      }

      return 0;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevDefaultAddressId = state.prevDefaultAddressId;

      var defaultAddressId = CheckoutAddressBookContainer._getDefaultAddressId(props);

      if (defaultAddressId !== prevDefaultAddressId) {
        return {
          selectedAddressId: defaultAddressId,
          prevDefaultAddressId: defaultAddressId
        };
      }

      return null;
    }
  }]);

  return _CheckoutAddressBookContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutAddressBookContainer, 'name', {
  value: 'CheckoutAddressBookContainer'
});

var CheckoutAddressBookContainer = middleware(_CheckoutAddressBookContainer, "Component/CheckoutAddressBook/Container");

_defineProperty(CheckoutAddressBookContainer, "propTypes", {
  isSignedIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  requestCustomerData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_3__["customerType"].isRequired,
  isBilling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(CheckoutAddressBookContainer, "defaultProps", {
  isBilling: false,
  onAddressSelect: function onAddressSelect() {},
  onShippingEstimationFieldsChange: function onShippingEstimationFieldsChange() {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutAddressBookContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.style.scss":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714694295
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/index.js":
/*!**********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressBook/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressBook_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressBook.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/CheckoutAddressBook.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressBook_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.component.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.component.js ***!
  \**********************************************************************************************************************/
/*! exports provided: _CheckoutAddressForm, CheckoutAddressForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutAddressForm", function() { return _CheckoutAddressForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressForm", function() { return CheckoutAddressForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_FormPortal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/FormPortal */ "../../../../../vendor/scandipwa/source/src/app/component/FormPortal/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountAddressForm/MyAccountAddressForm.component */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressForm/MyAccountAddressForm.component.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request */ "../../../../../vendor/scandipwa/source/src/app/util/Request/index.js");
/* harmony import */ var _CheckoutAddressForm_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutAddressForm.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.config.js");
/* harmony import */ var _CheckoutAddressForm_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutAddressForm.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.style.scss");
/* harmony import */ var _CheckoutAddressForm_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CheckoutAddressForm_style__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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






/** @namespace Component/CheckoutAddressForm/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutAddressForm =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutAddressForm, _Extensible);

  function _CheckoutAddressForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutAddressForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutAddressForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function (key, value) {
      _this.setState(function () {
        return _defineProperty({}, key, value);
      });
    }, _CheckoutAddressForm_config__WEBPACK_IMPORTED_MODULE_4__["UPDATE_STATE_FREQUENCY"]));

    return _this;
  }

  _createClass(_CheckoutAddressForm, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutAddressForm.prototype), "__construct", this).call(this, props);

      var _this$props$address$r = this.props.address.region;
      _this$props$address$r = _this$props$address$r === void 0 ? {} : _this$props$address$r;
      var _this$props$address$r2 = _this$props$address$r.region,
          region = _this$props$address$r2 === void 0 ? '' : _this$props$address$r2; // TODO: get from region data

      this.state = _objectSpread2(_objectSpread2({}, this.state), {}, {
        region: region,
        city: '',
        postcode: ''
      });
      this.estimateShipping();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this$state = this.state,
          countryId = _this$state.countryId,
          regionId = _this$state.regionId,
          region = _this$state.region,
          city = _this$state.city,
          postcode = _this$state.postcode;
      var prevCountryId = prevState.countryId,
          prevRegionId = prevState.regionId,
          prevRegion = prevState.region,
          prevCity = prevState.city,
          prevpostcode = prevState.postcode;

      if (countryId !== prevCountryId || regionId !== prevRegionId || city !== prevCity || region !== prevRegion || postcode !== prevpostcode) {
        this.estimateShipping();
      }
    }
  }, {
    key: "estimateShipping",
    value: function estimateShipping() {
      var onShippingEstimationFieldsChange = this.props.onShippingEstimationFieldsChange;
      var _this$state2 = this.state,
          countryId = _this$state2.countryId,
          regionId = _this$state2.regionId,
          region = _this$state2.region,
          city = _this$state2.city,
          postcode = _this$state2.postcode;
      onShippingEstimationFieldsChange({
        country_id: countryId,
        region_id: regionId,
        region: region,
        city: city,
        postcode: postcode
      });
    }
  }, {
    key: "handleInitialCountryValue",
    value: function handleInitialCountryValue(initialValue) {
      if (this.handledInitialCountry) {
        return;
      }

      this.onCountryChange(initialValue);
      this.handledInitialCountry = true;
    }
  }, {
    key: "getRegionFields",
    value: function getRegionFields() {
      var _this2 = this;

      var regionFieldData = _get(_getPrototypeOf(_CheckoutAddressForm.prototype), "getRegionFields", this).call(this);

      var region_string = regionFieldData.region_string;

      if (region_string) {
        regionFieldData.region_string.onChange = function (v) {
          return _this2.onChange('region', v);
        };
      }

      return regionFieldData;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_FormPortal__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: id,
          name: "CheckoutAddressForm"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "FieldForm",
          mix: {
            block: 'CheckoutAddressForm'
          }
        }, this.renderFields()))
      );
    }
  }, {
    key: "fieldMap",
    get: function get() {
      var _this3 = this;

      // country_id, region, region_id, city - are used for shipping estimation
      var shippingFields = this.props.shippingFields;

      var _get2 = _get(_getPrototypeOf(_CheckoutAddressForm.prototype), "fieldMap", this),
          default_billing = _get2.default_billing,
          default_shipping = _get2.default_shipping,
          city = _get2.city,
          postcode = _get2.postcode,
          fieldMap = _objectWithoutProperties(_get2, ["default_billing", "default_shipping", "city", "postcode"]);

      fieldMap.city = _objectSpread2(_objectSpread2({}, city), {}, {
        onChange: function onChange(value) {
          return _this3.onChange('city', value);
        }
      });
      fieldMap.postcode = _objectSpread2(_objectSpread2({}, postcode), {}, {
        onChange: function onChange(value) {
          return _this3.onChange('postcode', value);
        }
      }); // Preserve values from global state

      Object.entries(fieldMap).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
            key = _ref3[0];

        if (Object.hasOwnProperty.call(shippingFields, key)) {
          fieldMap[key].value = shippingFields[key]; // Handle setting dropdown/input depending on regions existance

          if (key === 'country_id') {
            _this3.handleInitialCountryValue(shippingFields[key]);
          }
        }
      });
      return fieldMap;
    }
  }]);

  return _CheckoutAddressForm;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_2__["default"]));
Object.defineProperty(_CheckoutAddressForm, 'name', {
  value: 'CheckoutAddressForm'
});

var CheckoutAddressForm = middleware(_CheckoutAddressForm, "Component/CheckoutAddressForm/Component");

_defineProperty(CheckoutAddressForm, "propTypes", _objectSpread2(_objectSpread2({}, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes), {}, {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}));

_defineProperty(CheckoutAddressForm, "defaultProps", _objectSpread2(_objectSpread2({}, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_2__["default"].defaultProps), {}, {
  onShippingEstimationFieldsChange: function onShippingEstimationFieldsChange() {}
}));

/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.config.js":
/*!*******************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.config.js ***!
  \*******************************************************************************************************************/
/*! exports provided: UPDATE_STATE_FREQUENCY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATE_FREQUENCY", function() { return UPDATE_STATE_FREQUENCY; });
/* eslint-disable import/prefer-default-export */

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
var UPDATE_STATE_FREQUENCY = 1000; // (ms)

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.container.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.container.js ***!
  \**********************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CheckoutAddressForm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutAddressForm.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.component.js");
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


/** @namespace Component/CheckoutAddressForm/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    countries: state.ConfigReducer.countries,
    default_country: state.ConfigReducer.default_country,
    addressLinesQty: state.ConfigReducer.address_lines_quantity,
    shippingFields: state.CheckoutReducer.shippingFields
  };
}, "Component/CheckoutAddressForm/Container/mapStateToProps");
/** @namespace Component/CheckoutAddressForm/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/CheckoutAddressForm/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_CheckoutAddressForm_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.style.scss":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714696310
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/index.js":
/*!**********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressForm/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressForm_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressForm.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressForm/CheckoutAddressForm.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressForm_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.component.js":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.component.js ***!
  \************************************************************************************************************************/
/*! exports provided: _CheckoutAddressTable, CheckoutAddressTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutAddressTable", function() { return _CheckoutAddressTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressTable", function() { return CheckoutAddressTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountAddressTable/MyAccountAddressTable.component */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.component.js");
/* harmony import */ var _CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutAddressTable.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.style.scss");
/* harmony import */ var _CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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




/** @namespace Component/CheckoutAddressTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutAddressTable =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutAddressTable, _Extensible);

  function _CheckoutAddressTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutAddressTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutAddressTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onAddressClick", function () {
      var _this$props = _this.props,
          address = _this$props.address,
          onClick = _this$props.onClick;
      onClick(address);
    });

    return _this;
  }

  _createClass(_CheckoutAddressTable, [{
    key: "renderTable",
    value: function renderTable() {
      var isSelected = this.props.isSelected;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CheckoutAddressTable",
          elem: "Button",
          type: "button",
          mods: {
            isSelected: isSelected
          },
          onClick: this.onAddressClick
        }, _get(_getPrototypeOf(_CheckoutAddressTable.prototype), "renderTable", this).call(this))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var countries = this.props.countries;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutAddressTable"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
          isLoading: !countries.length
        }), this.renderTable())
      );
    }
  }]);

  return _CheckoutAddressTable;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"]));
Object.defineProperty(_CheckoutAddressTable, 'name', {
  value: 'CheckoutAddressTable'
});

var CheckoutAddressTable = middleware(_CheckoutAddressTable, "Component/CheckoutAddressTable/Component");

_defineProperty(CheckoutAddressTable, "propTypes", _objectSpread2(_objectSpread2({}, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes), {}, {
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}));

_defineProperty(CheckoutAddressTable, "defaultProps", _objectSpread2(_objectSpread2({}, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"].defaultProps), {}, {
  isSelected: false
}));

/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.container.js":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.container.js ***!
  \************************************************************************************************************************/
/*! exports provided: _CheckoutAddressTableContainer, CheckoutAddressTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutAddressTableContainer", function() { return _CheckoutAddressTableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressTableContainer", function() { return CheckoutAddressTableContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountAddressTable/MyAccountAddressTable.container */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.container.js");
/* harmony import */ var _CheckoutAddressTable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutAddressTable.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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



/** @namespace Component/CheckoutAddressTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutAddressTableContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutAddressTableContainer, _Extensible);

  function _CheckoutAddressTableContainer() {
    _classCallCheck(this, _CheckoutAddressTableContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutAddressTableContainer).apply(this, arguments));
  }

  _createClass(_CheckoutAddressTableContainer, [{
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _CheckoutAddressTableContainer;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_1__["MyAccountAddressTableContainer"]));
Object.defineProperty(_CheckoutAddressTableContainer, 'name', {
  value: 'CheckoutAddressTableContainer'
});

var CheckoutAddressTableContainer = middleware(_CheckoutAddressTableContainer, "Component/CheckoutAddressTable/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_1__["mapStateToProps"], _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_1__["mapDispatchToProps"])(CheckoutAddressTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.style.scss":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695887
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/index.js":
/*!***********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutAddressTable/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressTable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressTable.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressTable/CheckoutAddressTable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressTable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.component.js":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: _CheckoutBilling, CheckoutBilling, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutBilling", function() { return _CheckoutBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutBilling", function() { return CheckoutBilling; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutAddressBook */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutPayments */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutTermsAndConditionsPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutTermsAndConditionsPopup */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Field */ "../../../../../vendor/scandipwa/source/src/app/component/Field/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Form */ "../../../../../vendor/scandipwa/source/src/app/component/Form/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CheckoutBilling.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.style.scss");
/* harmony import */ var _CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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












/** @namespace Component/CheckoutBilling/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutBilling =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutBilling, _Extensible);

  function _CheckoutBilling() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutBilling);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutBilling)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOrderButtonVisible: true,
      isOrderButtonEnabled: true,
      isTermsAndConditionsAccepted: false
    });

    _defineProperty(_assertThisInitialized(_this), "setOrderButtonVisibility", function (isOrderButtonVisible) {
      _this.setState({
        isOrderButtonVisible: isOrderButtonVisible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setOrderButtonEnableStatus", function (isOrderButtonEnabled) {
      _this.setState({
        isOrderButtonEnabled: isOrderButtonEnabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTACAccepted", function () {
      _this.setState(function (_ref) {
        var oldIsTACAccepted = _ref.isTermsAndConditionsAccepted;
        return {
          isTermsAndConditionsAccepted: !oldIsTACAccepted
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowPopup", function (e) {
      var showPopup = _this.props.showPopup;
      e.preventDefault();
      showPopup();
    });

    return _this;
  }

  _createClass(_CheckoutBilling, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var termsAreEnabled = this.props.termsAreEnabled;

      if (!termsAreEnabled) {
        this.setState({
          isOrderButtonEnabled: true
        });
      }
    }
  }, {
    key: "renderTermsAndConditions",
    value: function renderTermsAndConditions() {
      var _this$props = this.props,
          termsAreEnabled = _this$props.termsAreEnabled,
          termsAndConditions = _this$props.termsAndConditions;

      var _ref2 = termsAndConditions[0] || {},
          _ref2$checkbox_text = _ref2.checkbox_text,
          checkbox_text = _ref2$checkbox_text === void 0 ? __('I agree to terms and conditions') : _ref2$checkbox_text;

      var isTermsAndConditionsAccepted = this.state.isTermsAndConditionsAccepted;

      if (!termsAreEnabled) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutBilling",
          elem: "TermsAndConditions"
        },
        /*#__PURE__*/
        _checkBEM(React, "label", {
          block: "CheckoutBilling",
          elem: "TACLabel",
          htmlFor: "termsAndConditions"
        }, checkbox_text,
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CheckoutBilling",
          elem: "TACLink",
          onClick: this.handleShowPopup
        }, __('read more'))),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "termsAndConditions",
          name: "termsAndConditions",
          type: "checkbox",
          value: "termsAndConditions",
          mix: {
            block: 'CheckoutBilling',
            elem: 'TermsAndConditions-Checkbox'
          },
          checked: isTermsAndConditionsAccepted,
          onChange: this.setTACAccepted
        }))
      );
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$state = this.state,
          isOrderButtonVisible = _this$state.isOrderButtonVisible,
          isOrderButtonEnabled = _this$state.isOrderButtonEnabled,
          isTermsAndConditionsAccepted = _this$state.isTermsAndConditionsAccepted;
      var termsAreEnabled = this.props.termsAreEnabled;

      if (!isOrderButtonVisible) {
        return null;
      } // if terms and conditions are enabled, validate for acceptance


      var isDisabled = termsAreEnabled ? !isOrderButtonEnabled || !isTermsAndConditionsAccepted : !isOrderButtonEnabled;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Checkout",
          elem: "StickyButtonWrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          type: "submit",
          block: "Button",
          disabled: isDisabled,
          mix: {
            block: 'CheckoutBilling',
            elem: 'Button'
          }
        }, __('Complete order')))
      );
    }
  }, {
    key: "renderAddressBook",
    value: function renderAddressBook() {
      var _this$props2 = this.props,
          onAddressSelect = _this$props2.onAddressSelect,
          isSameAsShipping = _this$props2.isSameAsShipping,
          is_virtual = _this$props2.totals.is_virtual;

      if (isSameAsShipping && !is_virtual) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onAddressSelect: onAddressSelect,
          isBilling: true
        })
      );
    }
  }, {
    key: "renderSameAsShippingCheckbox",
    value: function renderSameAsShippingCheckbox() {
      var _this$props3 = this.props,
          isSameAsShipping = _this$props3.isSameAsShipping,
          onSameAsShippingChange = _this$props3.onSameAsShippingChange,
          is_virtual = _this$props3.totals.is_virtual;

      if (is_virtual) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "sameAsShippingAddress",
          name: "sameAsShippingAddress",
          type: "checkbox",
          label: __('My billing and shipping are the same'),
          value: "sameAsShippingAddress",
          mix: {
            block: 'CheckoutBilling',
            elem: 'Checkbox'
          },
          checked: isSameAsShipping,
          onChange: onSameAsShippingChange
        })
      );
    }
  }, {
    key: "renderAddresses",
    value: function renderAddresses() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderSameAsShippingCheckbox(), this.renderAddressBook())
      );
    }
  }, {
    key: "renderPayments",
    value: function renderPayments() {
      var _this$props4 = this.props,
          paymentMethods = _this$props4.paymentMethods,
          onPaymentMethodSelect = _this$props4.onPaymentMethodSelect,
          setLoading = _this$props4.setLoading,
          setDetailsStep = _this$props4.setDetailsStep,
          shippingAddress = _this$props4.shippingAddress;

      if (!paymentMethods.length) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayments__WEBPACK_IMPORTED_MODULE_3__["default"], {
          setLoading: setLoading,
          setDetailsStep: setDetailsStep,
          paymentMethods: paymentMethods,
          onPaymentMethodSelect: onPaymentMethodSelect,
          setOrderButtonVisibility: this.setOrderButtonVisibility,
          billingAddress: shippingAddress,
          setOrderButtonEnableStatus: this.setOrderButtonEnableStatus
        })
      );
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutTermsAndConditionsPopup__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          onBillingSuccess = _this$props5.onBillingSuccess,
          onBillingError = _this$props5.onBillingError;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
          mix: {
            block: 'CheckoutBilling'
          },
          id: _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_7__["BILLING_STEP"],
          onSubmitError: onBillingError,
          onSubmitSuccess: onBillingSuccess
        }, this.renderAddresses(), this.renderPayments(), this.renderTermsAndConditions(), this.renderActions(), this.renderPopup())
      );
    }
  }]);

  return _CheckoutBilling;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutBilling, 'name', {
  value: 'CheckoutBilling'
});

var CheckoutBilling = middleware(_CheckoutBilling, "Component/CheckoutBilling/Component");

_defineProperty(CheckoutBilling, "propTypes", {
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setDetailsStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSameAsShipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  termsAreEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSameAsShippingChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onPaymentMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onBillingSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onBillingError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_9__["paymentMethodsType"].isRequired,
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_10__["TotalsType"].isRequired,
  shippingAddress: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_8__["addressType"].isRequired,
  termsAndConditions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    checkbox_text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired
});

_defineProperty(CheckoutBilling, "defaultProps", {
  termsAreEnabled: false
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutBilling);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.container.js":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.container.js ***!
  \**************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, _CheckoutBillingContainer, CheckoutBillingContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutBillingContainer", function() { return _CheckoutBillingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutBillingContainer", function() { return CheckoutBillingContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutPayments/CheckoutPayments.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutTermsAndConditionsPopup_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Popup/Popup.action */ "../../../../../vendor/scandipwa/source/src/app/store/Popup/Popup.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Address */ "../../../../../vendor/scandipwa/source/src/app/util/Address/index.js");
/* harmony import */ var _CheckoutBilling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CheckoutBilling.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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












/** @namespace Component/CheckoutBilling/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer,
    totals: state.CartReducer.cartTotals,
    termsAreEnabled: state.ConfigReducer.terms_are_enabled,
    termsAndConditions: state.ConfigReducer.checkoutAgreements,
    addressLinesQty: state.ConfigReducer.address_lines_quantity
  };
}, "Component/CheckoutBilling/Container/mapStateToProps");
/** @namespace Component/CheckoutBilling/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    showErrorNotification: function showErrorNotification(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])('error', message));
    },
    showPopup: function showPopup(payload) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_6__["showPopup"])(_app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutTermsAndConditionsPopup_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"], payload));
    }
  };
}, "Component/CheckoutBilling/Container/mapDispatchToProps");
/** @namespace Component/CheckoutBilling/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutBillingContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutBillingContainer, _Extensible);

  function _CheckoutBillingContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutBillingContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutBillingContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      onBillingSuccess: _this.onBillingSuccess.bind(_assertThisInitialized(_this)),
      onBillingError: _this.onBillingError.bind(_assertThisInitialized(_this)),
      onAddressSelect: _this.onAddressSelect.bind(_assertThisInitialized(_this)),
      onSameAsShippingChange: _this.onSameAsShippingChange.bind(_assertThisInitialized(_this)),
      onPaymentMethodSelect: _this.onPaymentMethodSelect.bind(_assertThisInitialized(_this)),
      showPopup: _this.showPopup.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_CheckoutBillingContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutBillingContainer.prototype), "__construct", this).call(this, props);

      var paymentMethods = props.paymentMethods,
          customer = props.customer;

      var _paymentMethods = _slicedToArray(paymentMethods, 1),
          method = _paymentMethods[0];

      var _ref = method || {},
          paymentMethod = _ref.code;

      this.state = {
        isSameAsShipping: this.isSameShippingAddress(customer),
        selectedCustomerAddressId: 0,
        prevPaymentMethods: paymentMethods,
        paymentMethod: paymentMethod
      };
    }
  }, {
    key: "isSameShippingAddress",
    value: function isSameShippingAddress(_ref2) {
      var default_billing = _ref2.default_billing,
          default_shipping = _ref2.default_shipping;
      var is_virtual = this.props.totals.is_virtual;

      if (is_virtual) {
        return false;
      }

      return default_billing === default_shipping;
    }
  }, {
    key: "onAddressSelect",
    value: function onAddressSelect(id) {
      this.setState({
        selectedCustomerAddressId: id
      });
    }
  }, {
    key: "onSameAsShippingChange",
    value: function onSameAsShippingChange() {
      this.setState(function (_ref3) {
        var isSameAsShipping = _ref3.isSameAsShipping;
        return {
          isSameAsShipping: !isSameAsShipping
        };
      });
    }
  }, {
    key: "onPaymentMethodSelect",
    value: function onPaymentMethodSelect(code) {
      this.setState({
        paymentMethod: code
      });
    }
  }, {
    key: "onBillingSuccess",
    value: function onBillingSuccess(fields, asyncData) {
      var savePaymentInformation = this.props.savePaymentInformation;

      var address = this._getAddress(fields);

      var paymentMethod = this._getPaymentData(asyncData);

      savePaymentInformation({
        billing_address: address,
        paymentMethod: paymentMethod
      });
    }
  }, {
    key: "onBillingError",
    value: function onBillingError(fields, invalidFields, error) {
      var showErrorNotification = this.props.showErrorNotification;

      if (error) {
        var _error$message = error.message,
            message = _error$message === void 0 ? __('Something went wrong!') : _error$message;
        showErrorNotification(message);
      }
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      var _this$props = this.props,
          showPopup = _this$props.showPopup,
          termsAndConditions = _this$props.termsAndConditions;

      var _ref4 = termsAndConditions[0] || {},
          _ref4$name = _ref4.name,
          title = _ref4$name === void 0 ? __('Terms and Conditions') : _ref4$name,
          _ref4$content = _ref4.content,
          text = _ref4$content === void 0 ? __('There are no Terms and Conditions configured.') : _ref4$content;

      return showPopup({
        title: title,
        text: text
      });
    }
  }, {
    key: "_getPaymentData",
    value: function _getPaymentData(asyncData) {
      var code = this.state.paymentMethod;

      switch (code) {
        case _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__["BRAINTREE"]:
          var _asyncData = _slicedToArray(asyncData, 1),
              nonce = _asyncData[0].nonce;

          return {
            code: code,
            additional_data: {
              payment_method_nonce: nonce,
              is_active_payment_token_enabler: false
            }
          };

        case _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__["KLARNA"]:
          var _asyncData2 = _slicedToArray(asyncData, 1),
              authorization_token = _asyncData2[0].authorization_token;

          return {
            code: code,
            additional_data: {
              authorization_token: authorization_token
            }
          };

        default:
          return {
            code: code
          };
      }
    }
  }, {
    key: "_getAddress",
    value: function _getAddress(fields) {
      var _this$props2 = this.props,
          addressLinesQty = _this$props2.addressLinesQty,
          shippingAddress = _this$props2.shippingAddress;
      var _this$state = this.state,
          isSameAsShipping = _this$state.isSameAsShipping,
          selectedCustomerAddressId = _this$state.selectedCustomerAddressId;
      var formFields = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_10__["getFormFields"])(fields, addressLinesQty);

      if (isSameAsShipping) {
        return shippingAddress;
      }

      if (!selectedCustomerAddressId) {
        return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_10__["trimAddressFields"])(formFields);
      }

      var addresses = this.props.customer.addresses;
      var address = addresses.find(function (_ref5) {
        var id = _ref5.id;
        return id === selectedCustomerAddressId;
      });
      return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_10__["trimCustomerAddress"])(address);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutBilling_component__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, this.props, this.state, this.containerFunctions))
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var paymentMethod = state.paymentMethod,
          prevPaymentMethods = state.prevPaymentMethods;
      var paymentMethods = props.paymentMethods;

      if (!prevPaymentMethods.length && !paymentMethod) {
        var _paymentMethods2 = _slicedToArray(paymentMethods, 1),
            method = _paymentMethods2[0];

        var _ref6 = method || {},
            _paymentMethod = _ref6.code;

        return {
          prevPaymentMethods: paymentMethods,
          paymentMethod: _paymentMethod
        };
      }

      return null;
    }
  }]);

  return _CheckoutBillingContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutBillingContainer, 'name', {
  value: 'CheckoutBillingContainer'
});

var CheckoutBillingContainer = middleware(_CheckoutBillingContainer, "Component/CheckoutBilling/Container");

_defineProperty(CheckoutBillingContainer, "propTypes", {
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_8__["paymentMethodsType"].isRequired,
  savePaymentInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingAddress: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_7__["addressType"].isRequired,
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_7__["customerType"].isRequired,
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_9__["TotalsType"].isRequired,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  termsAndConditions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    checkbox_text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutBillingContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.style.scss":
/*!************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714692006
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/index.js":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutBilling/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutBilling_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutBilling.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/CheckoutBilling.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutBilling_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.component.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.component.js ***!
  \****************************************************************************************************************************/
/*! exports provided: _CheckoutDeliveryOption, CheckoutDeliveryOption, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutDeliveryOption", function() { return _CheckoutDeliveryOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDeliveryOption", function() { return CheckoutDeliveryOption; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Price */ "../../../../../vendor/scandipwa/source/src/app/util/Price/index.js");
/* harmony import */ var _CheckoutDeliveryOption_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutDeliveryOption.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.style.scss");
/* harmony import */ var _CheckoutDeliveryOption_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CheckoutDeliveryOption_style__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/** @namespace Component/CheckoutDeliveryOption/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutDeliveryOption =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutDeliveryOption, _Extensible);

  function _CheckoutDeliveryOption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutDeliveryOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutDeliveryOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          option = _this$props.option;
      onClick(option);
    });

    return _this;
  }

  _createClass(_CheckoutDeliveryOption, [{
    key: "renderPrice",
    value: function renderPrice() {
      var _this$props2 = this.props,
          price_incl_tax = _this$props2.option.price_incl_tax,
          quote_currency_code = _this$props2.totals.quote_currency_code;
      var formattedPrice = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(price_incl_tax, quote_currency_code);
      return (
        /*#__PURE__*/
        _checkBEM(React, "strong", null, " - ".concat(formattedPrice))
      );
    }
  }, {
    key: "renderRow",
    value: function renderRow() {
      var _this$props$option = this.props.option,
          carrier_title = _this$props$option.carrier_title,
          method_title = _this$props$option.method_title;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutDeliveryOption",
          elem: "Row"
        },
        /*#__PURE__*/
        _checkBEM(React, "span", null, __('Carrier method: '),
        /*#__PURE__*/
        _checkBEM(React, "strong", null, carrier_title)),
        /*#__PURE__*/
        _checkBEM(React, "br", null),
        /*#__PURE__*/
        _checkBEM(React, "span", null, __('Rate: '),
        /*#__PURE__*/
        _checkBEM(React, "strong", null, method_title)), this.renderPrice())
      );
    }
  }, {
    key: "render",
    value: function render() {
      var isSelected = this.props.isSelected;
      return (
        /*#__PURE__*/
        _checkBEM(React, "li", {
          block: "CheckoutDeliveryOption"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CheckoutDeliveryOption",
          mods: {
            isSelected: isSelected
          },
          elem: "Button",
          onClick: this.onClick,
          type: "button"
        }, this.renderRow()))
      );
    }
  }]);

  return _CheckoutDeliveryOption;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutDeliveryOption, 'name', {
  value: 'CheckoutDeliveryOption'
});

var CheckoutDeliveryOption = middleware(_CheckoutDeliveryOption, "Component/CheckoutDeliveryOption/Component");

_defineProperty(CheckoutDeliveryOption, "propTypes", {
  option: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_2__["shippingMethodType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_3__["TotalsType"].isRequired
});

_defineProperty(CheckoutDeliveryOption, "defaultProps", {
  isSelected: false
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutDeliveryOption);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.container.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.container.js ***!
  \****************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CheckoutDeliveryOption_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutDeliveryOption.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.component.js");
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


/** @namespace Component/CheckoutDeliveryOption/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    totals: state.CartReducer.cartTotals
  };
}, "Component/CheckoutDeliveryOption/Container/mapStateToProps");
/** @namespace Component/CheckoutDeliveryOption/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/CheckoutDeliveryOption/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_CheckoutDeliveryOption_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.style.scss":
/*!**************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695835
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/index.js":
/*!*************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutDeliveryOption_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutDeliveryOption.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/CheckoutDeliveryOption.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutDeliveryOption_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.component.js":
/*!******************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.component.js ***!
  \******************************************************************************************************************************/
/*! exports provided: _CheckoutDeliveryOptions, CheckoutDeliveryOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutDeliveryOptions", function() { return _CheckoutDeliveryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDeliveryOptions", function() { return CheckoutDeliveryOptions; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutDeliveryOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutDeliveryOption */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOption/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _CheckoutDeliveryOptions_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutDeliveryOptions.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.style.scss");
/* harmony import */ var _CheckoutDeliveryOptions_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CheckoutDeliveryOptions_style__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/** @namespace Component/CheckoutDeliveryOptions/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutDeliveryOptions =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutDeliveryOptions, _Extensible);

  function _CheckoutDeliveryOptions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutDeliveryOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutDeliveryOptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "shippingRenderMap", {});

    _defineProperty(_assertThisInitialized(_this), "renderDeliveryOption", function (option) {
      var _this$props = _this.props,
          selectedShippingMethodCode = _this$props.selectedShippingMethodCode,
          selectShippingMethod = _this$props.selectShippingMethod;
      var method_code = option.method_code;
      var isSelected = selectedShippingMethodCode === method_code;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutDeliveryOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: method_code,
          isSelected: isSelected,
          option: option,
          onClick: selectShippingMethod
        })
      );
    });

    return _this;
  }

  _createClass(_CheckoutDeliveryOptions, [{
    key: "renderHeading",
    value: function renderHeading() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          block: "Checkout",
          elem: "Heading"
        }, __('Select shipping method'))
      );
    }
  }, {
    key: "renderNoDeliveryOptions",
    value: function renderNoDeliveryOptions() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CheckoutDeliveryOptions",
          elem: "NoOptions"
        }, __('There are no shipping methods available, try different address.'))
      );
    }
  }, {
    key: "renderShippingMethods",
    value: function renderShippingMethods() {
      var shippingMethods = this.props.shippingMethods;

      if (!shippingMethods.length) {
        return this.renderNoDeliveryOptions();
      }

      return shippingMethods.map(this.renderDeliveryOption);
    }
  }, {
    key: "renderSelectedShippingMethod",
    value: function renderSelectedShippingMethod() {
      var selectedShippingMethodCode = this.props.selectedShippingMethodCode;
      var render = this.shippingRenderMap[selectedShippingMethodCode];

      if (!render) {
        return null;
      }

      return render();
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutDeliveryOptions"
        }, this.renderHeading(),
        /*#__PURE__*/
        _checkBEM(React, "ul", {
          block: "CheckoutPayments",
          elem: "Methods"
        }, this.renderShippingMethods()), this.renderSelectedShippingMethod())
      );
    }
  }]);

  return _CheckoutDeliveryOptions;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutDeliveryOptions, 'name', {
  value: 'CheckoutDeliveryOptions'
});

var CheckoutDeliveryOptions = middleware(_CheckoutDeliveryOptions, "Component/CheckoutDeliveryOptions/Component");

_defineProperty(CheckoutDeliveryOptions, "propTypes", {
  shippingMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_3__["shippingMethodsType"].isRequired,
  selectShippingMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedShippingMethodCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(CheckoutDeliveryOptions, "defaultProps", {
  selectedShippingMethodCode: null
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutDeliveryOptions);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.container.js":
/*!******************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.container.js ***!
  \******************************************************************************************************************************/
/*! exports provided: _CheckoutDeliveryOptionsContainer, CheckoutDeliveryOptionsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutDeliveryOptionsContainer", function() { return _CheckoutDeliveryOptionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDeliveryOptionsContainer", function() { return CheckoutDeliveryOptionsContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _CheckoutDeliveryOptions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutDeliveryOptions.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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





/** @namespace Component/CheckoutDeliveryOptions/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutDeliveryOptionsContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutDeliveryOptionsContainer, _Extensible);

  function _CheckoutDeliveryOptionsContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutDeliveryOptionsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutDeliveryOptionsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      selectShippingMethod: _this.selectShippingMethod.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "dataMap", {});

    _defineProperty(_assertThisInitialized(_this), "collectAdditionalData", function () {
      var selectedShippingMethodCode = _this.state.selectedShippingMethodCode;
      var additionalDataGetter = _this.dataMap[selectedShippingMethodCode];

      if (!additionalDataGetter) {
        return {};
      }

      return additionalDataGetter();
    });

    return _this;
  }

  _createClass(_CheckoutDeliveryOptionsContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutDeliveryOptionsContainer.prototype), "__construct", this).call(this, props);

      var shippingMethods = props.shippingMethods;
      this.state = {
        prevShippingMethods: shippingMethods
      };

      var selectedShippingMethodCode = CheckoutDeliveryOptionsContainer._getDefaultMethod(props);

      if (selectedShippingMethodCode) {
        this.state = _objectSpread2(_objectSpread2({}, this.state), {}, {
          selectedShippingMethodCode: selectedShippingMethodCode
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.formPortalCollector) {
        window.formPortalCollector.subscribe(_app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_2__["SHIPPING_STEP"], this.collectAdditionalData, 'CheckoutDeliveryOptions');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this$props = this.props,
          onShippingMethodSelect = _this$props.onShippingMethodSelect,
          shippingMethods = _this$props.shippingMethods;
      var selectedShippingMethodCode = this.state.selectedShippingMethodCode;
      var prevSelectedShippingMethodCode = prevState.selectedShippingMethodCode;

      if (selectedShippingMethodCode !== prevSelectedShippingMethodCode) {
        var shippingMethod = shippingMethods.find(function (_ref) {
          var method_code = _ref.method_code;
          return method_code === selectedShippingMethodCode;
        });
        onShippingMethodSelect(shippingMethod);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (window.formPortalCollector) {
        window.formPortalCollector.unsubscribe(_app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_2__["SHIPPING_STEP"], 'CheckoutDeliveryOptions');
      }
    }
  }, {
    key: "selectShippingMethod",
    value: function selectShippingMethod(shippingMethod) {
      var onShippingMethodSelect = this.props.onShippingMethodSelect;
      var method_code = shippingMethod.method_code;
      this.setState({
        selectedShippingMethodCode: method_code
      });
      onShippingMethodSelect(shippingMethod);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutDeliveryOptions_component__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, this.containerFunctions, this.state))
      );
    }
  }], [{
    key: "_getDefaultMethod",
    value: function _getDefaultMethod(props) {
      var shippingMethods = props.shippingMethods;

      var _shippingMethods = _slicedToArray(shippingMethods, 1),
          _shippingMethods$ = _shippingMethods[0];

      _shippingMethods$ = _shippingMethods$ === void 0 ? [{}] : _shippingMethods$;
      var method_code = _shippingMethods$.method_code;
      return method_code;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var shippingMethods = props.shippingMethods;
      var prevShippingMethods = state.prevShippingMethods;

      if (shippingMethods.length !== prevShippingMethods.length) {
        var selectedShippingMethodCode = CheckoutDeliveryOptionsContainer._getDefaultMethod(props);

        return {
          selectedShippingMethodCode: selectedShippingMethodCode,
          prevShippingMethods: shippingMethods
        };
      }

      return null;
    }
  }]);

  return _CheckoutDeliveryOptionsContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutDeliveryOptionsContainer, 'name', {
  value: 'CheckoutDeliveryOptionsContainer'
});

var CheckoutDeliveryOptionsContainer = middleware(_CheckoutDeliveryOptionsContainer, "Component/CheckoutDeliveryOptions/Container");

_defineProperty(CheckoutDeliveryOptionsContainer, "propTypes", {
  onShippingMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_3__["shippingMethodsType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutDeliveryOptionsContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.style.scss":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.style.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714694100
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/index.js":
/*!**************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutDeliveryOptions_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutDeliveryOptions.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutDeliveryOptions_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.component.js":
/*!******************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: _CheckoutGuestForm, CheckoutGuestForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutGuestForm", function() { return _CheckoutGuestForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuestForm", function() { return CheckoutGuestForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Field */ "../../../../../vendor/scandipwa/source/src/app/component/Field/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_FieldForm_FieldForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/FieldForm/FieldForm.component */ "../../../../../vendor/scandipwa/source/src/app/component/FieldForm/FieldForm.component.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_FormPortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/FormPortal */ "../../../../../vendor/scandipwa/source/src/app/component/FormPortal/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountConfirmEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountConfirmEmail */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountConfirmEmail/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountForgotPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountForgotPassword */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountForgotPassword/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountForgotPasswordSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountForgotPasswordSuccess */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountForgotPasswordSuccess/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountOverlay/MyAccountOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountSignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountSignIn */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountSignIn/index.js");
/* harmony import */ var _CheckoutGuestForm_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutGuestForm.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.style.scss");
/* harmony import */ var _CheckoutGuestForm_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CheckoutGuestForm_style__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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










/** @namespace Component/CheckoutGuestForm/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutGuestForm =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutGuestForm, _Extensible);

  function _CheckoutGuestForm() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, _CheckoutGuestForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutGuestForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderMap", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_SIGN_IN"], {
      render: function render() {
        return _this.renderSignIn();
      },
      title: __('Sign in to your account')
    }), _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_FORGOT_PASSWORD"], {
      render: function render() {
        return _this.renderForgotPassword();
      },
      title: __('Get password link')
    }), _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_FORGOT_PASSWORD_SUCCESS"], {
      render: function render() {
        return _this.renderForgotPasswordSuccess();
      }
    }), _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_LOGGED_IN"], {
      render: function render() {}
    }), _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_CONFIRM_EMAIL"], {
      render: function render() {
        return _this.renderConfirmEmail();
      },
      title: __('Confirm the email')
    }), _defineProperty(_defineProperty2, '', {
      render: function render() {
        return _this.renderGuestForm();
      },
      title: __('Enter personal information')
    }), _defineProperty2));

    return _this;
  }

  _createClass(_CheckoutGuestForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isEmailAvailable = _this$props.isEmailAvailable,
          setSignInState = _this$props.setSignInState,
          signInState = _this$props.signInState;
      var prevIsEmailAvailable = prevProps.isEmailAvailable;

      if (!isEmailAvailable && prevIsEmailAvailable && signInState !== _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_SIGN_IN"]) {
        setSignInState(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["STATE_SIGN_IN"]);
      }
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          block: "Checkout",
          elem: "Heading"
        }, __('Enter personal information'))
      );
    }
  }, {
    key: "renderCreateUserCheckbox",
    value: function renderCreateUserCheckbox() {
      var _this$props2 = this.props,
          isCreateUser = _this$props2.isCreateUser,
          handleCreateUser = _this$props2.handleCreateUser,
          isEmailConfirmationRequired = _this$props2.isEmailConfirmationRequired; // if email confirmation required and user is not logged in
      // the user is 100% not logged in (we are in the guest form)
      // do not show the checkbox to create the user account

      if (isEmailConfirmationRequired) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "checkbox",
          label: __('Create free account and keep track of your orders'),
          id: "guest_create_user",
          name: "guest_create_user",
          value: isCreateUser,
          skipValue: true,
          onChange: handleCreateUser
        })
      );
    }
  }, {
    key: "renderSignIn",
    value: function renderSignIn() {
      var _this$props3 = this.props,
          signInState = _this$props3.signInState,
          onFormError = _this$props3.onFormError,
          handleForgotPassword = _this$props3.handleForgotPassword,
          handleCreateAccount = _this$props3.handleCreateAccount,
          setLoadingState = _this$props3.setLoadingState,
          onSignIn = _this$props3.onSignIn,
          emailValue = _this$props3.emailValue;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountSignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          state: signInState,
          onFormError: onFormError,
          handleForgotPassword: handleForgotPassword,
          handleCreateAccount: handleCreateAccount,
          isCheckout: true,
          emailValue: emailValue,
          setLoadingState: setLoadingState,
          onSignIn: onSignIn
        })
      );
    }
  }, {
    key: "renderConfirmEmail",
    value: function renderConfirmEmail() {
      var _this$props4 = this.props,
          signInState = _this$props4.signInState,
          handleSignIn = _this$props4.handleSignIn;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountConfirmEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
          state: signInState,
          handleSignIn: handleSignIn
        })
      );
    }
  }, {
    key: "renderForgotPassword",
    value: function renderForgotPassword() {
      var _this$props5 = this.props,
          signInState = _this$props5.signInState,
          onFormError = _this$props5.onFormError,
          handleSignIn = _this$props5.handleSignIn,
          handleCreateAccount = _this$props5.handleCreateAccount,
          setSignInState = _this$props5.setSignInState,
          setLoadingState = _this$props5.setLoadingState;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountForgotPassword__WEBPACK_IMPORTED_MODULE_5__["default"], {
          state: signInState,
          onFormError: onFormError,
          handleSignIn: handleSignIn,
          handleCreateAccount: handleCreateAccount,
          setLoadingState: setLoadingState,
          setSignInState: setSignInState,
          isCheckout: true
        })
      );
    }
  }, {
    key: "renderForgotPasswordSuccess",
    value: function renderForgotPasswordSuccess() {
      var _this$props6 = this.props,
          signInState = _this$props6.signInState,
          handleSignIn = _this$props6.handleSignIn;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountForgotPasswordSuccess__WEBPACK_IMPORTED_MODULE_6__["default"], {
          state: signInState,
          handleSignIn: handleSignIn
        })
      );
    }
  }, {
    key: "renderSignInForm",
    value: function renderSignInForm() {
      var _this$props7 = this.props,
          signInState = _this$props7.signInState,
          onFormError = _this$props7.onFormError,
          handleForgotPassword = _this$props7.handleForgotPassword,
          handleCreateAccount = _this$props7.handleCreateAccount,
          isCheckout = _this$props7.isCheckout,
          setLoadingState = _this$props7.setLoadingState,
          onSignIn = _this$props7.onSignIn;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountSignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          state: signInState,
          onFormError: onFormError,
          handleForgotPassword: handleForgotPassword,
          handleCreateAccount: handleCreateAccount,
          isCheckout: isCheckout,
          setLoadingState: setLoadingState,
          onSignIn: onSignIn
        })
      );
    }
  }, {
    key: "renderGuestForm",
    value: function renderGuestForm() {
      var formId = this.props.formId;
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderHeading(),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_FormPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: formId,
          name: "CheckoutGuestForm"
        }, this.renderFields(), this.renderCreateUserCheckbox()))
      );
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var signInState = this.props.signInState;
      var render = this.renderMap[signInState].render;
      return render();
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutGuestForm",
          mix: {
            block: 'FieldForm'
          }
        }, this.renderForm())
      );
    }
  }, {
    key: "fieldMap",
    get: function get() {
      var _this$props8 = this.props,
          handleEmailInput = _this$props8.handleEmailInput,
          handlePasswordInput = _this$props8.handlePasswordInput,
          formId = _this$props8.formId,
          isCreateUser = _this$props8.isCreateUser,
          emailValue = _this$props8.emailValue;
      var fields = {
        guest_email: {
          form: formId,
          label: __('Email'),
          validation: ['notEmpty', 'email'],
          onChange: handleEmailInput,
          skipValue: true,
          value: emailValue
        }
      };

      if (isCreateUser) {
        fields.guest_password = {
          form: formId,
          label: __('Create Password'),
          onChange: handlePasswordInput,
          validation: ['notEmpty', 'password'],
          type: 'password',
          skipValue: true
        };
      }

      return fields;
    }
  }]);

  return _CheckoutGuestForm;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_FieldForm_FieldForm_component__WEBPACK_IMPORTED_MODULE_2__["default"]));
Object.defineProperty(_CheckoutGuestForm, 'name', {
  value: 'CheckoutGuestForm'
});

var CheckoutGuestForm = middleware(_CheckoutGuestForm, "Component/CheckoutGuestForm/Component");

_defineProperty(CheckoutGuestForm, "propTypes", {
  formId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  handleEmailInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleCreateUser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isEmailAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  emailValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  signInState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutGuestForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.container.js":
/*!******************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.container.js ***!
  \******************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, _CheckoutGuestFormContainer, CheckoutGuestFormContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutGuestFormContainer", function() { return _CheckoutGuestFormContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuestFormContainer", function() { return CheckoutGuestFormContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountOverlay/MyAccountOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _CheckoutGuestForm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckoutGuestForm.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







var MyAccountDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/MyAccount/MyAccount.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/MyAccount/MyAccount.dispatcher.js"));
/** @namespace Component/CheckoutGuestForm/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    isSignedIn: state.MyAccountReducer.isSignedIn,
    isEmailConfirmationRequired: state.ConfigReducer.is_email_confirmation_required,
    emailValue: state.CheckoutReducer.email,
    isEmailAvailable: state.CheckoutReducer.isEmailAvailable
  };
}, "Component/CheckoutGuestForm/Container/mapStateToProps");
/** @namespace Component/CheckoutGuestForm/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    signIn: function signIn(options) {
      return MyAccountDispatcher.then(function (_ref) {
        var dispatcher = _ref.default;
        return dispatcher.signIn(options, dispatch);
      });
    },
    showNotification: function showNotification(type, message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])(type, message));
    },
    showErrorNotification: function showErrorNotification(error) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])('error', error[0].message));
    }
  };
}, "Component/CheckoutGuestForm/Container/mapDispatchToProps");
/** @namespace Component/CheckoutGuestForm/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutGuestFormContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutGuestFormContainer, _Extensible);

  function _CheckoutGuestFormContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutGuestFormContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutGuestFormContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false,
      signInState: ''
    });

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      handleEmailInput: _this.handleEmailInput.bind(_assertThisInitialized(_this)),
      handleCreateUser: _this.handleCreateUser.bind(_assertThisInitialized(_this)),
      handlePasswordInput: _this.handlePasswordInput.bind(_assertThisInitialized(_this)),
      handleForgotPassword: _this.handleForgotPassword.bind(_assertThisInitialized(_this)),
      handleSignIn: _this.handleSignIn.bind(_assertThisInitialized(_this)),
      handleCreateAccount: _this.handleCreateAccount.bind(_assertThisInitialized(_this)),
      onFormError: _this.onFormError.bind(_assertThisInitialized(_this)),
      setSignInState: _this.setSignInState.bind(_assertThisInitialized(_this)),
      setLoadingState: _this.setLoadingState.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      var emailValue = _this.props.emailValue;
      return {
        formId: _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["SHIPPING_STEP"],
        emailValue: emailValue
      };
    });

    return _this;
  }

  _createClass(_CheckoutGuestFormContainer, [{
    key: "onFormError",
    value: function onFormError() {
      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "handleForgotPassword",
    value: function handleForgotPassword(e) {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        signInState: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_3__["STATE_FORGOT_PASSWORD"]
      });
    }
  }, {
    key: "handleSignIn",
    value: function handleSignIn(e) {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        signInState: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_3__["STATE_SIGN_IN"]
      });
    }
  }, {
    key: "handleCreateAccount",
    value: function handleCreateAccount(e) {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      this.setState({
        signInState: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_3__["STATE_CREATE_ACCOUNT"]
      });
    }
  }, {
    key: "setSignInState",
    value: function setSignInState(signInState) {
      this.setState({
        signInState: signInState
      });
    }
  }, {
    key: "setLoadingState",
    value: function setLoadingState(isLoading) {
      this.setState({
        isLoading: isLoading
      });
    }
  }, {
    key: "handleEmailInput",
    value: function handleEmailInput(email) {
      var onEmailChange = this.props.onEmailChange;
      onEmailChange(email);
    }
  }, {
    key: "handleCreateUser",
    value: function handleCreateUser() {
      var onCreateUserChange = this.props.onCreateUserChange;
      onCreateUserChange();
    }
  }, {
    key: "handlePasswordInput",
    value: function handlePasswordInput(password) {
      var onPasswordChange = this.props.onPasswordChange;
      onPasswordChange(password);
    }
  }, {
    key: "render",
    value: function render() {
      var isSignedIn = this.props.isSignedIn;

      if (isSignedIn) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutGuestForm_component__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, this.state, this.containerFunctions, this.containerProps()))
      );
    }
  }]);

  return _CheckoutGuestFormContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutGuestFormContainer, 'name', {
  value: 'CheckoutGuestFormContainer'
});

var CheckoutGuestFormContainer = middleware(_CheckoutGuestFormContainer, "Component/CheckoutGuestForm/Container");

_defineProperty(CheckoutGuestFormContainer, "propTypes", {
  isCreateUser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isSignedIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onEmailChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCreateUserChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onPasswordChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  emailValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isEmailAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  signIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

_defineProperty(CheckoutGuestFormContainer, "defaultProps", {
  emailValue: '',
  onSignIn: function onSignIn() {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutGuestFormContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.style.scss":
/*!****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.style.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714694132
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/index.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutGuestForm/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutGuestForm_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutGuestForm.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/CheckoutGuestForm.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutGuestForm_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js ***!
  \************************************************************************************************************************/
/*! exports provided: _CheckoutOrderSummary, CheckoutOrderSummary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutOrderSummary", function() { return _CheckoutOrderSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOrderSummary", function() { return CheckoutOrderSummary; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CartItem */ "../../../../../vendor/scandipwa/source/src/app/component/CartItem/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Price */ "../../../../../vendor/scandipwa/source/src/app/util/Price/index.js");
/* harmony import */ var _CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckoutOrderSummary.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.style.scss");
/* harmony import */ var _CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * Checkout Order Summary component
 * @namespace Component/CheckoutOrderSummary/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutOrderSummary =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutOrderSummary, _Extensible);

  function _CheckoutOrderSummary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutOrderSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutOrderSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item) {
      var quote_currency_code = _this.props.totals.quote_currency_code;
      var item_id = item.item_id;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: item_id,
          item: item,
          currency_code: quote_currency_code
        })
      );
    });

    return _this;
  }

  _createClass(_CheckoutOrderSummary, [{
    key: "renderPriceLine",
    value: function renderPriceLine(price, name, mods) {
      if (!price) {
        return null;
      }

      var quote_currency_code = this.props.totals.quote_currency_code;
      var priceString = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_5__["formatPrice"])(price, quote_currency_code);
      return (
        /*#__PURE__*/
        _checkBEM(React, "li", {
          block: "CheckoutOrderSummary",
          elem: "SummaryItem",
          mods: mods
        },
        /*#__PURE__*/
        _checkBEM(React, "strong", {
          block: "CheckoutOrderSummary",
          elem: "Text"
        }, name),
        /*#__PURE__*/
        _checkBEM(React, "strong", {
          block: "CheckoutOrderSummary",
          elem: "Text"
        }, "".concat(priceString)))
      );
    }
  }, {
    key: "renderDiscount",
    value: function renderDiscount() {
      var _this$props$totals = this.props.totals,
          applied_rule_ids = _this$props$totals.applied_rule_ids,
          discount_amount = _this$props$totals.discount_amount,
          coupon_code = _this$props$totals.coupon_code;

      if (!applied_rule_ids) {
        return null;
      }

      if (!coupon_code) {
        return this.renderPriceLine(-Math.abs(discount_amount), __('Discount %s:', ''));
      }

      return this.renderPriceLine(-Math.abs(discount_amount), __('Discount/Coupon %s:', coupon_code.toUpperCase()));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this$props$totals$it = this.props.totals.items,
          items = _this$props$totals$it === void 0 ? [] : _this$props$totals$it;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutOrderSummary",
          elem: "OrderItems"
        },
        /*#__PURE__*/
        _checkBEM(React, "ul", {
          block: "CheckoutOrderSummary",
          elem: "CartItemList"
        }, items.map(this.renderItem)))
      );
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      var items_qty = this.props.totals.items_qty;
      return (
        /*#__PURE__*/
        _checkBEM(React, "h3", {
          block: "CheckoutOrderSummary",
          elem: "Header",
          mix: {
            block: 'CheckoutPage',
            elem: 'Heading',
            mods: {
              hasDivider: true
            }
          }
        },
        /*#__PURE__*/
        _checkBEM(React, "span", null, __('Order Summary')),
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CheckoutOrderSummary",
          elem: "ItemsInCart"
        }, __('%s Item(s) In Cart', items_qty)))
      );
    }
  }, {
    key: "renderTotals",
    value: function renderTotals() {
      var _this$props = this.props,
          _this$props$totals2 = _this$props.totals,
          subtotal = _this$props$totals2.subtotal,
          subtotal_with_discount = _this$props$totals2.subtotal_with_discount,
          tax_amount = _this$props$totals2.tax_amount,
          grand_total = _this$props$totals2.grand_total,
          shipping_amount = _this$props$totals2.shipping_amount,
          checkoutStep = _this$props.checkoutStep;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutOrderSummary",
          elem: "OrderTotals"
        },
        /*#__PURE__*/
        _checkBEM(React, "ul", null, this.renderPriceLine(subtotal, __('Cart Subtotal')), checkoutStep !== _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_3__["SHIPPING_STEP"] ? this.renderPriceLine(shipping_amount, __('Shipping'), {
          divider: true
        }) : null, this.renderDiscount(), this.renderPriceLine(tax_amount, __('Tax')), checkoutStep !== _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_3__["SHIPPING_STEP"] ? this.renderPriceLine(grand_total, __('Order total')) : this.renderPriceLine(subtotal_with_discount + tax_amount, __('Order total'))))
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "article", {
          block: "CheckoutOrderSummary",
          "aria-label": "Order Summary"
        }, this.renderHeading(), this.renderItems(), this.renderTotals())
      );
    }
  }]);

  return _CheckoutOrderSummary;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutOrderSummary, 'name', {
  value: 'CheckoutOrderSummary'
});

var CheckoutOrderSummary = middleware(_CheckoutOrderSummary, "Component/CheckoutOrderSummary/Component");

_defineProperty(CheckoutOrderSummary, "propTypes", {
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_4__["TotalsType"],
  checkoutStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

_defineProperty(CheckoutOrderSummary, "defaultProps", {
  totals: {}
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutOrderSummary);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.style.scss":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714686656
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/index.js":
/*!***********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutOrderSummary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutOrderSummary.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutOrderSummary_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.component.js":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: _CheckoutPayment, CheckoutPayment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutPayment", function() { return _CheckoutPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPayment", function() { return CheckoutPayment; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutPayment.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.style.scss");
/* harmony import */ var _CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




/** @namespace Component/CheckoutPayment/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutPayment =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutPayment, _Extensible);

  function _CheckoutPayment() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutPayment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutPayment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          method = _this$props.method;
      onClick(method);
    });

    return _this;
  }

  _createClass(_CheckoutPayment, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isSelected = _this$props2.isSelected,
          title = _this$props2.method.title;
      return (
        /*#__PURE__*/
        _checkBEM(React, "li", {
          block: "CheckoutPayment"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CheckoutPayment",
          mods: {
            isSelected: isSelected
          },
          elem: "Button",
          onClick: this.onClick,
          type: "button"
        }, title))
      );
    }
  }]);

  return _CheckoutPayment;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutPayment, 'name', {
  value: 'CheckoutPayment'
});

var CheckoutPayment = middleware(_CheckoutPayment, "Component/CheckoutPayment/Component");

_defineProperty(CheckoutPayment, "propTypes", {
  method: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_2__["paymentMethodType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(CheckoutPayment, "defaultProps", {
  isSelected: false
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPayment);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.style.scss":
/*!************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695435
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/index.js":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayment/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutPayment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutPayment.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/CheckoutPayment.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutPayment_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.component.js":
/*!****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: _CheckoutPayments, CheckoutPayments, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutPayments", function() { return _CheckoutPayments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPayments", function() { return CheckoutPayments; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Braintree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Braintree */ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutPayment */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayment/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Klarna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Klarna */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NotSupportedPayment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NotSupportedPayment */ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutPayments.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.config.js");
/* harmony import */ var _CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CheckoutPayments.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.style.scss");
/* harmony import */ var _CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console */

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









/** @namespace Component/CheckoutPayments/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutPayments =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutPayments, _Extensible);

  function _CheckoutPayments() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, _CheckoutPayments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutPayments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "paymentRenderMap", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_7__["BRAINTREE"], _this.renderBrainTreePayment.bind(_assertThisInitialized(_this))), _defineProperty(_defineProperty2, _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_7__["KLARNA"], _this.renderKlarnaPayment.bind(_assertThisInitialized(_this))), _defineProperty2));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderPayment", function (method) {
      var _this$props = _this.props,
          selectPaymentMethod = _this$props.selectPaymentMethod,
          selectedPaymentCode = _this$props.selectedPaymentCode;
      var code = method.code;
      var isSelected = selectedPaymentCode === code;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutPayment__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: code,
          isSelected: isSelected,
          method: method,
          onClick: selectPaymentMethod
        })
      );
    });

    return _this;
  }

  _createClass(_CheckoutPayments, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var _this$props2 = this.props,
          showError = _this$props2.showError,
          setOrderButtonEnableStatus = _this$props2.setOrderButtonEnableStatus;
      console.groupCollapsed('Suppressed error log:');
      console.error(error.toString(), info.toString());
      console.groupEnd();
      this.setState({
        hasError: true
      }, function () {
        setOrderButtonEnableStatus(false);
        showError("".concat(error, " Please try again later"));
      });
    }
  }, {
    key: "renderBrainTreePayment",
    value: function renderBrainTreePayment() {
      var initBraintree = this.props.initBraintree;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Braintree__WEBPACK_IMPORTED_MODULE_2__["default"], {
          init: initBraintree
        })
      );
    }
  }, {
    key: "renderKlarnaPayment",
    value: function renderKlarnaPayment() {
      var setOrderButtonEnableStatus = this.props.setOrderButtonEnableStatus;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Klarna__WEBPACK_IMPORTED_MODULE_4__["default"], {
          setOrderButtonEnableStatus: setOrderButtonEnableStatus
        })
      );
    }
  }, {
    key: "renderNotSupported",
    value: function renderNotSupported() {
      var setOrderButtonEnableStatus = this.props.setOrderButtonEnableStatus;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_NotSupportedPayment__WEBPACK_IMPORTED_MODULE_5__["default"], {
          disableButton: setOrderButtonEnableStatus
        })
      );
    }
  }, {
    key: "renderPayments",
    value: function renderPayments() {
      var paymentMethods = this.props.paymentMethods;
      return paymentMethods.map(this.renderPayment);
    }
  }, {
    key: "renderSelectedPayment",
    value: function renderSelectedPayment() {
      var selectedPaymentCode = this.props.selectedPaymentCode;
      var render = this.paymentRenderMap[selectedPaymentCode];

      if (!render) {
        return null;
      }

      return render();
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          block: "Checkout",
          elem: "Heading"
        }, __('Select payment method'))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var hasError = this.state.hasError;

      if (hasError) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "p", null, __('The error occurred during initializing payment methods. Please try again later!'))
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderHeading(),
        /*#__PURE__*/
        _checkBEM(React, "ul", {
          block: "CheckoutPayments",
          elem: "Methods"
        }, this.renderPayments()), this.renderSelectedPayment())
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutPayments"
        }, this.renderContent())
      );
    }
  }]);

  return _CheckoutPayments;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutPayments, 'name', {
  value: 'CheckoutPayments'
});

var CheckoutPayments = middleware(_CheckoutPayments, "Component/CheckoutPayments/Component");

_defineProperty(CheckoutPayments, "propTypes", {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectPaymentMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  initBraintree: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_6__["paymentMethodsType"].isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedPaymentCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  billingAddress: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    city: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    company: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    country_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    postcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    region_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    region: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    street: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),
    telephone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPayments);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.config.js":
/*!*************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.config.js ***!
  \*************************************************************************************************************/
/*! exports provided: KLARNA, BRAINTREE, CHECK_MONEY, PAYPAL_EXPRESS, PAYPAL_EXPRESS_CREDIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA", function() { return KLARNA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAINTREE", function() { return BRAINTREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_MONEY", function() { return CHECK_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYPAL_EXPRESS", function() { return PAYPAL_EXPRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYPAL_EXPRESS_CREDIT", function() { return PAYPAL_EXPRESS_CREDIT; });
/* eslint-disable import/prefer-default-export */

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
var KLARNA = 'klarna_kp';
var BRAINTREE = 'braintree';
var CHECK_MONEY = 'checkmo';
var PAYPAL_EXPRESS = 'paypal_express';
var PAYPAL_EXPRESS_CREDIT = 'paypal_express_bml';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.container.js":
/*!****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: mapDispatchToProps, _CheckoutPaymentsContainer, CheckoutPaymentsContainer, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutPaymentsContainer", function() { return _CheckoutPaymentsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentsContainer", function() { return CheckoutPaymentsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Braintree_Braintree_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Braintree/Braintree.config */ "../../../../../vendor/scandipwa/source/src/app/component/Braintree/Braintree.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Klarna_Klarna_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Klarna/Klarna.container */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.container.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Braintree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Braintree */ "../../../../../vendor/scandipwa/source/src/app/util/Braintree/index.js");
/* harmony import */ var _CheckoutPayments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutPayments.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.component.js");
/* harmony import */ var _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckoutPayments.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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











/** @namespace Component/CheckoutPayments/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    showError: function showError(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__["showNotification"])('error', message));
    }
  };
}, "Component/CheckoutPayments/Container/mapDispatchToProps");
/** @namespace Component/CheckoutPayments/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutPaymentsContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutPaymentsContainer, _Extensible);

  function _CheckoutPaymentsContainer() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, _CheckoutPaymentsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutPaymentsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      initBraintree: _this.initBraintree.bind(_assertThisInitialized(_this)),
      selectPaymentMethod: _this.selectPaymentMethod.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "braintree", new _app_design_frontend_Scandiweb_pwa_src_app_util_Braintree__WEBPACK_IMPORTED_MODULE_8__["default"](_app_design_frontend_Scandiweb_pwa_src_app_component_Braintree_Braintree_config__WEBPACK_IMPORTED_MODULE_3__["BRAINTREE_CONTAINER_ID"]));

    _defineProperty(_assertThisInitialized(_this), "dataMap", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_10__["BRAINTREE"], _this.getBraintreeData.bind(_assertThisInitialized(_this))), _defineProperty(_defineProperty2, _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_10__["KLARNA"], _this.getKlarnaData.bind(_assertThisInitialized(_this))), _defineProperty2));

    _defineProperty(_assertThisInitialized(_this), "collectAdditionalData", function () {
      var selectedPaymentCode = _this.state.selectedPaymentCode;
      var additionalDataGetter = _this.dataMap[selectedPaymentCode];

      if (!additionalDataGetter) {
        return {};
      }

      return additionalDataGetter();
    });

    return _this;
  }

  _createClass(_CheckoutPaymentsContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutPaymentsContainer.prototype), "__construct", this).call(this, props);

      var paymentMethods = props.paymentMethods;

      var _paymentMethods = _slicedToArray(paymentMethods, 1),
          _paymentMethods$ = _paymentMethods[0];

      _paymentMethods$ = _paymentMethods$ === void 0 ? {} : _paymentMethods$;
      var code = _paymentMethods$.code;
      this.state = {
        selectedPaymentCode: code
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.formPortalCollector) {
        window.formPortalCollector.subscribe(_app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_5__["BILLING_STEP"], this.collectAdditionalData, 'CheckoutPaymentsContainer');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (window.formPortalCollector) {
        window.formPortalCollector.unsubscribe(_app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_5__["BILLING_STEP"], 'CheckoutPaymentsContainer');
      }
    }
  }, {
    key: "getKlarnaData",
    value: function getKlarnaData() {
      return {
        asyncData: _app_design_frontend_Scandiweb_pwa_src_app_component_Klarna_Klarna_container__WEBPACK_IMPORTED_MODULE_4__["KlarnaContainer"].authorize()
      };
    }
  }, {
    key: "getBraintreeData",
    value: function getBraintreeData() {
      return {
        asyncData: this.braintree.requestPaymentNonce()
      };
    }
  }, {
    key: "initBraintree",
    value: function initBraintree() {
      return this.braintree.create();
    }
  }, {
    key: "selectPaymentMethod",
    value: function selectPaymentMethod(_ref) {
      var code = _ref.code;
      var _this$props = this.props,
          onPaymentMethodSelect = _this$props.onPaymentMethodSelect,
          setOrderButtonEnableStatus = _this$props.setOrderButtonEnableStatus;
      this.setState({
        selectedPaymentCode: code
      });
      onPaymentMethodSelect(code);
      setOrderButtonEnableStatus(true);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutPayments_component__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, this.props, this.containerFunctions, this.state))
      );
    }
  }]);

  return _CheckoutPaymentsContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/** @namespace Component/CheckoutPayments/Container/mapStateToProps */
// eslint-disable-next-line no-unused-vars

Object.defineProperty(_CheckoutPaymentsContainer, 'name', {
  value: 'CheckoutPaymentsContainer'
});

var CheckoutPaymentsContainer = middleware(_CheckoutPaymentsContainer, "Component/CheckoutPayments/Container");

_defineProperty(CheckoutPaymentsContainer, "propTypes", {
  onPaymentMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_7__["paymentMethodsType"].isRequired
});

var mapStateToProps = middleware(function (state) {
  return {};
}, "Component/CheckoutPayments/Container/mapStateToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutPaymentsContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.style.scss":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.style.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714694021
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/index.js":
/*!*******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutPayments/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutPayments_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutPayments.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutPayments/CheckoutPayments.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutPayments_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.component.js":
/*!****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: _CheckoutShipping, CheckoutShipping, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutShipping", function() { return _CheckoutShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutShipping", function() { return CheckoutShipping; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutAddressBook */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutAddressBook/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutDeliveryOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutDeliveryOptions */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutDeliveryOptions/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutGuestForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutGuestForm */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutGuestForm/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Form */ "../../../../../vendor/scandipwa/source/src/app/component/Form/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout/Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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









/** @namespace Component/CheckoutShipping/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutShipping =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutShipping, _Extensible);

  function _CheckoutShipping() {
    _classCallCheck(this, _CheckoutShipping);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutShipping).apply(this, arguments));
  }

  _createClass(_CheckoutShipping, [{
    key: "renderActions",
    value: function renderActions() {
      var selectedShippingMethod = this.props.selectedShippingMethod;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Checkout",
          elem: "StickyButtonWrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          type: "submit",
          block: "Button",
          disabled: !selectedShippingMethod,
          mix: {
            block: 'CheckoutShipping',
            elem: 'Button'
          }
        }, __('Proceed to billing')))
      );
    }
  }, {
    key: "renderDelivery",
    value: function renderDelivery() {
      var _this$props = this.props,
          shippingMethods = _this$props.shippingMethods,
          onShippingMethodSelect = _this$props.onShippingMethodSelect;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutDeliveryOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
          shippingMethods: shippingMethods,
          onShippingMethodSelect: onShippingMethodSelect
        })
      );
    }
  }, {
    key: "renderAddressBook",
    value: function renderAddressBook() {
      var _this$props2 = this.props,
          onAddressSelect = _this$props2.onAddressSelect,
          onShippingEstimationFieldsChange = _this$props2.onShippingEstimationFieldsChange;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onAddressSelect: onAddressSelect,
          onShippingEstimationFieldsChange: onShippingEstimationFieldsChange
        })
      );
    }
  }, {
    key: "renderGuestForm",
    value: function renderGuestForm() {
      var _this$props3 = this.props,
          isCreateUser = _this$props3.isCreateUser,
          onEmailChange = _this$props3.onEmailChange,
          onCreateUserChange = _this$props3.onCreateUserChange,
          onPasswordChange = _this$props3.onPasswordChange;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutGuestForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isBilling: false,
          isCreateUser: isCreateUser,
          onEmailChange: onEmailChange,
          onCreateUserChange: onCreateUserChange,
          onPasswordChange: onPasswordChange
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onShippingSuccess = _this$props4.onShippingSuccess,
          onShippingError = _this$props4.onShippingError,
          isLoading = _this$props4.isLoading;
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderGuestForm(),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: _app_design_frontend_Scandiweb_pwa_src_app_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_7__["SHIPPING_STEP"],
          mix: {
            block: 'CheckoutShipping'
          },
          onSubmitError: onShippingError,
          onSubmitSuccess: onShippingSuccess
        }, this.renderAddressBook(),
        /*#__PURE__*/
        _checkBEM(React, "div", null,
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isLoading: isLoading
        }), this.renderDelivery(), this.renderActions())))
      );
    }
  }]);

  return _CheckoutShipping;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutShipping, 'name', {
  value: 'CheckoutShipping'
});

var CheckoutShipping = middleware(_CheckoutShipping, "Component/CheckoutShipping/Component");

_defineProperty(CheckoutShipping, "propTypes", {
  onShippingSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_8__["shippingMethodsType"].isRequired,
  onShippingMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedShippingMethod: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_8__["shippingMethodType"],
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isCreateUser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onEmailChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCreateUserChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onPasswordChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

_defineProperty(CheckoutShipping, "defaultProps", {
  selectedShippingMethod: null
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutShipping);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.container.js":
/*!****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, _CheckoutShippingContainer, CheckoutShippingContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutShippingContainer", function() { return _CheckoutShippingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutShippingContainer", function() { return CheckoutShippingContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Checkout_Checkout_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Checkout/Checkout.action */ "../../../../../vendor/scandipwa/source/src/app/store/Checkout/Checkout.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Address */ "../../../../../vendor/scandipwa/source/src/app/util/Address/index.js");
/* harmony import */ var _CheckoutShipping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutShipping.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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








/** @namespace Component/CheckoutShipping/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer,
    addressLinesQty: state.ConfigReducer.address_lines_quantity
  };
}, "Component/CheckoutShipping/Container/mapStateToProps");
/** @namespace Component/CheckoutShipping/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    updateShippingFields: function updateShippingFields(fields) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Checkout_Checkout_action__WEBPACK_IMPORTED_MODULE_3__["updateShippingFields"])(fields));
    }
  };
}, "Component/CheckoutShipping/Container/mapDispatchToProps");
/** @namespace Component/CheckoutShipping/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutShippingContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutShippingContainer, _Extensible);

  function _CheckoutShippingContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutShippingContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutShippingContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      onShippingSuccess: _this.onShippingSuccess.bind(_assertThisInitialized(_this)),
      onShippingError: _this.onShippingError.bind(_assertThisInitialized(_this)),
      onAddressSelect: _this.onAddressSelect.bind(_assertThisInitialized(_this)),
      onShippingMethodSelect: _this.onShippingMethodSelect.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_CheckoutShippingContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutShippingContainer.prototype), "__construct", this).call(this, props);

      var shippingMethods = props.shippingMethods;

      var _shippingMethods = _slicedToArray(shippingMethods, 1),
          selectedShippingMethod = _shippingMethods[0];

      this.state = {
        selectedCustomerAddressId: 0,
        selectedShippingMethod: selectedShippingMethod
      };
    }
  }, {
    key: "onAddressSelect",
    value: function onAddressSelect(id) {
      this.setState({
        selectedCustomerAddressId: id
      });
    }
  }, {
    key: "onShippingMethodSelect",
    value: function onShippingMethodSelect(method) {
      this.setState({
        selectedShippingMethod: method
      });
    }
  }, {
    key: "onShippingError",
    value: function onShippingError() {// TODO: implement notification if some data in Form can not display error
    }
  }, {
    key: "onShippingSuccess",
    value: function onShippingSuccess(fields) {
      var _this$props = this.props,
          saveAddressInformation = _this$props.saveAddressInformation,
          updateShippingFields = _this$props.updateShippingFields,
          addressLinesQty = _this$props.addressLinesQty;
      var _this$state = this.state,
          selectedCustomerAddressId = _this$state.selectedCustomerAddressId,
          selectedShippingMethod = _this$state.selectedShippingMethod;
      var formFields = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_6__["getFormFields"])(fields, addressLinesQty);
      var shippingAddress = selectedCustomerAddressId ? this._getAddressById(selectedCustomerAddressId) : Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_6__["trimAddressFields"])(formFields);
      var shipping_carrier_code = selectedShippingMethod.carrier_code,
          shipping_method_code = selectedShippingMethod.method_code;
      var data = {
        billing_address: shippingAddress,
        shipping_address: shippingAddress,
        shipping_carrier_code: shipping_carrier_code,
        shipping_method_code: shipping_method_code
      };
      saveAddressInformation(data);
      updateShippingFields(fields);
    }
  }, {
    key: "_getAddressById",
    value: function _getAddressById(addressId) {
      var addresses = this.props.customer.addresses;
      var address = addresses.find(function (_ref) {
        var id = _ref.id;
        return id === addressId;
      });
      return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_6__["trimCustomerAddress"])(address);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutShipping_component__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, this.state, this.containerFunctions))
      );
    }
  }]);

  return _CheckoutShippingContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutShippingContainer, 'name', {
  value: 'CheckoutShippingContainer'
});

var CheckoutShippingContainer = middleware(_CheckoutShippingContainer, "Component/CheckoutShipping/Container");

_defineProperty(CheckoutShippingContainer, "propTypes", {
  saveAddressInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_5__["shippingMethodsType"].isRequired,
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_4__["customerType"].isRequired,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  updateShippingFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutShippingContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/index.js":
/*!*******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutShipping/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutShipping_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutShipping.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/CheckoutShipping.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutShipping_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.component.js":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: _CheckoutSuccess, CheckoutSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutSuccess", function() { return _CheckoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSuccess", function() { return CheckoutSuccess; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutSuccess.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.style.scss");
/* harmony import */ var _CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




/** @namespace Component/CheckoutSuccess/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutSuccess =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutSuccess, _Extensible);

  function _CheckoutSuccess() {
    _classCallCheck(this, _CheckoutSuccess);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutSuccess).apply(this, arguments));
  }

  _createClass(_CheckoutSuccess, [{
    key: "renderButtons",
    value: function renderButtons() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutSuccess",
          elem: "ButtonWrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
          block: "Button",
          mix: {
            block: 'CheckoutSuccess',
            elem: 'ContinueButton'
          },
          to: "/"
        }, __('Continue shopping')))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var orderID = this.props.orderID;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CheckoutSuccess"
        },
        /*#__PURE__*/
        _checkBEM(React, "h3", null, __('Your order # is: %s', orderID)),
        /*#__PURE__*/
        _checkBEM(React, "p", null, __('We`ll email you an order confirmation with details and tracking info.')), this.renderButtons())
      );
    }
  }]);

  return _CheckoutSuccess;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutSuccess, 'name', {
  value: 'CheckoutSuccess'
});

var CheckoutSuccess = middleware(_CheckoutSuccess, "Component/CheckoutSuccess/Component");

_defineProperty(CheckoutSuccess, "propTypes", {
  orderID: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutSuccess);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.style.scss":
/*!************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714685096
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/index.js":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutSuccess/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutSuccess_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutSuccess.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/CheckoutSuccess.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutSuccess_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js":
/*!**********************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: _CheckoutTermsAndConditionsPopup, CheckoutTermsAndConditionsPopup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutTermsAndConditionsPopup", function() { return _CheckoutTermsAndConditionsPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutTermsAndConditionsPopup", function() { return CheckoutTermsAndConditionsPopup; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Html */ "../../../../../vendor/scandipwa/source/src/app/component/Html/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Popup */ "../../../../../vendor/scandipwa/source/src/app/component/Popup/index.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.style */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.style.scss");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/** @namespace Component/CheckoutTermsAndConditionsPopup/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutTermsAndConditionsPopup =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutTermsAndConditionsPopup, _Extensible);

  function _CheckoutTermsAndConditionsPopup() {
    _classCallCheck(this, _CheckoutTermsAndConditionsPopup);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutTermsAndConditionsPopup).apply(this, arguments));
  }

  _createClass(_CheckoutTermsAndConditionsPopup, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props$payload$t = this.props.payload.text,
          text = _this$props$payload$t === void 0 ? 'No text was passed' : _this$props$payload$t;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: text
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"],
          clickOutside: false,
          mix: {
            block: 'CheckoutTermsAndConditionsPopup'
          }
        }, this.renderContent())
      );
    }
  }]);

  return _CheckoutTermsAndConditionsPopup;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CheckoutTermsAndConditionsPopup, 'name', {
  value: 'CheckoutTermsAndConditionsPopup'
});

var CheckoutTermsAndConditionsPopup = middleware(_CheckoutTermsAndConditionsPopup, "Component/CheckoutTermsAndConditionsPopup/Component");

_defineProperty(CheckoutTermsAndConditionsPopup, "propTypes", {
  payload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CheckoutTermsAndConditionsPopup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js":
/*!*******************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TERMS_AND_CONDITIONS_POPUP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMS_AND_CONDITIONS_POPUP_ID", function() { return TERMS_AND_CONDITIONS_POPUP_ID; });
/* eslint-disable import/prefer-default-export */

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
var TERMS_AND_CONDITIONS_POPUP_ID = 'CheckoutTermsAndConditionsPopup';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js":
/*!**********************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: mapStateToProps, _CheckoutTermsAndConditionsPopupContainer, CheckoutTermsAndConditionsPopupContainer, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutTermsAndConditionsPopupContainer", function() { return _CheckoutTermsAndConditionsPopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutTermsAndConditionsPopupContainer", function() { return CheckoutTermsAndConditionsPopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.component */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.config */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/** @namespace Component/CheckoutTermsAndConditionsPopup/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    payload: state.PopupReducer.popupPayload[_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"]] || {}
  };
}, "Component/CheckoutTermsAndConditionsPopup/Container/mapStateToProps");
/** @namespace Component/CheckoutTermsAndConditionsPopup/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutTermsAndConditionsPopupContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutTermsAndConditionsPopupContainer, _Extensible);

  function _CheckoutTermsAndConditionsPopupContainer() {
    _classCallCheck(this, _CheckoutTermsAndConditionsPopupContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutTermsAndConditionsPopupContainer).apply(this, arguments));
  }

  _createClass(_CheckoutTermsAndConditionsPopupContainer, [{
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CheckoutTermsAndConditionsPopup_component__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _CheckoutTermsAndConditionsPopupContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/** @namespace Component/CheckoutTermsAndConditionsPopup/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

Object.defineProperty(_CheckoutTermsAndConditionsPopupContainer, 'name', {
  value: 'CheckoutTermsAndConditionsPopupContainer'
});

var CheckoutTermsAndConditionsPopupContainer = middleware(_CheckoutTermsAndConditionsPopupContainer, "Component/CheckoutTermsAndConditionsPopup/Container");

_defineProperty(CheckoutTermsAndConditionsPopupContainer, "propTypes", {
  payload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })
});

_defineProperty(CheckoutTermsAndConditionsPopupContainer, "defaultProps", {
  payload: {
    text: ''
  }
});

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/CheckoutTermsAndConditionsPopup/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutTermsAndConditionsPopupContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.style.scss":
/*!********************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.style.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714693999
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/index.js":
/*!**********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutTermsAndConditionsPopup_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.container */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutTermsAndConditionsPopup_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/FormPortal/FormPortal.component.js":
/*!****************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/FormPortal/FormPortal.component.js ***!
  \****************************************************************************************************/
/*! exports provided: _FormPortal, FormPortal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FormPortal", function() { return _FormPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPortal", function() { return FormPortal; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Form_Form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Form/Form.component */ "../../../../../vendor/scandipwa/source/src/app/component/Form/Form.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/** @namespace Component/FormPortal/Component */

var _FormPortal =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_FormPortal, _Extensible);

  function _FormPortal() {
    _classCallCheck(this, _FormPortal);

    return _possibleConstructorReturn(this, _getPrototypeOf(_FormPortal).apply(this, arguments));
  }

  _createClass(_FormPortal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.id;
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name;

      if (id !== prevId) {
        this.unsubscribeToFormPortalCollector(prevId, name);
        this.subscribeToFormPortalCollector(id, name);
      }
    }
  }, {
    key: "subscribeToFormPortalCollector",
    value: function subscribeToFormPortalCollector(id, name) {
      if (window.formPortalCollector) {
        window.formPortalCollector.subscribe(id, this.collectFieldsInformation, name);
      }
    }
  }, {
    key: "unsubscribeToFormPortalCollector",
    value: function unsubscribeToFormPortalCollector(id, name) {
      if (window.formPortalCollector) {
        window.formPortalCollector.unsubscribe(id, name);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          name = _this$props2.name;
      this.unsubscribeToFormPortalCollector(id, name);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          name = _this$props3.name;

      if (!id) {
        throw new Error('Can not create a FormPortal without assignment to the Form ID!');
      }

      this.subscribeToFormPortalCollector(id, name);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.state.children;
      return children;
    }
  }]);

  return _FormPortal;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_Form_Form_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
Object.defineProperty(_FormPortal, 'name', {
  value: 'FormPortal'
});

var FormPortal = middleware(_FormPortal, "Component/FormPortal/Component");

_defineProperty(FormPortal, "propTypes", _objectSpread2(_objectSpread2({}, _app_design_frontend_Scandiweb_pwa_src_app_component_Form_Form_component__WEBPACK_IMPORTED_MODULE_1__["default"].propTypes), {}, {
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}));

/* harmony default export */ __webpack_exports__["default"] = (FormPortal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/FormPortal/index.js":
/*!*************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/FormPortal/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormPortal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormPortal.component */ "../../../../../vendor/scandipwa/source/src/app/component/FormPortal/FormPortal.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormPortal_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.component.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Klarna/Klarna.component.js ***!
  \********************************************************************************************/
/*! exports provided: CartDispatcher, _Klarna, Klarna, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Klarna", function() { return _Klarna; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Klarna", function() { return Klarna; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Html */ "../../../../../vendor/scandipwa/source/src/app/component/Html/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_query_Klarna_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/query/Klarna.query */ "../../../../../vendor/scandipwa/source/src/app/query/Klarna.query.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Auth */ "../../../../../vendor/scandipwa/source/src/app/util/Auth/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request */ "../../../../../vendor/scandipwa/source/src/app/util/Request/index.js");
/* harmony import */ var _Klarna_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Klarna.config */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.config.js");
/* harmony import */ var _Klarna_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Klarna.style */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.style.scss");
/* harmony import */ var _Klarna_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Klarna_style__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console */

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









var CartDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Cart/Cart.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/Cart/Cart.dispatcher.js"));
/** @namespace Component/Klarna/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Klarna =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Klarna, _Extensible);

  function _Klarna() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _Klarna);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Klarna)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: true
    });

    return _this;
  }

  _createClass(_Klarna, [{
    key: "initiateKlarna",
    value: function () {
      var _initiateKlarna = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, showError, setOrderButtonEnableStatus, guest_cart_id, _ref2, client_token;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, showError = _this$props.showError, setOrderButtonEnableStatus = _this$props.setOrderButtonEnableStatus;
                _context.next = 3;
                return CartDispatcher.then(function (_ref) {
                  var dispatcher = _ref.default;
                  return dispatcher._getGuestQuoteId();
                });

              case 3:
                guest_cart_id = _context.sent;
                _context.prev = 4;
                setOrderButtonEnableStatus(false);
                _context.next = 8;
                return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_7__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Klarna_query__WEBPACK_IMPORTED_MODULE_5__["default"].getCreateKlarnaTokenMutation(!Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_6__["isSignedIn"])() ? {
                  guest_cart_id: guest_cart_id
                } : {}));

              case 8:
                _ref2 = _context.sent;
                client_token = _ref2.klarnaToken;
                window.Klarna.Payments.init({
                  client_token: client_token
                });
                window.Klarna.Payments.load({
                  container: "#".concat(_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_PAYMENTS_CONTAINER_ID"]),
                  payment_method_category: 'pay_later'
                });
                setOrderButtonEnableStatus(true);
                _context.next = 21;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](4);
                console.groupCollapsed('Suppressed error log:');
                console.error(_context.t0);
                console.groupEnd();
                showError(__('Error initializing Klarna payment method.'));

              case 21:
                this.setState({
                  isLoading: false
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 15]]);
      }));

      function initiateKlarna() {
        return _initiateKlarna.apply(this, arguments);
      }

      return initiateKlarna;
    }()
  }, {
    key: "renderScript",
    value: function renderScript() {
      window.klarnaAsyncCallback = this.initiateKlarna.bind(this);
      var script = document.getElementById(_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_SCRIPT_ID"]);

      if (script) {
        script.parentNode.removeChild(script);
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: "<script\n                      async\n                      id=".concat(_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_SCRIPT_ID"], "\n                      src='https://x.klarnacdn.net/kp/lib/v1/api.js'\n                ></script>")
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Klarna"
        }, this.renderScript(),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isLoading: isLoading
        }),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          id: _Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_PAYMENTS_CONTAINER_ID"]
        }))
      );
    }
  }]);

  return _Klarna;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
Object.defineProperty(_Klarna, 'name', {
  value: 'Klarna'
});

var Klarna = middleware(_Klarna, "Component/Klarna/Component");

_defineProperty(Klarna, "propTypes", {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Klarna);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.config.js":
/*!*****************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Klarna/Klarna.config.js ***!
  \*****************************************************************************************/
/*! exports provided: KLARNA_SCRIPT_ID, KLARNA_PAYMENTS_CONTAINER_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA_SCRIPT_ID", function() { return KLARNA_SCRIPT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA_PAYMENTS_CONTAINER_ID", function() { return KLARNA_PAYMENTS_CONTAINER_ID; });
/* eslint-disable import/prefer-default-export */

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
var KLARNA_SCRIPT_ID = 'klarna_script';
var KLARNA_PAYMENTS_CONTAINER_ID = 'klarna-payments-container';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.container.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Klarna/Klarna.container.js ***!
  \********************************************************************************************/
/*! exports provided: mapDispatchToProps, _KlarnaContainer, KlarnaContainer, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_KlarnaContainer", function() { return _KlarnaContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlarnaContainer", function() { return KlarnaContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _Klarna_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Klarna.component */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable no-undef */

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




/** @namespace Component/Klarna/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    showError: function showError(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_2__["showNotification"])('error', message));
    }
  };
}, "Component/Klarna/Container/mapDispatchToProps");
/** @namespace Component/Klarna/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _KlarnaContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_KlarnaContainer, _Extensible);

  function _KlarnaContainer() {
    _classCallCheck(this, _KlarnaContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(_KlarnaContainer).apply(this, arguments));
  }

  _createClass(_KlarnaContainer, [{
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _Klarna_component__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)
      );
    }
  }], [{
    key: "authorize",
    value: function authorize() {
      return new Promise(function (resolve, reject) {
        window.Klarna.Payments.authorize({
          payment_method_category: 'pay_later'
        }, {}, function (res) {
          var error = res.error,
              approved = res.approved,
              authorization_token = res.authorization_token;

          if (!approved) {
            reject(error);
          }

          resolve({
            authorization_token: authorization_token
          });
        });
      });
    }
  }]);

  return _KlarnaContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/** @namespace Component/Klarna/Container/mapStateToProps */
// eslint-disable-next-line no-unused-vars

Object.defineProperty(_KlarnaContainer, 'name', {
  value: 'KlarnaContainer'
});

var KlarnaContainer = middleware(_KlarnaContainer, "Component/Klarna/Container");
var mapStateToProps = middleware(function (state) {
  return {};
}, "Component/Klarna/Container/mapStateToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(KlarnaContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.style.scss":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Klarna/Klarna.style.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695211
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/index.js":
/*!*********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Klarna/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Klarna_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Klarna.container */ "../../../../../vendor/scandipwa/source/src/app/component/Klarna/Klarna.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Klarna_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.component.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.component.js ***!
  \**********************************************************************************************************************/
/*! exports provided: _NotSupportedPayment, NotSupportedPayment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_NotSupportedPayment", function() { return _NotSupportedPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedPayment", function() { return NotSupportedPayment; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotSupportedPayment.style */ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.style.scss");
/* harmony import */ var _NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



/** @namespace Component/NotSupportedPayment/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _NotSupportedPayment =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_NotSupportedPayment, _Extensible);

  function _NotSupportedPayment() {
    _classCallCheck(this, _NotSupportedPayment);

    return _possibleConstructorReturn(this, _getPrototypeOf(_NotSupportedPayment).apply(this, arguments));
  }

  _createClass(_NotSupportedPayment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var disableButton = this.props.disableButton;
      disableButton();
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "NotSupportedPayment"
        },
        /*#__PURE__*/
        _checkBEM(React, "p", null, __('This payment method is not supported yet.')))
      );
    }
  }]);

  return _NotSupportedPayment;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_NotSupportedPayment, 'name', {
  value: 'NotSupportedPayment'
});

var NotSupportedPayment = middleware(_NotSupportedPayment, "Component/NotSupportedPayment/Component");

_defineProperty(NotSupportedPayment, "propTypes", {
  disableButton: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (NotSupportedPayment);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.style.scss":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714695492
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/index.js":
/*!**********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/NotSupportedPayment/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotSupportedPayment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotSupportedPayment.component */ "../../../../../vendor/scandipwa/source/src/app/component/NotSupportedPayment/NotSupportedPayment.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotSupportedPayment_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/query/Checkout.query.js":
/*!*******************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/query/Checkout.query.js ***!
  \*******************************************************************************/
/*! exports provided: _CheckoutQuery, CheckoutQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutQuery", function() { return _CheckoutQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutQuery", function() { return CheckoutQuery; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Auth */ "../../../../../vendor/scandipwa/source/src/app/util/Auth/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Query */ "../../../../../vendor/scandipwa/source/src/app/util/Query/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


/** @namespace Query/Checkout */

var _CheckoutQuery =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutQuery, _Extensible);

  function _CheckoutQuery() {
    _classCallCheck(this, _CheckoutQuery);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CheckoutQuery).apply(this, arguments));
  }

  _createClass(_CheckoutQuery, [{
    key: "getPaymentMethodsQuery",
    value: function getPaymentMethodsQuery(guestCartId) {
      var query = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('getPaymentMethods').addFieldList(this._getPaymentMethodFields());

      this._addGuestCartId(guestCartId, query);

      return query;
    }
  }, {
    key: "getSaveGuestEmailMutation",
    value: function getSaveGuestEmailMutation(email, cart_id) {
      var input = {
        email: email,
        cart_id: cart_id
      };
      var mutation = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('setGuestEmailOnCart').addArgument('input', 'SetGuestEmailOnCartInput', input).addField(new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('cart').addField('email'));
      return mutation;
    }
  }, {
    key: "getEstimateShippingCosts",
    value: function getEstimateShippingCosts(address, guestCartId) {
      var mutation = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('estimateShippingCosts').addArgument('address', 'EstimateShippingCostsAddress!', address).addFieldList(this._getEstimatedShippingFields());

      this._addGuestCartId(guestCartId, mutation);

      return mutation;
    }
  }, {
    key: "getSaveAddressInformation",
    value: function getSaveAddressInformation(addressInformation, guestCartId) {
      var mutation = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('saveAddressInformation').addArgument('addressInformation', 'SaveAddressInformation!', addressInformation).addFieldList(this._getSaveAddressInformationFields());

      this._addGuestCartId(guestCartId, mutation);

      return mutation;
    }
  }, {
    key: "getSetBillingAddressOnCart",
    value: function getSetBillingAddressOnCart(input) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('s_setBillingAddressOnCart').addArgument('input', 'S_SetBillingAddressOnCartInput!', input).addField(this._getCartField()).setAlias('billingAddress');
    }
  }, {
    key: "getSetPaymentMethodOnCartMutation",
    value: function getSetPaymentMethodOnCartMutation(input) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('s_setPaymentMethodOnCart').addArgument('input', 'S_SetPaymentMethodOnCartInput!', input).addField(this._getCartField()).setAlias('paymentMethod');
    }
  }, {
    key: "getPlaceOrderMutation",
    value: function getPlaceOrderMutation(guestCartId) {
      var mutation = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('s_placeOrder').setAlias('placeOrder').addField(this._getOrderField());

      if (!Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_0__["isSignedIn"])()) {
        mutation.addArgument('guestCartId', 'String', guestCartId);
      }

      return mutation;
    }
  }, {
    key: "_addGuestCartId",
    value: function _addGuestCartId(guestCartId, mutation) {
      if (guestCartId && !Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_0__["isSignedIn"])()) {
        mutation.addArgument('guestCartId', 'String!', guestCartId);
      }
    }
  }, {
    key: "_getOrderField",
    value: function _getOrderField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('order').addFieldList(['order_id']);
    }
  }, {
    key: "_getSaveAddressInformationFields",
    value: function _getSaveAddressInformationFields() {
      return [this._getPaymentMethodsField(), this._getTotalsField()];
    }
  }, {
    key: "_getEstimatedShippingFields",
    value: function _getEstimatedShippingFields() {
      return ['amount', 'available', 'base_amount', 'method_code', 'carrier_code', 'method_title', 'carrier_title', 'error_message', 'price_excl_tax', 'price_incl_tax'];
    }
  }, {
    key: "_getPaymentMethodsField",
    value: function _getPaymentMethodsField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('payment_methods').addFieldList(this._getPaymentMethodFields());
    }
  }, {
    key: "_getPaymentMethodFields",
    value: function _getPaymentMethodFields() {
      return ['code', 'title'];
    }
  }, {
    key: "_getTotalItemFields",
    value: function _getTotalItemFields() {
      return ['qty', 'name', 'price', 'item_id', 'options', 'tax_amount', 'tax_percent', 'price_incl_tax', 'discount_amount', 'discount_percent'];
    }
  }, {
    key: "_getTotalItemField",
    value: function _getTotalItemField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('items').addFieldList(this._getTotalItemFields());
    }
  }, {
    key: "_getTotalsFields",
    value: function _getTotalsFields() {
      return ['subtotal', 'tax_amount', 'base_grand_total', 'grand_total', 'discount_amount', 'shipping_amount', 'subtotal_incl_tax', 'shipping_incl_tax', 'quote_currency_code', 'shipping_tax_amount', 'subtotal_with_discount', 'shipping_discount_amount', this._getTotalItemField()];
    }
  }, {
    key: "_getTotalsField",
    value: function _getTotalsField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('totals').addFieldList(this._getTotalsFields());
    }
  }, {
    key: "_getCartField",
    value: function _getCartField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('cart').addFieldList(this._getCartFieldList());
    }
  }, {
    key: "_getCartFieldList",
    value: function _getCartFieldList() {
      return ['id'];
    }
  }]);

  return _CheckoutQuery;
}(Extensible());
Object.defineProperty(_CheckoutQuery, 'name', {
  value: 'CheckoutQuery'
});

var CheckoutQuery = middleware(_CheckoutQuery, "Query/Checkout");
/* harmony default export */ __webpack_exports__["default"] = (new CheckoutQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/query/Klarna.query.js":
/*!*****************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/query/Klarna.query.js ***!
  \*****************************************************************************/
/*! exports provided: _KlarnaQuery, KlarnaQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_KlarnaQuery", function() { return _KlarnaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlarnaQuery", function() { return KlarnaQuery; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Query */ "../../../../../vendor/scandipwa/source/src/app/util/Query/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

/** @namespace Query/Klarna */

var _KlarnaQuery =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_KlarnaQuery, _Extensible);

  function _KlarnaQuery() {
    _classCallCheck(this, _KlarnaQuery);

    return _possibleConstructorReturn(this, _getPrototypeOf(_KlarnaQuery).apply(this, arguments));
  }

  _createClass(_KlarnaQuery, [{
    key: "getCreateKlarnaTokenMutation",
    value: function getCreateKlarnaTokenMutation(input) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('createKlarnaToken').addArgument('input', 'KlarnaTokenInput!', input).setAlias('klarnaToken');
    }
  }]);

  return _KlarnaQuery;
}(Extensible());
Object.defineProperty(_KlarnaQuery, 'name', {
  value: 'KlarnaQuery'
});

var KlarnaQuery = middleware(_KlarnaQuery, "Query/Klarna");
/* harmony default export */ __webpack_exports__["default"] = (new KlarnaQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.component.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/Checkout/Checkout.component.js ***!
  \********************************************************************************************/
/*! exports provided: _Checkout, Checkout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Checkout", function() { return _Checkout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CartCoupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CartCoupon */ "../../../../../vendor/scandipwa/source/src/app/component/CartCoupon/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutBilling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutBilling */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutBilling/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutOrderSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutOrderSummary */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutOrderSummary/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutShipping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutShipping */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutShipping/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CheckoutSuccess */ "../../../../../vendor/scandipwa/source/src/app/component/CheckoutSuccess/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CmsBlock */ "../../../../../vendor/scandipwa/source/src/app/component/CmsBlock/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ContentWrapper */ "../../../../../vendor/scandipwa/source/src/app/component/ContentWrapper/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ExpandableContent */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContent/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Header/Header.config */ "../../../../../vendor/scandipwa/source/src/app/component/Header/Header.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Checkout */ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Url */ "../../../../../vendor/scandipwa/source/src/app/util/Url/index.js");
/* harmony import */ var _Checkout_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");
/* harmony import */ var _Checkout_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Checkout.style */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.style.scss");
/* harmony import */ var _Checkout_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Checkout_style__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



















/** @namespace Route/Checkout/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Checkout =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Checkout, _Extensible);

  function _Checkout() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, _Checkout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Checkout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "stepMap", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["SHIPPING_STEP"], {
      title: __('Shipping step'),
      url: '/shipping',
      render: _this.renderShippingStep.bind(_assertThisInitialized(_this)),
      areTotalsVisible: true,
      renderCartCoupon: _this.renderCartCoupon.bind(_assertThisInitialized(_this))
    }), _defineProperty(_defineProperty2, _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["BILLING_STEP"], {
      title: __('Billing step'),
      url: '/billing',
      render: _this.renderBillingStep.bind(_assertThisInitialized(_this)),
      areTotalsVisible: true,
      renderCartCoupon: _this.renderCartCoupon.bind(_assertThisInitialized(_this))
    }), _defineProperty(_defineProperty2, _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["DETAILS_STEP"], {
      title: __('Thank you for your purchase!'),
      url: '/success',
      render: _this.renderDetailsStep.bind(_assertThisInitialized(_this)),
      areTotalsVisible: false
    }), _defineProperty2));

    return _this;
  }

  _createClass(_Checkout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          checkoutStep = _this$props.checkoutStep,
          history = _this$props.history;
      var url = this.stepMap[checkoutStep].url;
      this.updateHeader();
      history.replace(Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_16__["appendWithStoreCode"])("".concat(_Checkout_config__WEBPACK_IMPORTED_MODULE_17__["CHECKOUT_URL"]).concat(url)));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var checkoutStep = this.props.checkoutStep;
      var prevCheckoutStep = prevProps.checkoutStep;

      if (checkoutStep !== prevCheckoutStep) {
        this.updateHeader();
        this.updateStep();
      }
    }
  }, {
    key: "updateHeader",
    value: function updateHeader() {
      var _this$props2 = this.props,
          setHeaderState = _this$props2.setHeaderState,
          checkoutStep = _this$props2.checkoutStep,
          goBack = _this$props2.goBack;
      var _this$stepMap$checkou = this.stepMap[checkoutStep].title,
          title = _this$stepMap$checkou === void 0 ? '' : _this$stepMap$checkou;
      setHeaderState({
        name: _app_design_frontend_Scandiweb_pwa_src_app_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_10__["CHECKOUT"],
        title: title,
        onBackClick: function onBackClick() {
          return goBack();
        }
      });
    }
  }, {
    key: "updateStep",
    value: function updateStep() {
      var _this$props3 = this.props,
          checkoutStep = _this$props3.checkoutStep,
          history = _this$props3.history;
      var url = this.stepMap[checkoutStep].url;
      history.push(Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_16__["appendWithStoreCode"])("".concat(_Checkout_config__WEBPACK_IMPORTED_MODULE_17__["CHECKOUT_URL"]).concat(url)));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var checkoutStep = this.props.checkoutStep;
      var _this$stepMap$checkou2 = this.stepMap[checkoutStep].title,
          title = _this$stepMap$checkou2 === void 0 ? '' : _this$stepMap$checkou2;
      return (
        /*#__PURE__*/
        _checkBEM(React, "h1", {
          block: "Checkout",
          elem: "Title"
        }, title)
      );
    }
  }, {
    key: "renderShippingStep",
    value: function renderShippingStep() {
      var _this$props4 = this.props,
          shippingMethods = _this$props4.shippingMethods,
          onShippingEstimationFieldsChange = _this$props4.onShippingEstimationFieldsChange,
          saveAddressInformation = _this$props4.saveAddressInformation,
          isDeliveryOptionsLoading = _this$props4.isDeliveryOptionsLoading,
          onPasswordChange = _this$props4.onPasswordChange,
          onCreateUserChange = _this$props4.onCreateUserChange,
          onEmailChange = _this$props4.onEmailChange,
          isCreateUser = _this$props4.isCreateUser;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutShipping__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isLoading: isDeliveryOptionsLoading,
          shippingMethods: shippingMethods,
          saveAddressInformation: saveAddressInformation,
          onShippingEstimationFieldsChange: onShippingEstimationFieldsChange,
          onPasswordChange: onPasswordChange,
          onCreateUserChange: onCreateUserChange,
          onEmailChange: onEmailChange,
          isCreateUser: isCreateUser
        })
      );
    }
  }, {
    key: "renderBillingStep",
    value: function renderBillingStep() {
      var _this$props5 = this.props,
          setLoading = _this$props5.setLoading,
          setDetailsStep = _this$props5.setDetailsStep,
          shippingAddress = _this$props5.shippingAddress,
          _this$props5$paymentM = _this$props5.paymentMethods,
          paymentMethods = _this$props5$paymentM === void 0 ? [] : _this$props5$paymentM,
          savePaymentInformation = _this$props5.savePaymentInformation;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutBilling__WEBPACK_IMPORTED_MODULE_3__["default"], {
          setLoading: setLoading,
          paymentMethods: paymentMethods,
          setDetailsStep: setDetailsStep,
          shippingAddress: shippingAddress,
          savePaymentInformation: savePaymentInformation
        })
      );
    }
  }, {
    key: "renderDetailsStep",
    value: function renderDetailsStep() {
      var orderID = this.props.orderID;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutSuccess__WEBPACK_IMPORTED_MODULE_6__["default"], {
          orderID: orderID
        })
      );
    }
  }, {
    key: "renderStep",
    value: function renderStep() {
      var checkoutStep = this.props.checkoutStep;
      var render = this.stepMap[checkoutStep].render;

      if (render) {
        return render();
      }

      return null;
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var isLoading = this.props.isLoading;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
          isLoading: isLoading
        })
      );
    }
  }, {
    key: "renderSummary",
    value: function renderSummary() {
      var _this$props6 = this.props,
          checkoutTotals = _this$props6.checkoutTotals,
          checkoutStep = _this$props6.checkoutStep,
          paymentTotals = _this$props6.paymentTotals;
      var areTotalsVisible = this.stepMap[checkoutStep].areTotalsVisible;

      if (!areTotalsVisible) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CheckoutOrderSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
          checkoutStep: checkoutStep,
          totals: checkoutTotals,
          paymentTotals: paymentTotals
        })
      );
    }
  }, {
    key: "renderCoupon",
    value: function renderCoupon() {
      var checkoutStep = this.props.checkoutStep;
      var renderCartCoupon = this.stepMap[checkoutStep].renderCartCoupon;

      if (renderCartCoupon) {
        return renderCartCoupon();
      }

      return null;
    }
  }, {
    key: "renderCartCoupon",
    value: function renderCartCoupon() {
      var coupon_code = this.props.totals.coupon_code;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          heading: __('Have a discount code?'),
          mix: {
            block: 'Checkout',
            elem: 'Discount'
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CartCoupon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          couponCode: coupon_code
        }))
      );
    }
  }, {
    key: "renderPromo",
    value: function renderPromo() {
      var checkoutStep = this.props.checkoutStep;
      var isBilling = checkoutStep === _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["BILLING_STEP"];
      var _window$contentConfig = window.contentConfiguration.checkout_content;
      _window$contentConfig = _window$contentConfig === void 0 ? {} : _window$contentConfig;
      var promo = _window$contentConfig[isBilling ? 'checkout_billing_cms' : 'checkout_shipping_cms'];

      if (!promo) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          identifier: promo
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "main", {
          block: "Checkout"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          wrapperMix: {
            block: 'Checkout',
            elem: 'Wrapper'
          },
          label: __('Checkout page')
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Checkout",
          elem: "Step"
        }, this.renderTitle(), this.renderStep(), this.renderLoader()),
        /*#__PURE__*/
        _checkBEM(React, "div", null, this.renderSummary(), this.renderPromo(), this.renderCoupon())))
      );
    }
  }]);

  return _Checkout;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_Checkout, 'name', {
  value: 'Checkout'
});

var Checkout = middleware(_Checkout, "Route/Checkout/Component");

_defineProperty(Checkout, "propTypes", {
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setDetailsStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_13__["shippingMethodsType"].isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _app_design_frontend_Scandiweb_pwa_src_app_type_Checkout__WEBPACK_IMPORTED_MODULE_13__["paymentMethodsType"].isRequired,
  saveAddressInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  savePaymentInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isDeliveryOptionsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  shippingAddress: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_12__["addressType"].isRequired,
  checkoutTotals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__["TotalsType"].isRequired,
  orderID: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  history: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_14__["HistoryType"].isRequired,
  onEmailChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentTotals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__["TotalsType"],
  checkoutStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([_Checkout_config__WEBPACK_IMPORTED_MODULE_17__["SHIPPING_STEP"], _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["BILLING_STEP"], _Checkout_config__WEBPACK_IMPORTED_MODULE_17__["DETAILS_STEP"]]).isRequired,
  isCreateUser: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onCreateUserChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onPasswordChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  goBack: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__["TotalsType"].isRequired
});

_defineProperty(Checkout, "defaultProps", {
  paymentTotals: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Checkout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.container.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/Checkout/Checkout.container.js ***!
  \********************************************************************************************/
/*! exports provided: CartDispatcher, MyAccountDispatcher, CheckoutDispatcher, mapStateToProps, mapDispatchToProps, _CheckoutContainer, CheckoutContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDispatcher", function() { return CheckoutDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CheckoutContainer", function() { return _CheckoutContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutContainer", function() { return CheckoutContainer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationTabs_NavigationTabs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NavigationTabs/NavigationTabs.config */ "../../../../../vendor/scandipwa/source/src/app/component/NavigationTabs/NavigationTabs.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/query/Checkout.query */ "../../../../../vendor/scandipwa/source/src/app/query/Checkout.query.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_query_MyAccount_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/query/MyAccount.query */ "../../../../../vendor/scandipwa/source/src/app/query/MyAccount.query.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Breadcrumbs_Breadcrumbs_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Breadcrumbs/Breadcrumbs.action */ "../../../../../vendor/scandipwa/source/src/app/store/Breadcrumbs/Breadcrumbs.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Cart/Cart.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/Cart/Cart.dispatcher.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Checkout_Checkout_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Checkout/Checkout.action */ "../../../../../vendor/scandipwa/source/src/app/store/Checkout/Checkout.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Meta_Meta_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Meta/Meta.action */ "../../../../../vendor/scandipwa/source/src/app/store/Meta/Meta.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Navigation/Navigation.action */ "../../../../../vendor/scandipwa/source/src/app/store/Navigation/Navigation.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Navigation/Navigation.reducer */ "../../../../../vendor/scandipwa/source/src/app/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Auth */ "../../../../../vendor/scandipwa/source/src/app/util/Auth/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/BrowserDatabase */ "../../../../../vendor/scandipwa/source/src/app/util/BrowserDatabase/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_History__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/History */ "../../../../../vendor/scandipwa/source/src/app/util/History/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request */ "../../../../../vendor/scandipwa/source/src/app/util/Request/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request/QueryDispatcher */ "../../../../../vendor/scandipwa/source/src/app/util/Request/QueryDispatcher.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Url */ "../../../../../vendor/scandipwa/source/src/app/util/Url/index.js");
/* harmony import */ var _Checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Checkout.component */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.component.js");
/* harmony import */ var _Checkout_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Checkout.config */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.config.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
























var CartDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Cart/Cart.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/Cart/Cart.dispatcher.js"));
var MyAccountDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/MyAccount/MyAccount.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/MyAccount/MyAccount.dispatcher.js"));
var CheckoutDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Checkout/Checkout.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/Checkout/Checkout.dispatcher.js"));
/** @namespace Route/Checkout/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    totals: state.CartReducer.cartTotals,
    customer: state.MyAccountReducer.customer,
    guest_checkout: state.ConfigReducer.guest_checkout,
    countries: state.ConfigReducer.countries,
    isEmailAvailable: state.CheckoutReducer.isEmailAvailable
  };
}, "Route/Checkout/Container/mapStateToProps");
/** @namespace Route/Checkout/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    updateMeta: function updateMeta(meta) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Meta_Meta_action__WEBPACK_IMPORTED_MODULE_10__["updateMeta"])(meta));
    },
    resetCart: function resetCart() {
      return CartDispatcher.then(function (_ref) {
        var dispatcher = _ref.default;
        return dispatcher.updateInitialCartData(dispatch);
      });
    },
    toggleBreadcrumbs: function toggleBreadcrumbs(state) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Breadcrumbs_Breadcrumbs_action__WEBPACK_IMPORTED_MODULE_7__["toggleBreadcrumbs"])(state));
    },
    showErrorNotification: function showErrorNotification(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_13__["showNotification"])('error', message));
    },
    showInfoNotification: function showInfoNotification(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_13__["showNotification"])('info', message));
    },
    showSuccessNotification: function showSuccessNotification(message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_13__["showNotification"])('success', message));
    },
    setHeaderState: function setHeaderState(stateName) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_11__["changeNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_12__["TOP_NAVIGATION_TYPE"], stateName));
    },
    setNavigationState: function setNavigationState(stateName) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_11__["changeNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_12__["BOTTOM_NAVIGATION_TYPE"], stateName));
    },
    createAccount: function createAccount(options) {
      return MyAccountDispatcher.then(function (_ref2) {
        var dispatcher = _ref2.default;
        return dispatcher.createAccount(options, dispatch);
      });
    },
    updateShippingFields: function updateShippingFields(fields) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Checkout_Checkout_action__WEBPACK_IMPORTED_MODULE_9__["updateShippingFields"])(fields));
    },
    updateEmail: function updateEmail(email) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Checkout_Checkout_action__WEBPACK_IMPORTED_MODULE_9__["updateEmail"])(email));
    },
    checkEmailAvailability: function checkEmailAvailability(email) {
      return CheckoutDispatcher.then(function (_ref3) {
        var dispatcher = _ref3.default;
        return dispatcher.handleData(dispatch, email);
      });
    }
  };
}, "Route/Checkout/Container/mapDispatchToProps");
/** @namespace Route/Checkout/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CheckoutContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CheckoutContainer, _Extensible);

  function _CheckoutContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CheckoutContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CheckoutContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      setLoading: _this.setLoading.bind(_assertThisInitialized(_this)),
      setDetailsStep: _this.setDetailsStep.bind(_assertThisInitialized(_this)),
      savePaymentInformation: _this.savePaymentInformation.bind(_assertThisInitialized(_this)),
      saveAddressInformation: _this.saveAddressInformation.bind(_assertThisInitialized(_this)),
      onShippingEstimationFieldsChange: _this.onShippingEstimationFieldsChange.bind(_assertThisInitialized(_this)),
      onEmailChange: _this.onEmailChange.bind(_assertThisInitialized(_this)),
      onCreateUserChange: _this.onCreateUserChange.bind(_assertThisInitialized(_this)),
      onPasswordChange: _this.onPasswordChange.bind(_assertThisInitialized(_this)),
      goBack: _this.goBack.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "checkEmailAvailability", Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["debounce"])(function (email) {
      var checkEmailAvailability = _this.props.checkEmailAvailability;
      checkEmailAvailability(email);
    }, _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["UPDATE_EMAIL_CHECK_FREQUENCY"]));

    _defineProperty(_assertThisInitialized(_this), "setShippingAddress",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var shippingAddress, region, region_id, address, mutation;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              shippingAddress = _this.state.shippingAddress;
              region = shippingAddress.region, region_id = shippingAddress.region_id, address = _objectWithoutProperties(shippingAddress, ["region", "region_id"]);
              mutation = _app_design_frontend_Scandiweb_pwa_src_app_query_MyAccount_query__WEBPACK_IMPORTED_MODULE_6__["default"].getCreateAddressMutation(_objectSpread2(_objectSpread2({}, address), {}, {
                region: {
                  region: region,
                  region_id: region_id
                }
              }));
              _context.next = 5;
              return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(mutation);

            case 5:
              return _context.abrupt("return", true);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      var paymentTotals = _this.state.paymentTotals;
      return {
        checkoutTotals: _this._getCheckoutTotals(),
        paymentTotals: paymentTotals
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_handleError", function (error) {
      var showErrorNotification = _this.props.showErrorNotification;

      var _error = _slicedToArray(error, 1),
          _error$ = _error[0],
          message = _error$.message,
          debugMessage = _error$.debugMessage;

      _this.setState({
        isDeliveryOptionsLoading: false,
        isLoading: false
      }, function () {
        showErrorNotification(debugMessage || message);
      });

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "_getGuestCartId", function () {
      return _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].getItem(_app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_8__["GUEST_QUOTE_ID"]);
    });

    return _this;
  }

  _createClass(_CheckoutContainer, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_CheckoutContainer.prototype), "__construct", this).call(this, props);

      var toggleBreadcrumbs = props.toggleBreadcrumbs,
          is_virtual = props.totals.is_virtual;
      toggleBreadcrumbs(false);
      this.state = {
        isLoading: is_virtual,
        isDeliveryOptionsLoading: false,
        requestsSent: 0,
        paymentMethods: [],
        shippingMethods: [],
        shippingAddress: {},
        checkoutStep: is_virtual ? _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["BILLING_STEP"] : _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["SHIPPING_STEP"],
        orderID: '',
        paymentTotals: _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].getItem(_Checkout_config__WEBPACK_IMPORTED_MODULE_24__["PAYMENT_TOTALS"]) || {},
        email: '',
        isCreateUser: false
      };

      if (is_virtual) {
        this._getPaymentMethods();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          history = _this$props.history,
          showInfoNotification = _this$props.showInfoNotification,
          guest_checkout = _this$props.guest_checkout,
          updateMeta = _this$props.updateMeta,
          _this$props$totals$it = _this$props.totals.items,
          items = _this$props$totals$it === void 0 ? [] : _this$props$totals$it;

      if (!items.length) {
        showInfoNotification(__('Please add at least one product to cart!'));
        history.push(Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_22__["appendWithStoreCode"])('/cart'));
      } // if guest checkout is disabled and user is not logged in => throw him to homepage


      if (!guest_checkout && !Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])()) {
        history.push(Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_22__["appendWithStoreCode"])('/'));
      }

      updateMeta({
        title: __('Checkout')
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          urlStep = _this$props2.match.params.step,
          isEmailAvailable = _this$props2.isEmailAvailable,
          updateEmail = _this$props2.updateEmail;
      var prevUrlStep = prevProps.match.params.step;
      var email = this.state.email;
      var prevEmail = prevState.email; // Handle going back from billing to shipping

      if (/shipping/.test(urlStep) && /billing/.test(prevUrlStep)) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          checkoutStep: _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["SHIPPING_STEP"]
        });
      }

      if (email !== prevEmail && isEmailAvailable) {
        this.checkEmailAvailability(email);
      } // console.log(isEmailAvailable, email)


      if (!isEmailAvailable) {
        updateEmail(email);
      }

      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var toggleBreadcrumbs = this.props.toggleBreadcrumbs;
      toggleBreadcrumbs(true);
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(email) {
      this.setState({
        email: email
      });
    }
  }, {
    key: "onCreateUserChange",
    value: function onCreateUserChange() {
      var isCreateUser = this.state.isCreateUser;
      this.setState({
        isCreateUser: !isCreateUser
      });
    }
  }, {
    key: "onPasswordChange",
    value: function onPasswordChange(password) {
      this.setState({
        password: password
      });
    }
  }, {
    key: "onShippingEstimationFieldsChange",
    value: function onShippingEstimationFieldsChange(address) {
      var _this2 = this;

      var requestsSent = this.state.requestsSent;
      this.setState({
        isDeliveryOptionsLoading: true,
        requestsSent: requestsSent + 1
      });
      Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getEstimateShippingCosts(address, this._getGuestCartId())).then(
      /** @namespace Route/Checkout/Container/onShippingEstimationFieldsChangeFetchMutationThen */
      middleware(function (_ref5) {
        var shippingMethods = _ref5.estimateShippingCosts;
        var requestsSent = _this2.state.requestsSent;

        _this2.setState({
          shippingMethods: shippingMethods,
          isDeliveryOptionsLoading: requestsSent > 1,
          requestsSent: requestsSent - 1
        });
      }, "Route/Checkout/Container/onShippingEstimationFieldsChangeFetchMutationThen"), this._handleError);
    }
  }, {
    key: "goBack",
    value: function goBack() {
      var checkoutStep = this.state.checkoutStep;

      if (checkoutStep === _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["BILLING_STEP"]) {
        this.setState({
          isLoading: false,
          checkoutStep: _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["SHIPPING_STEP"]
        });
        _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].deleteItem(_Checkout_config__WEBPACK_IMPORTED_MODULE_24__["PAYMENT_TOTALS"]);
      }

      _app_design_frontend_Scandiweb_pwa_src_app_util_History__WEBPACK_IMPORTED_MODULE_19__["default"].goBack();
    }
  }, {
    key: "setDetailsStep",
    value: function setDetailsStep(orderID) {
      var _this$props3 = this.props,
          resetCart = _this$props3.resetCart,
          setNavigationState = _this$props3.setNavigationState; // For some reason not logged in user cart preserves qty in it

      if (!Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])()) {
        _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].deleteItem(_app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_8__["GUEST_QUOTE_ID"]);
      }

      _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].deleteItem(_Checkout_config__WEBPACK_IMPORTED_MODULE_24__["PAYMENT_TOTALS"]);
      resetCart();
      this.setState({
        isLoading: false,
        paymentTotals: {},
        checkoutStep: _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["DETAILS_STEP"],
        orderID: orderID
      });
      setNavigationState({
        name: _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationTabs_NavigationTabs_config__WEBPACK_IMPORTED_MODULE_4__["CART_TAB"]
      });
    }
  }, {
    key: "setLoading",
    value: function setLoading() {
      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState({
        isLoading: isLoading
      });
    }
  }, {
    key: "_getPaymentMethods",
    value: function _getPaymentMethods() {
      var _this3 = this;

      Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchQuery"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getPaymentMethodsQuery(this._getGuestCartId())).then(
      /** @namespace Route/Checkout/Container/fetchQueryThen */
      middleware(function (_ref6) {
        var paymentMethods = _ref6.getPaymentMethods;

        _this3.setState({
          isLoading: false,
          paymentMethods: paymentMethods
        });
      }, "Route/Checkout/Container/fetchQueryThen"), this._handleError);
    }
  }, {
    key: "_getCheckoutTotals",
    value: function _getCheckoutTotals() {
      var cartTotals = this.props.totals;
      var shipping_amount = this.state.paymentTotals.shipping_amount;
      return shipping_amount ? _objectSpread2(_objectSpread2({}, cartTotals), {}, {
        shipping_amount: shipping_amount
      }) : cartTotals;
    }
  }, {
    key: "saveGuestEmail",
    value: function saveGuestEmail() {
      var email = this.state.email;
      var updateEmail = this.props.updateEmail;
      var guestCartId = _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].getItem(_app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_8__["GUEST_QUOTE_ID"]);
      var mutation = _app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getSaveGuestEmailMutation(email, guestCartId);
      updateEmail(email);
      return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(mutation).then(
      /** @namespace Route/Checkout/Container/saveGuestEmailFetchMutationThen */
      middleware(function (_ref7) {
        var data = _ref7.setGuestEmailOnCart;
        return data;
      }, "Route/Checkout/Container/saveGuestEmailFetchMutationThen"), this._handleError);
    }
  }, {
    key: "createUserOrSaveGuest",
    value: function () {
      var _createUserOrSaveGuest = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this$props4, createAccount, is_virtual, showSuccessNotification, _this$state, email, password, isCreateUser, _this$state$shippingA, firstname, lastname, options, creation;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props4 = this.props, createAccount = _this$props4.createAccount, is_virtual = _this$props4.totals.is_virtual, showSuccessNotification = _this$props4.showSuccessNotification;
                _this$state = this.state, email = _this$state.email, password = _this$state.password, isCreateUser = _this$state.isCreateUser, _this$state$shippingA = _this$state.shippingAddress, firstname = _this$state$shippingA.firstname, lastname = _this$state$shippingA.lastname;

                if (isCreateUser) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", this.saveGuestEmail());

              case 4:
                options = {
                  customer: {
                    email: email,
                    firstname: firstname,
                    lastname: lastname
                  },
                  password: password
                };
                _context2.next = 7;
                return createAccount(options);

              case 7:
                creation = _context2.sent;

                if (creation) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", creation);

              case 10:
                showSuccessNotification(__('Your account has been created successfully!'));

                if (is_virtual) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", this.setShippingAddress());

              case 13:
                return _context2.abrupt("return", true);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createUserOrSaveGuest() {
        return _createUserOrSaveGuest.apply(this, arguments);
      }

      return createUserOrSaveGuest;
    }()
  }, {
    key: "saveAddressInformation",
    value: function () {
      var _saveAddressInformation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(addressInformation) {
        var _this4 = this;

        var shipping_address;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                shipping_address = addressInformation.shipping_address;
                this.setState({
                  isLoading: true,
                  shippingAddress: shipping_address
                });

                if (Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])()) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 5;
                return this.createUserOrSaveGuest();

              case 5:
                if (_context3.sent) {
                  _context3.next = 8;
                  break;
                }

                this.setState({
                  isLoading: false
                });
                return _context3.abrupt("return");

              case 8:
                Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getSaveAddressInformation(addressInformation, this._getGuestCartId())).then(
                /** @namespace Route/Checkout/Container/saveAddressInformationFetchMutationThen */
                middleware(function (_ref8) {
                  var data = _ref8.saveAddressInformation;
                  var payment_methods = data.payment_methods,
                      totals = data.totals;
                  _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_18__["default"].setItem(totals, _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["PAYMENT_TOTALS"], _app_design_frontend_Scandiweb_pwa_src_app_util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_21__["ONE_MONTH_IN_SECONDS"]);

                  _this4.setState({
                    isLoading: false,
                    paymentMethods: payment_methods,
                    checkoutStep: _Checkout_config__WEBPACK_IMPORTED_MODULE_24__["BILLING_STEP"],
                    paymentTotals: totals
                  });
                }, "Route/Checkout/Container/saveAddressInformationFetchMutationThen"), this._handleError);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveAddressInformation(_x) {
        return _saveAddressInformation.apply(this, arguments);
      }

      return saveAddressInformation;
    }()
  }, {
    key: "savePaymentInformation",
    value: function () {
      var _savePaymentInformation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(paymentInformation) {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  isLoading: true
                });

                if (Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])()) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return this.createUserOrSaveGuest();

              case 4:
                if (_context4.sent) {
                  _context4.next = 7;
                  break;
                }

                this.setState({
                  isLoading: false
                });
                return _context4.abrupt("return");

              case 7:
                _context4.next = 9;
                return this.saveBillingAddress(paymentInformation).then(
                /** @namespace Route/Checkout/Container/saveBillingAddressThen */
                middleware(function () {
                  return _this5.savePaymentMethodAndPlaceOrder(paymentInformation);
                }, "Route/Checkout/Container/saveBillingAddressThen"), this._handleError);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function savePaymentInformation(_x2) {
        return _savePaymentInformation.apply(this, arguments);
      }

      return savePaymentInformation;
    }()
  }, {
    key: "trimAddressMagentoStyle",
    value: function trimAddressMagentoStyle(address) {
      var countries = this.props.countries;

      var country_id = address.country_id,
          region_code = address.region_code,
          region_id = address.region_id,
          region = address.region,
          restOfBillingAddress = _objectWithoutProperties(address, ["country_id", "region_code", "region_id", "region"]);

      var newAddress = _objectSpread2(_objectSpread2({}, restOfBillingAddress), {}, {
        country_code: country_id,
        region: region
      });
      /**
       * If there is no region specified, but there is region ID
       * get the region code by the country ID
       */


      if (region_id) {
        // find a country by country ID
        var _ref9 = countries.find(function (_ref10) {
          var id = _ref10.id;
          return id === country_id;
        }) || {},
            available_regions = _ref9.available_regions;

        if (!available_regions) {
          return newAddress;
        } // find region by region ID


        var _ref11 = available_regions.find(function (_ref12) {
          var id = _ref12.id;
          return +id === +region_id;
        }) || {},
            code = _ref11.code;

        if (!code) {
          return newAddress;
        }

        newAddress.region = code;
      }

      return newAddress;
    }
  }, {
    key: "saveBillingAddress",
    value: function () {
      var _saveBillingAddress = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(paymentInformation) {
        var guest_cart_id, billing_address;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                guest_cart_id = !Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])() ? this._getGuestCartId() : '';
                billing_address = paymentInformation.billing_address;
                _context5.next = 4;
                return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getSetBillingAddressOnCart({
                  guest_cart_id: guest_cart_id,
                  billing_address: {
                    address: this.trimAddressMagentoStyle(billing_address)
                  }
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveBillingAddress(_x3) {
        return _saveBillingAddress.apply(this, arguments);
      }

      return saveBillingAddress;
    }()
  }, {
    key: "savePaymentMethodAndPlaceOrder",
    value: function () {
      var _savePaymentMethodAndPlaceOrder = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(paymentInformation) {
        var _paymentInformation$p, code, additional_data, guest_cart_id, orderData, order_id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _paymentInformation$p = paymentInformation.paymentMethod, code = _paymentInformation$p.code, additional_data = _paymentInformation$p.additional_data;
                guest_cart_id = !Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_17__["isSignedIn"])() ? this._getGuestCartId() : '';
                _context6.prev = 2;
                _context6.next = 5;
                return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getSetPaymentMethodOnCartMutation({
                  guest_cart_id: guest_cart_id,
                  payment_method: _defineProperty({
                    code: code
                  }, code, additional_data)
                }));

              case 5:
                _context6.next = 7;
                return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_20__["fetchMutation"])(_app_design_frontend_Scandiweb_pwa_src_app_query_Checkout_query__WEBPACK_IMPORTED_MODULE_5__["default"].getPlaceOrderMutation(guest_cart_id));

              case 7:
                orderData = _context6.sent;
                order_id = orderData.placeOrder.order.order_id;
                this.setDetailsStep(order_id);
                _context6.next = 15;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](2);

                this._handleError(_context6.t0);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 12]]);
      }));

      function savePaymentMethodAndPlaceOrder(_x4) {
        return _savePaymentMethodAndPlaceOrder.apply(this, arguments);
      }

      return savePaymentMethodAndPlaceOrder;
    }()
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _Checkout_component__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, this.props, this.state, this.containerFunctions, this.containerProps()))
      );
    }
  }]);

  return _CheckoutContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
Object.defineProperty(_CheckoutContainer, 'name', {
  value: 'CheckoutContainer'
});

var CheckoutContainer = middleware(_CheckoutContainer, "Route/Checkout/Container");

_defineProperty(CheckoutContainer, "propTypes", {
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showInfoNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showSuccessNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleBreadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  createAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateMeta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  resetCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  guest_checkout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  totals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_16__["TotalsType"].isRequired,
  history: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_15__["HistoryType"].isRequired,
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_14__["customerType"].isRequired,
  countries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    available_regions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
    }))
  })).isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }).isRequired,
  updateShippingFields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkEmailAvailability: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isEmailAvailable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.style.scss":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/Checkout/Checkout.style.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1605714677628
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/index.js":
/*!*******************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/Checkout/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.container */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/Checkout.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Checkout_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/type/Checkout.js":
/*!************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/type/Checkout.js ***!
  \************************************************************************/
/*! exports provided: paymentMethodType, paymentMethodsType, shippingMethodType, shippingMethodsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentMethodType", function() { return paymentMethodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentMethodsType", function() { return paymentMethodsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shippingMethodType", function() { return shippingMethodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shippingMethodsType", function() { return shippingMethodsType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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

var paymentMethodType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var paymentMethodsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(paymentMethodType);
var shippingMethodType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  amount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  available: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  base_amount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  carrier_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  carrier_title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  error_message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  method_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  method_title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  price_excl_tax: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  price_incl_tax: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var shippingMethodsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(shippingMethodType);

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Braintree/Braintree.js":
/*!***********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Braintree/Braintree.js ***!
  \***********************************************************************************/
/*! exports provided: _Braintree, Braintree, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Braintree", function() { return _Braintree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Braintree", function() { return Braintree; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Query */ "../../../../../vendor/scandipwa/source/src/app/util/Query/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request */ "../../../../../vendor/scandipwa/source/src/app/util/Request/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/** @namespace Util/Braintree */

var _Braintree =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Braintree, _Extensible);

  function _Braintree() {
    var _this;

    _classCallCheck(this, _Braintree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_Braintree).call(this));

    _defineProperty(_assertThisInitialized(_this), "isLoading", false);

    _defineProperty(_assertThisInitialized(_this), "requestPaymentNonce", function () {
      return _this.braintreeDropIn.requestPaymentMethod();
    });

    return _this;
  }

  _createClass(_Braintree, [{
    key: "__construct",
    value: function __construct(containerId) {
      _get(_getPrototypeOf(_Braintree.prototype), "__construct", this).call(this);

      this.containerId = containerId;
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, dropIn, authorization;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! braintree-web-drop-in */ "./node_modules/braintree-web-drop-in/dist/browser/dropin.js", 7));

              case 2:
                _ref = _context.sent;
                dropIn = _ref.default;
                _context.next = 6;
                return this.requestBraintreeClientToken();

              case 6:
                authorization = _context.sent;
                _context.next = 9;
                return dropIn.create({
                  authorization: authorization,
                  container: "#".concat(this.containerId)
                });

              case 9:
                this.braintreeDropIn = _context.sent;
                return _context.abrupt("return", true);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "requestBraintreeClientToken",
    value: function requestBraintreeClientToken() {
      var mutation = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_1__["Field"]('createBraintreeClientToken').setAlias('token');
      return Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_2__["fetchMutation"])(mutation).then(
      /** @namespace Util/Braintree/fetchMutationThen */
      middleware(function (_ref2) {
        var token = _ref2.token;
        return token;
      }, "Util/Braintree/fetchMutationThen"));
    }
  }]);

  return _Braintree;
}(Extensible());
Object.defineProperty(_Braintree, 'name', {
  value: 'Braintree'
});

var Braintree = middleware(_Braintree, "Util/Braintree");
/* harmony default export */ __webpack_exports__["default"] = (Braintree);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Braintree/index.js":
/*!*******************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Braintree/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Braintree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Braintree */ "../../../../../vendor/scandipwa/source/src/app/util/Braintree/Braintree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Braintree__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Price/Price.config.js":
/*!**********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Price/Price.config.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: 'Bds$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: 'B$',
  BOB: '$b',
  BRL: 'R$',
  BSD: 'B$',
  BTC: '฿',
  BTN: 'Nu.',
  BWP: 'P',
  BYR: 'Br',
  BYN: 'Br',
  BZD: 'BZ$',
  CAD: 'CA$',
  CDF: 'FC',
  CHF: 'CHF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUC: 'CUC$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: 'FJ$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: 'G$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: 'лв',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: 'L$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: 'Mex$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: 'Si$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: '$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '₡',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: 'лв',
  VEF: 'Bs',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZWD: 'Z$'
});

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Price/Price.js":
/*!***************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Price/Price.js ***!
  \***************************************************************************/
/*! exports provided: formatCurrency, formatPrice, calculateFinalPrice, roundPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFinalPrice", function() { return calculateFinalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundPrice", function() { return roundPrice; });
/* harmony import */ var _Price_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Price.config */ "../../../../../vendor/scandipwa/source/src/app/util/Price/Price.config.js");
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

/* eslint-disable import/prefer-default-export */

/** @namespace Util/Price/formatCurrency */

var formatCurrency = middleware(function () {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  return _Price_config__WEBPACK_IMPORTED_MODULE_0__["default"][currency];
}, "Util/Price/formatCurrency");
/** @namespace Util/Price/formatPrice */

var formatPrice = middleware(function (price) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
  var language = navigator.languages ? navigator.languages[0] : navigator.language;
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency
  }).format(price);
}, "Util/Price/formatPrice");
/**
 * Calculate final price
 * @param {Number} discount discount percentage
 * @param {Number} min minimum price
 * @param {Number} reg regular price
 * @return {Number} final price
 * @namespace Util/Price/calculateFinalPrice
 */

var calculateFinalPrice = middleware(function (discount, min, reg) {
  return discount ? min : reg;
}, "Util/Price/calculateFinalPrice\n");
/**
 * Calculate final price
 * @param {Number} price
 * @return {Number} price rounded to 2 digits
 * @namespace Util/Price/roundPrice
 */

var roundPrice = middleware(function (price) {
  return parseFloat(price).toFixed(2);
}, "Util/Price/roundPrice\n");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Price/index.js":
/*!***************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Price/index.js ***!
  \***************************************************************************/
/*! exports provided: formatCurrency, formatPrice, calculateFinalPrice, roundPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Price */ "../../../../../vendor/scandipwa/source/src/app/util/Price/Price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["formatPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateFinalPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["calculateFinalPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["roundPrice"]; });

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
//# sourceMappingURL=checkout.js.map