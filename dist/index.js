/*! SmellyToggle.js v0.1.0 :: by Brandon Pierce (brandon@brandonjpierce.com) MIT */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Toggle"] = factory(require("React"));
	else
		root["Smelly"] = root["Smelly"] || {}, root["Smelly"]["Toggle"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireDefault(_React);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(3);

	var PropTypes = _React2['default'].PropTypes;
	var Component = _React2['default'].Component;

	var SmellyToggle = (function (_Component) {

	  /**
	   * Constructor method for our class
	   *
	   * @param {Object} props Passed in component props
	   */

	  function SmellyToggle(props) {
	    _classCallCheck(this, SmellyToggle);

	    _get(Object.getPrototypeOf(SmellyToggle.prototype), 'constructor', this).call(this, props);

	    // setup state
	    this.state = {
	      checked: props.toggled,
	      focused: false
	    };
	  }

	  _inherits(SmellyToggle, _Component);

	  _createClass(SmellyToggle, [{
	    key: '_handleClick',

	    /**
	     * Fires when a user clicks on the toggle control
	     *
	     * @api private
	     */
	    value: function _handleClick() {
	      console.log('unbinded context');
	      console.log(this);
	      var checkbox = this.refs.toggle.getDOMNode();

	      this.setState({ checked: !this.state.checked }, function () {
	        checkbox.checked = this.state.checked;
	        checkbox.click();
	        checkbox.focus();
	      });
	    }
	  }, {
	    key: '_handleFocus',

	    /**
	     * Fires when the hidden checkbox gains focus
	     *
	     * @api private
	     */
	    value: function _handleFocus() {
	      console.log('binded context');
	      console.log(this);
	      this.setState({ focused: true });
	    }
	  }, {
	    key: '_handleBlur',

	    /**
	     * Fires when the hidden checkbox is blurred
	     *
	     * @api private
	     */
	    value: function _handleBlur() {
	      this.setState({ focused: false });
	    }
	  }, {
	    key: '_handleChange',

	    /**
	     * Fires when the hidden checkbox is clicked programically in
	     * the _handleClick method
	     *
	     * @api private
	     */
	    value: function _handleChange() {
	      // if we have a value in our props and a checked state
	      // send that along in the callback
	      if (this.props.value && this.state.checked) {
	        return this.props.onToggle(this.state.checked, this.props.value);
	      }

	      this.props.onToggle(this.state.checked);
	    }
	  }, {
	    key: '_renderLeftLabel',

	    /**
	     * Render the left label
	     *
	     * @api private
	     */
	    value: function _renderLeftLabel() {
	      return _React2['default'].createElement(
	        'span',
	        { className: 'smelly-toggle-label left' },
	        this.props.labelLeftText
	      );
	    }
	  }, {
	    key: '_renderRightLabel',

	    /**
	     * Render the right label
	     *
	     * @api private
	     */
	    value: function _renderRightLabel() {
	      return _React2['default'].createElement(
	        'span',
	        { className: 'smelly-toggle-label right' },
	        this.props.labelRightText
	      );
	    }
	  }, {
	    key: '_renderSwitch',

	    /**
	     * Render our actual switch control
	     *
	     * @api private
	     */
	    value: function _renderSwitch() {
	      var attributes = { className: 'smelly-toggle-controls' };

	      if (!this.props.disabled) {
	        attributes.onClick = this._handleClick.bind(this);
	      }

	      return _React2['default'].createElement(
	        'div',
	        attributes,
	        _React2['default'].createElement('div', { className: 'smelly-toggle-track' }),
	        _React2['default'].createElement('div', { className: 'smelly-toggle-thumb' })
	      );
	    }
	  }, {
	    key: '_renderToggle',

	    /**
	     * Render toggle switch and labels
	     *
	     * @api private
	     */
	    value: function _renderToggle() {
	      var classes = _classnames2['default']('smelly-toggle', {
	        focused: this.state.focused,
	        disabled: this.props.disabled,
	        checked: this.state.checked
	      });

	      if (this.props.showLabels) {
	        return _React2['default'].createElement(
	          'div',
	          { className: classes },
	          this._renderLeftLabel(),
	          this._renderSwitch(),
	          this._renderRightLabel()
	        );
	      }

	      return _React2['default'].createElement(
	        'div',
	        { className: classes },
	        this._renderSwitch()
	      );
	    }
	  }, {
	    key: 'render',

	    /**
	     * Reacts render method
	     */
	    value: function render() {
	      var inputProps = {
	        ref: 'toggle',
	        type: 'checkbox',
	        className: 'smelly-toggle-input',
	        role: 'checkbox',
	        id: this.props.id,
	        name: this.props.name,
	        value: this.props.value,
	        disabled: this.props.disabled,
	        checked: this.state.checked,
	        onChange: this._handleChange.bind(this),
	        onFocus: this._handleFocus.bind(this),
	        onBlur: this._handleBlur.bind(this)
	      };

	      return _React2['default'].createElement(
	        'fieldset',
	        { className: 'smelly-toggle-container', tabindex: '0' },
	        _React2['default'].createElement('input', _extends({}, inputProps, { 'aria-checked': this.state.checked })),
	        this._renderToggle()
	      );
	    }
	  }]);

	  return SmellyToggle;
	})(Component);

	/**
	 * Default component property types
	 */
	SmellyToggle.propTypes = {
	  toggled: PropTypes.bool,
	  onToggle: PropTypes.func,
	  value: PropTypes.bool,
	  name: PropTypes.string,
	  id: PropTypes.string,
	  disabled: PropTypes.bool,
	  showLabels: PropTypes.bool,
	  labelLeftText: PropTypes.string,
	  labelRightText: PropTypes.string
	};

	/**
	 * Default component properties
	 */
	SmellyToggle.defaultProps = {
	  disabled: false,
	  toggled: false,
	  showLabels: true,
	  labelLeftText: 'Off',
	  labelRightText: 'On'
	};

	exports['default'] = SmellyToggle;
	module.exports = exports['default'];

	/**
	 * React tools display name
	 */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;