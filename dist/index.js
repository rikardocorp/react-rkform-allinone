'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactstrap = require('reactstrap');
var PropTypes = _interopDefault(require('prop-types'));
var makeAnimated = _interopDefault(require('react-select/lib/animated'));
var Select = _interopDefault(require('react-select'));
var CreatableSelect = _interopDefault(require('react-select/lib/Creatable'));
var Datetime = _interopDefault(require('react-datetime'));
var moment = _interopDefault(require('moment'));
require('moment/locale/es');
var Switch = _interopDefault(require('react-bootstrap-switch'));
var reactRadioGroup = require('react-radio-group');

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _errorGenerator;

var alpha = 'alpha';
var alphaNum = 'alphaNum';
var between = 'between';
var decimal = 'decimal';
var email = 'email';
var integer = 'integer';
var ipAddress = 'ipAddress';
var macAddress = 'macAddress';
var maxLength = 'maxLength';
var maxValue = 'maxValue';
var minLength = 'minLength';
var minValue = 'minValue';
var numeric = 'numeric';
var required = 'required';
var sameAs = 'sameAs';
var url = 'url';

var checkValidity = function checkValidity(value, rules) {
  // console.log('checkValidity', value, rules )
  var keys = Object.keys(rules);
  var rule = '';
  var isValid = true;
  var msgError = '';
  var params = null;
  for (var i = 0; i < keys.length; i++) {
    rule = keys[i];
    isValid = rules[rule].isValid(value);
    params = rules[rule].params;
    // console.log('VALIDITY')
    // console.log('---', value, isValid, params)
    if (!isValid) break;
  }

  if (!isValid) {
    msgError = errorGenerator[rule] ? errorGenerator[rule](params) : '';
  }

  return { isValid: isValid, msgError: msgError };
};

var PreMsg = 'Este campo ';

var errorGenerator = (_errorGenerator = {}, defineProperty(_errorGenerator, required, function () {
  return PreMsg + 'es obligatorio.';
}), defineProperty(_errorGenerator, email, function () {
  return PreMsg + 'debe contener un email válido.';
}), defineProperty(_errorGenerator, url, function () {
  return PreMsg + 'debe contener un URL válido.';
}), defineProperty(_errorGenerator, integer, function () {
  return PreMsg + 'debe contener un valor entero.';
}), defineProperty(_errorGenerator, numeric, function () {
  return PreMsg + 'debe contener un numero válido.';
}), defineProperty(_errorGenerator, between, function (payload) {
  return PreMsg + 'debe estar en el rango de ' + payload.min + ' a ' + payload.max;
}), defineProperty(_errorGenerator, decimal, function () {
  return PreMsg + 'debe contener un numero decimal.';
}), defineProperty(_errorGenerator, maxValue, function (payload) {
  return PreMsg + 'debe contener un valor hasta ' + payload.max;
}), defineProperty(_errorGenerator, minValue, function (payload) {
  return PreMsg + 'debe contener un numero no menor a ' + payload.min;
}), defineProperty(_errorGenerator, maxLength, function (payload) {
  return PreMsg + 'solo puede contener hasta ' + payload.max + ' caracteres.';
}), defineProperty(_errorGenerator, minLength, function (payload) {
  return PreMsg + 'debe contener como mínimo ' + payload.min + ' caracteres.';
}), defineProperty(_errorGenerator, sameAs, function (payload) {
  return PreMsg + 'debe idéntico al campo [' + payload.field + ']';
}), defineProperty(_errorGenerator, ipAddress, function () {
  return PreMsg + 'debe contener una dirección IP válido.';
}), defineProperty(_errorGenerator, macAddress, function () {
  return PreMsg + 'debe contener una dirección MAC válido.';
}), defineProperty(_errorGenerator, alpha, function () {
  return PreMsg + 'debe contener solo letras del alfabeto.';
}), defineProperty(_errorGenerator, alphaNum, function () {
  return PreMsg + 'debe contener solo letras y/o números.';
}), _errorGenerator);

var RkValidate = function RkValidate(props) {
  var feedBack = null;
  if (!props.tooltip || props.show) {
    feedBack = React__default.createElement(
      reactstrap.FormFeedback,
      { valid: false, tooltip: props.tooltip },
      props.message
    );
  }

  return React__default.createElement(
    React__default.Fragment,
    null,
    props.children,
    feedBack
  );
};

RkValidate.propTypes = {
  children: PropTypes.element,
  tooltip: PropTypes.bool,
  show: PropTypes.bool,
  message: PropTypes.string
};

var RkInput = function (_Component) {
  inherits(RkInput, _Component);

  function RkInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkInput.__proto__ || Object.getPrototypeOf(RkInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltip: false,
      value: '',
      defaultValue: '',
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      updateProps: false,
      _localProps: {}
    }, _this.handlerTouched = function () {
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;

        _this.setState({
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: '',
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, '');
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      // console.log('handlerChangeValue')
      // console.log(newValue)
      var name = _this.props.inputProps.name;
      var value = newValue;

      var _checkValidity3 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity3.isValid,
          msgError = _checkValidity3.msgError;

      _this.setState({
        value: value,
        valid: isValid,
        message: msgError,
        showMessage: true
      });
      if (_this.props.changed) {
        var outValue = _this.props.type === 'number' ? Number(value) : value;
        _this.props.changed(name, outValue);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            return {
              rules: rules,
              _localProps: {}
            };
          } else {
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ disabled: value });
    }, _this.changeValue = function (el) {
      var value = el.target.value;
      _this.handlerChangeValue(value);
    }, _this.showErrorTooltip = function () {
      _this.setState({ showMessage: true });
    }, _this.hiddenErrorTooltip = function () {
      _this.setState({ showMessage: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.updateProps) {
        var value = this.props.inputProps.value;
        this.setState({ value: value, updateProps: false });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.inputProps.value) {
        this.setState({ updateProps: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value) {
        var value = this.props.inputProps.value ? this.props.inputProps.value : '';
        this.setState({ value: value });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });
    }
    // SET LOCAL CHANGE VALUE

    // SHOW MESSAGE TOOLTIP

    // HIDE MESSAGE TOOLTIP

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps, {
        value: this.state.value
      });

      var valid = void 0;
      var invalid = void 0;
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var _props$_prepend = props._prepend,
          _prepend = _props$_prepend === undefined ? null : _props$_prepend,
          _props$_append = props._append,
          _append = _props$_append === undefined ? null : _props$_append,
          localProps = objectWithoutProperties(props, ['_prepend', '_append']);

      var conteInput = null;
      var input = React__default.createElement(reactstrap.Input, _extends({}, localProps, { onFocus: this.showErrorTooltip, onBlur: this.hiddenErrorTooltip, onChange: this.changeValue, valid: valid, invalid: invalid }));
      var prepend = _prepend ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'prepend' },
        _prepend
      ) : null;
      var append = _append ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _append
      ) : null;
      if (append == null && prepend == null) {
        conteInput = input;
      } else {
        conteInput = React__default.createElement(
          reactstrap.InputGroup,
          { className: invalid ? 'is-invalid' : '' },
          prepend,
          input,
          append
        );
      }

      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        conteInput
      );
    }
  }]);
  return RkInput;
}(React.Component);

var RkMultiSelect = function (_Component) {
  inherits(RkMultiSelect, _Component);

  function RkMultiSelect() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkMultiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkMultiSelect.__proto__ || Object.getPrototypeOf(RkMultiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltip: false,
      value: '',
      defaultValue: '',
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      updateProps: false,
      _localProps: {}
    }, _this.handlerTouched = function () {
      // console.log('resetTouched SELECT')
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;
        // console.log(value, isValid, msgError)


        _this.setState({
          value: value,
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: null,
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, null);
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      var cen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var value = newValue;
      if (cen) {
        var isMulti = _this.props.inputProps.isMulti;
        value = isMulti && Array.isArray(newValue) ? newValue : [newValue];
      }
      var name = _this.props.inputProps.name;

      var _checkValidity3 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity3.isValid,
          msgError = _checkValidity3.msgError;

      _this.setState({
        value: value,
        valid: isValid,
        message: msgError,
        showMessage: true
      });
      if (_this.props.changed) {
        _this.props.changed(name, value);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            return {
              rules: rules,
              _localProps: {}
            };
          } else {
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ isDisabled: value });
    }, _this.changeValue = function (pickOption, action) {
      var value = pickOption.length === 0 ? null : pickOption;
      _this.handlerChangeValue(value, false);
    }, _this.showErrorTooltip = function () {
      _this.setState({ showMessage: true });
    }, _this.hiddenErrorTooltip = function () {
      _this.setState({ showMessage: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkMultiSelect, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.updateProps) {
        var value = this.props.inputProps.value;
        this.setState({ value: value, updateProps: false });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.inputProps.value) {
        this.setState({ updateProps: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value) {
        var value = this.props.inputProps.value ? this.props.inputProps.value : '';
        this.setState({ value: value });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });
    }
    // SET LOCAL CHANGE VALUE

    // SHOW MESSAGE TOOLTIP

    // HIDE MESSAGE TOOLTIP

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps, {
        value: this.state.value
      });
      var valid = void 0;
      var invalid = void 0;
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var _props$menuStatic = props.menuStatic,
          menuStatic = _props$menuStatic === undefined ? false : _props$menuStatic,
          _props$isMulti = props.isMulti,
          isMulti = _props$isMulti === undefined ? false : _props$isMulti,
          _props$isDisabled = props.isDisabled,
          isDisabled = _props$isDisabled === undefined ? false : _props$isDisabled,
          _props$optionLabel = props.optionLabel,
          optionLabel = _props$optionLabel === undefined ? 'label' : _props$optionLabel,
          _props$optionValue = props.optionValue,
          optionValue = _props$optionValue === undefined ? 'value' : _props$optionValue,
          _props$optionDisabled = props.optionDisabled,
          optionDisabled = _props$optionDisabled === undefined ? null : _props$optionDisabled,
          _props$_prepend = props._prepend,
          _prepend = _props$_prepend === undefined ? null : _props$_prepend,
          _props$_append = props._append,
          _append = _props$_append === undefined ? null : _props$_append,
          value = props.value,
          localProps = objectWithoutProperties(props, ['menuStatic', 'isMulti', 'isDisabled', 'optionLabel', 'optionValue', 'optionDisabled', '_prepend', '_append', 'value']);

      var className = ' rk-multiselect form-control ' + (localProps.className ? localProps.className : '') + (invalid ? 'is-invalid' : '') + (valid ? 'is-valid' : '');

      var customStyles = {
        control: function control(base, state) {
          return _extends({}, base, {
            borderColor: invalid ? '#dc3545 !important' : valid ? '#9e9e9e !important' : state.isFocused ? '#AAAAAA !important' : '#E3E3E3 !important',
            boxShadow: state.isFocused && invalid ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : 'none'
          });
        },
        menu: function menu(base, state) {
          return _extends({}, base, {
            position: menuStatic ? 'relative' : 'absolute'
          });
        }
      };

      var conteInput = null;
      var input = React__default.createElement(Select, _extends({}, localProps, {
        components: makeAnimated(),
        getOptionValue: function getOptionValue(option) {
          return option[optionValue];
        },
        getOptionLabel: function getOptionLabel(option) {
          return option[optionLabel];
        },
        isOptionDisabled: optionDisabled,
        value: value,
        isDisabled: isDisabled,
        isMulti: isMulti,
        styles: customStyles,
        className: className,
        onChange: this.changeValue,
        onFocus: this.showErrorTooltip,
        onBlur: this.hiddenErrorTooltip }));
      var prepend = _prepend ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'prepend' },
        _prepend
      ) : null;
      var append = _append ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _append
      ) : null;
      if (append == null && prepend == null) {
        conteInput = input;
      } else {
        conteInput = React__default.createElement(
          reactstrap.InputGroup,
          { className: invalid ? 'is-invalid' : '' },
          prepend,
          input,
          append
        );
      }

      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        conteInput
      );
    }
  }]);
  return RkMultiSelect;
}(React.Component);

var RkMultiSelectAdd = function (_Component) {
  inherits(RkMultiSelectAdd, _Component);

  function RkMultiSelectAdd() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkMultiSelectAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkMultiSelectAdd.__proto__ || Object.getPrototypeOf(RkMultiSelectAdd)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltip: false,
      inputValue: '',
      value: [],
      defaultValue: '',
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      updateProps: false,
      isLoading: false,
      localOptions: [],
      _localProps: {}
    }, _this.handlerTouched = function () {
      // console.log('resetTouched TAGS INPUT')
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;
        // console.log(value, isValid, msgError)


        _this.setState({
          value: value,
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: null,
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, null);
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'create-option';

      var data = {};
      switch (action) {
        case 'create-option':
          var props = _extends({}, _this.props.inputProps, _this.state._localProps);
          var _props$addOption = props.addOption,
              addOption = _props$addOption === undefined ? false : _props$addOption;

          if (addOption) {
            var localOptions = _this.state.localOptions;

            if (Array.isArray(newValue)) {
              var total = newValue.length;
              localOptions.push(newValue[total - 1]);
            } else {
              localOptions.push(newValue);
            }
            data = { value: newValue, localOptions: localOptions };
          } else {
            data = { value: newValue };
          }
          break;
        default:
          console.log(' -- default-option');
          data = { value: newValue };
      }

      console.log('ADD');
      var name = _this.props.inputProps.name;

      var _checkValidity3 = checkValidity(newValue, _this.state.rules),
          isValid = _checkValidity3.isValid,
          msgError = _checkValidity3.msgError;

      var setData = _extends({}, data, {
        valid: isValid,
        message: msgError,
        showMessage: true
      });

      _this.setState(setData);
      console.log(_this.props.inputProps.options);
      if (_this.props.changed) {
        _this.props.changed(name, newValue && newValue.length > 0 ? newValue : null);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            console.log('CHANGED PROPS MULTISLCT ADD 1');
            console.log(_this.props.inputProps.options);
            return {
              rules: rules,
              _localProps: {},
              localOptions: _this.props.inputProps.options
            };
          } else {
            console.log('CHANGED PROPS MULTISLCT ADD 2');
            var localOptions = Array.isArray(newProps.options) ? newProps.options : state.localOptions;
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps),
              localOptions: localOptions
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ isDisabled: value });
    }, _this.showErrorTooltip = function () {
      _this.setState({ showMessage: true });
    }, _this.hiddenErrorTooltip = function () {
      _this.setState({ showMessage: false });
    }, _this.handleChange = function (newValue, _ref2) {
      var action = _ref2.action;

      _this.handlerChangeValue(newValue, action);
    }, _this.isValidNewOption = function (inputValue, selectValue, selectOptions) {
      var props = _extends({}, _this.props.inputProps, _this.state._localProps);
      var _props$optionValue = props.optionValue,
          optionValue = _props$optionValue === undefined ? 'value' : _props$optionValue;

      return !(inputValue.trim().length === 0 || selectOptions.find(function (option) {
        return option[optionValue] === inputValue;
      }));
    }, _this.getNewOptionData = function (_inputValue, _optionLabel) {
      var _data;

      var props = _extends({}, _this.props.inputProps, _this.state._localProps);
      var _props$optionLabel = props.optionLabel,
          optionLabel = _props$optionLabel === undefined ? 'label' : _props$optionLabel,
          _props$optionValue2 = props.optionValue,
          optionValue = _props$optionValue2 === undefined ? 'value' : _props$optionValue2;

      var data = (_data = {}, defineProperty(_data, optionValue, _inputValue), defineProperty(_data, optionLabel, _optionLabel), _data);
      return data;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkMultiSelectAdd, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.updateProps) {
        var value = this.props.inputProps.value;
        this.setState({ value: value, updateProps: false });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.inputProps.value) {
        this.setState({ updateProps: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value) {
        var value = this.props.inputProps.value ? this.props.inputProps.value : null;
        this.setState({ value: value });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });

      var options = Array.isArray(this.props.inputProps.options) ? [].concat(toConsumableArray(this.props.inputProps.options)) : [];
      this.setState({ localOptions: options });
    }
    // SHOW MESSAGE TOOLTIP

    // HIDE MESSAGE TOOLTIP

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps);

      var valid = void 0;
      var invalid = void 0;
      // let touched = false
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var _props$menuStatic = props.menuStatic,
          menuStatic = _props$menuStatic === undefined ? false : _props$menuStatic,
          _props$isMulti = props.isMulti,
          isMulti = _props$isMulti === undefined ? false : _props$isMulti,
          _props$isDisabled = props.isDisabled,
          isDisabled = _props$isDisabled === undefined ? false : _props$isDisabled,
          _props$optionLabel2 = props.optionLabel,
          optionLabel = _props$optionLabel2 === undefined ? 'label' : _props$optionLabel2,
          _props$optionValue3 = props.optionValue,
          optionValue = _props$optionValue3 === undefined ? 'value' : _props$optionValue3,
          _props$optionDisabled = props.optionDisabled,
          optionDisabled = _props$optionDisabled === undefined ? null : _props$optionDisabled,
          _props$options = props.options,
          _props$_prepend = props._prepend,
          _prepend = _props$_prepend === undefined ? null : _props$_prepend,
          _props$_append = props._append,
          _append = _props$_append === undefined ? null : _props$_append,
          localProps = objectWithoutProperties(props, ['menuStatic', 'isMulti', 'isDisabled', 'optionLabel', 'optionValue', 'optionDisabled', 'options', '_prepend', '_append']);

      var _state = this.state,
          localOptions = _state.localOptions,
          value = _state.value;


      var className = ' rk-multiselect form-control ' + (props.className ? props.className : '') + (invalid ? 'is-invalid' : '') + (valid ? 'is-valid' : '');

      var customStyles = {
        control: function control(base, state) {
          return _extends({}, base, {
            borderColor: invalid ? '#dc3545 !important' : valid ? '#9e9e9e !important' : state.isFocused ? '#AAAAAA !important' : '#E3E3E3 !important',
            boxShadow: state.isFocused && invalid ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : 'none'
          });
        },
        menu: function menu(base, state) {
          return _extends({}, base, {
            position: menuStatic ? 'relative' : 'absolute'
          });
        }
      };

      var conteInput = null;
      var input = React__default.createElement(CreatableSelect, _extends({}, localProps, {
        isClearable: true,
        options: localOptions,
        value: value,
        components: makeAnimated(),
        className: className,
        styles: customStyles,
        isDisabled: isDisabled,
        isMulti: isMulti,
        isOptionDisabled: optionDisabled,
        getOptionLabel: function getOptionLabel(option) {
          return option[optionLabel];
        },
        getOptionValue: function getOptionValue(option) {
          return option[optionValue];
        },
        getNewOptionData: this.getNewOptionData,
        isValidNewOption: this.isValidNewOption,
        onChange: this.handleChange,
        onFocus: this.showErrorTooltip,
        onBlur: this.hiddenErrorTooltip
      }));
      var prepend = _prepend ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'prepend' },
        _prepend
      ) : null;
      var append = _append ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _append
      ) : null;
      if (append == null && prepend == null) {
        conteInput = input;
      } else {
        conteInput = React__default.createElement(
          reactstrap.InputGroup,
          { className: invalid ? 'is-invalid' : '' },
          prepend,
          input,
          append
        );
      }

      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        conteInput
      );
    }
  }]);
  return RkMultiSelectAdd;
}(React.Component);

var components = {
  DropdownIndicator: null
};

var createOption = function createOption(label, key, optionLabel, optionValue) {
  var _ref;

  return _ref = {}, defineProperty(_ref, optionLabel, label), defineProperty(_ref, optionValue, label), defineProperty(_ref, 'key', key), _ref;
};

var RkMultiSelectTag = function (_Component) {
  inherits(RkMultiSelectTag, _Component);

  function RkMultiSelectTag() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, RkMultiSelectTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = RkMultiSelectTag.__proto__ || Object.getPrototypeOf(RkMultiSelectTag)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      tooltip: false,
      inputValue: '',
      value: [],
      defaultValue: '',
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      updateProps: false,
      _localProps: {}
    }, _this.handlerTouched = function () {
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;
        // console.log(value, isValid, msgError)


        _this.setState({
          value: value,
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: [],
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, null);
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      var cen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var value = newValue ? newValue : [];
      if (!Array.isArray(value)) {
        value = [value];
      }

      var props = _extends({}, _this.props.inputProps, _this.state._localProps);
      var _props$optionLabel = props.optionLabel,
          optionLabel = _props$optionLabel === undefined ? 'label' : _props$optionLabel,
          _props$optionValue = props.optionValue,
          optionValue = _props$optionValue === undefined ? 'value' : _props$optionValue;

      var conteValue = [];
      value.map(function (it) {
        if ((typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object') {
          conteValue.push(it);
        } else {
          conteValue.push(createOption(it, conteValue.length, optionLabel, optionValue));
        }
      });

      if (cen) {
        var _checkValidity3 = checkValidity(conteValue, _this.state.rules),
            isValid = _checkValidity3.isValid,
            msgError = _checkValidity3.msgError;

        _this.setState({
          value: conteValue,
          updateProps: false,
          valid: isValid,
          message: msgError,
          showMessage: true });
      } else {
        _this.setState({ value: conteValue, updateProps: false });
      }

      if (_this.props.changed) {
        var name = _this.props.inputProps.name;
        _this.props.changed(name, conteValue);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            return {
              rules: rules,
              _localProps: {}
            };
          } else {
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ isDisabled: value });
    }, _this.changeValue = function (value, actionMeta) {
      var name = _this.props.inputProps.name;

      var _checkValidity4 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity4.isValid,
          msgError = _checkValidity4.msgError;

      _this.setState({
        value: value,
        valid: isValid,
        message: msgError,
        showMessage: true
      });
      if (_this.props.changed) {
        _this.props.changed(name, value && value.length > 0 ? value : null);
      }
    }, _this.showErrorTooltip = function () {
      _this.setState({ showMessage: true });
    }, _this.hiddenErrorTooltip = function () {
      _this.setState({ showMessage: false });
    }, _this.handleInputChange = function (inputValue) {
      _this.setState({ inputValue: inputValue });
    }, _this.handleKeyDown = function (event) {
      var _this$state = _this.state,
          inputValue = _this$state.inputValue,
          _this$state$value = _this$state.value,
          value = _this$state$value === undefined ? [] : _this$state$value;

      if (!inputValue) return;
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          var props = _extends({}, _this.props.inputProps, _this.state._localProps);
          var _props$optionLabel2 = props.optionLabel,
              optionLabel = _props$optionLabel2 === undefined ? 'label' : _props$optionLabel2,
              _props$optionValue2 = props.optionValue,
              optionValue = _props$optionValue2 === undefined ? 'value' : _props$optionValue2,
              name = props.name;


          var localValue = [];
          if (Array.isArray(value)) {
            localValue = [].concat(toConsumableArray(value), [createOption(inputValue, value.length, optionLabel, optionValue)]);
          } else {
            localValue = [createOption(inputValue, 0)];
          }

          var _checkValidity5 = checkValidity(localValue, _this.state.rules),
              isValid = _checkValidity5.isValid,
              msgError = _checkValidity5.msgError;

          _this.setState({
            inputValue: '',
            value: localValue,
            valid: isValid,
            message: msgError,
            showMessage: true
          });
          if (_this.props.changed) {
            _this.props.changed(name, localValue);
          }
          event.preventDefault();
      }
    }, _this.isValidNewOption = function (inputValue, selectValue, selectOptions) {
      return !(inputValue.trim().length === 0 || selectOptions.find(function (option) {
        return option['key'] === inputValue;
      }));
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkMultiSelectTag, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.updateProps) {
        this.handlerChangeValue(this.props.inputProps.value, false);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.inputProps.value) {
        this.setState({ updateProps: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value) {
        this.handlerChangeValue(this.props.inputProps.value, false);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });
    }
    // SET LOCAL CHANGE VALUE

    // SHOW MESSAGE TOOLTIP

    // HIDE MESSAGE TOOLTIP

    // REACT SELECT CREATABLES FUNCTIONS

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps);

      var valid = void 0;
      var invalid = void 0;
      // let touched = false
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var className = ' rk-multiselectTag form-control ' + (props.className ? props.className : '') + (invalid ? 'is-invalid' : '') + (valid ? 'is-valid' : '');

      var customStyles = {
        control: function control(base, state) {
          return _extends({}, base, {
            borderColor: invalid ? '#dc3545 !important' : valid ? '#9e9e9e !important' : state.isFocused ? '#AAAAAA !important' : '#E3E3E3 !important',
            boxShadow: state.isFocused && invalid ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : 'none'
          });
        }
      };

      var _props$isMulti = props.isMulti,
          _props$isDisabled = props.isDisabled,
          isDisabled = _props$isDisabled === undefined ? false : _props$isDisabled,
          _props$optionLabel3 = props.optionLabel,
          optionLabel = _props$optionLabel3 === undefined ? 'label' : _props$optionLabel3,
          _props$optionValue3 = props.optionValue,
          _props$optionDisabled = props.optionDisabled,
          optionDisabled = _props$optionDisabled === undefined ? null : _props$optionDisabled,
          _props$placeholder = props.placeholder,
          placeholder = _props$placeholder === undefined ? 'Digite y presione enter...' : _props$placeholder,
          _props$_prepend = props._prepend,
          _prepend = _props$_prepend === undefined ? null : _props$_prepend,
          _props$_append = props._append,
          _append = _props$_append === undefined ? null : _props$_append,
          localProps = objectWithoutProperties(props, ['isMulti', 'isDisabled', 'optionLabel', 'optionValue', 'optionDisabled', 'placeholder', '_prepend', '_append']);

      var _state = this.state,
          inputValue = _state.inputValue,
          value = _state.value;


      var conteInput = null;
      var input = React__default.createElement(CreatableSelect, _extends({}, localProps, {
        getOptionValue: function getOptionValue(option) {
          return option.key;
        },
        getOptionLabel: function getOptionLabel(option) {
          return option[optionLabel];
        },
        className: className,
        styles: customStyles,
        components: components,
        inputValue: inputValue,
        isDisabled: isDisabled,
        isOptionDisabled: optionDisabled,
        isClearable: true,
        isMulti: true,
        menuIsOpen: false,
        isValidNewOption: this.isValidNewOption,
        onChange: this.changeValue,
        onInputChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        onFocus: this.showErrorTooltip,
        onBlur: this.hiddenErrorTooltip,
        placeholder: placeholder,
        value: value
      }));
      var prepend = _prepend ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'prepend' },
        _prepend
      ) : null;
      var append = _append ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _append
      ) : null;
      if (append == null && prepend == null) {
        conteInput = input;
      } else {
        conteInput = React__default.createElement(
          reactstrap.InputGroup,
          { className: invalid ? 'is-invalid' : '' },
          prepend,
          input,
          append
        );
      }
      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        conteInput
      );
    }
  }]);
  return RkMultiSelectTag;
}(React.Component);

// REACT DATETIME

// const NOW = '_now_'
var DEFAULT_FDATE = 'DD/MM/YYYY';
var DEFAULT_FTIME = 'HH:mm:ss';
var DEFAULT_RETURN_FORMAT = 'DD/MM/YYYY HH:mm:ss';

var RkDatetime = function (_Component) {
  inherits(RkDatetime, _Component);

  function RkDatetime() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkDatetime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkDatetime.__proto__ || Object.getPrototypeOf(RkDatetime)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: null,
      defaultValue: null,
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      _localProps: {}
    }, _this.handlerTouched = function () {
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;
        // console.log(value)

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;
        // console.log(isValid, msgError)


        _this.setState({
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: null,
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, null);
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var name = _this.props.inputProps.name;
      var dateEvaluate = _this.generateDateValue(newValue, isUTC);
      var _value = dateEvaluate[0];
      var _outValue = dateEvaluate[1];

      var _checkValidity3 = checkValidity(_value, _this.state.rules),
          isValid = _checkValidity3.isValid,
          msgError = _checkValidity3.msgError;

      _this.setState({
        value: _value,
        valid: isValid,
        message: msgError,
        showMessage: true
      });
      if (_this.props.changed) {
        _this.props.changed(name, _outValue);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            return {
              rules: rules,
              _localProps: {}
            };
          } else {
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ inputProps: { disabled: value } });
    }, _this.generateDateValue = function (newValue) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (newValue) {
        var props = _extends({}, _this.props.inputProps, _this.state._localProps);
        var _props$returnFormat = props.returnFormat,
            returnFormat = _props$returnFormat === undefined ? DEFAULT_RETURN_FORMAT : _props$returnFormat,
            _props$utc = props.utc,
            utc = _props$utc === undefined ? true : _props$utc;


        var _value = null;
        var _outValue = null;

        if (newValue instanceof moment) ; else if (typeof newValue === 'string') {
          newValue = moment(newValue, returnFormat);
        } else {
          newValue = null;
        }

        if (newValue && newValue.isValid()) {
          if (utc) {
            _value = newValue;
            if (isUTC !== undefined) {
              _outValue = isUTC ? newValue.format(returnFormat) : moment(newValue).utc(false).format(returnFormat);
            } else {
              _outValue = newValue.format(returnFormat);
            }
          } else {
            _value = newValue;
            if (isUTC !== undefined) {
              _outValue = isUTC ? newValue.format(returnFormat) : moment(newValue).utc(false).format(returnFormat);
            } else {
              _outValue = moment(newValue).utc(false).format(returnFormat);
            }
          }
        }
        // console.log(_value, _outValue)
        return [_value, _outValue];
      }
      return [null, null];
    }, _this.onChange = function (newValue) {
      _this.handlerChangeValue(newValue);
    }, _this.generateCondition = function (condition) {
      if (condition) {
        var min = condition.min;
        var max = condition.max;
        var dateMin = null;
        var dateMax = null;
        if (min || typeof min === 'number') dateMin = min <= 0 ? moment().subtract(Math.abs(min - 1), 'day') : moment().add(Math.abs(min - 1), 'day');
        if (max || typeof max === 'number') dateMax = max < 0 ? moment().subtract(Math.abs(max), 'day') : moment().add(Math.abs(max), 'day');
        return [dateMin, dateMax];
      }
      return [null, null];
    }, _this.isValiDateRange = function (current, params) {
      var condition = true;
      if (params[0]) condition = condition && current.isAfter(params[0]);
      if (params[1]) condition = condition && current.isBefore(params[1]);
      return condition;
    }, _this.showErrorTooltip = function () {
      _this.setState({ showMessage: true });
    }, _this.hiddenErrorTooltip = function () {
      _this.setState({ showMessage: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkDatetime, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      var _props$inputProps = this.props.inputProps,
          _props$inputProps$val = _props$inputProps.value,
          value = _props$inputProps$val === undefined ? null : _props$inputProps$val,
          name = _props$inputProps.name;

      var newValue = value;
      if (newValue) {
        var dateEvaluate = this.generateDateValue(newValue);
        var _value = dateEvaluate[0];
        var _outValue = dateEvaluate[1];
        this.setState({ value: _value });
        if (this.props.changed) {
          this.props.changed(name, _outValue);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });
    }

    // SHOW MESSAGE TOOLTIP

    // HIDE MESSAGE TOOLTIP

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // let date = new Date()
      var props = _extends({}, this.props.inputProps, this.state._localProps, {
        value: this.state.value
      });

      var _props$dateFormat = props.dateFormat,
          dateFormat = _props$dateFormat === undefined ? DEFAULT_FDATE : _props$dateFormat,
          _props$timeFormat = props.timeFormat,
          timeFormat = _props$timeFormat === undefined ? DEFAULT_FTIME : _props$timeFormat,
          _props$returnFormat2 = props.returnFormat,
          _props$menuStatic = props.menuStatic,
          menuStatic = _props$menuStatic === undefined ? false : _props$menuStatic,
          _props$open = props.open,
          open = _props$open === undefined ? undefined : _props$open,
          _props$className = props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$validDateRange = props.validDateRange,
          validDateRange = _props$validDateRange === undefined ? undefined : _props$validDateRange,
          value = props.value,
          _props$isValidDate = props.isValidDate,
          isValidDate = _props$isValidDate === undefined ? null : _props$isValidDate,
          _props$utc2 = props.utc,
          _props$_prepend = props._prepend,
          _prepend = _props$_prepend === undefined ? null : _props$_prepend,
          _props$_append = props._append,
          _append = _props$_append === undefined ? null : _props$_append,
          localProps = objectWithoutProperties(props, ['dateFormat', 'timeFormat', 'returnFormat', 'menuStatic', 'open', 'className', 'validDateRange', 'value', 'isValidDate', 'utc', '_prepend', '_append']);

      var paramsValidDate = this.generateCondition(validDateRange);
      var validFunction = validDateRange ? function (current) {
        return _this3.isValiDateRange(current, paramsValidDate);
      } : isValidDate;

      var valid = void 0;
      var invalid = void 0;
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var _className = ' rk-datetime form-control ' + className + ' ' + (menuStatic && open ? 'rdt-static' : '') + (invalid ? 'is-invalid' : '') + (valid ? 'is-valid' : '');

      var conteInput = null;
      var input = React__default.createElement(Datetime, _extends({}, localProps, {
        locale: 'es',
        className: _className,
        value: value,
        open: open,
        isValidDate: validFunction,
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        onChange: this.onChange,
        onFocus: this.showErrorTooltip,
        onBlur: this.hiddenErrorTooltip }));
      var prepend = _prepend ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'prepend' },
        _prepend
      ) : null;
      var append = _append ? React__default.createElement(
        reactstrap.InputGroupAddon,
        { addonType: 'append' },
        _append
      ) : null;
      if (append == null && prepend == null) {
        conteInput = input;
      } else {
        conteInput = React__default.createElement(
          reactstrap.InputGroup,
          { className: invalid ? 'is-invalid' : '' },
          prepend,
          input,
          append
        );
      }

      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        conteInput
      );
    }
  }]);
  return RkDatetime;
}(React.Component);

// GITHUB
// import { checkValidity } from '../../../shared/validity/validity'

var RkSwitch = function (_Component) {
  inherits(RkSwitch, _Component);

  function RkSwitch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkSwitch.__proto__ || Object.getPrototypeOf(RkSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltip: false,
      value: true,
      realValue: null,
      defaultValue: '',
      touched: false,
      updateProps: false,
      _localProps: {}
    }, _this.handlerTouched = function () {
      // console.log('resetTouched')
      // if (this.state.touched) {
      //     this.setState({touched: false, valid: undefined})
      // } else {
      //     const value = this.state.value
      //     const {isValid, msgError} = checkValidity(value, this.state.rules)
      //     this.setState({
      //         touched: true,
      //         valid: isValid,
      //         message: msgError,
      //         showMessage: true
      //     })
      // }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      var realValue = typeof _this.state.realValue === 'number' ? 1 : true;
      _this.setState({
        value: true,
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, realValue);
      }
    }, _this.handlerIsValidate = function () {
      // const value = this.state.value
      // const {isValid} = checkValidity(value, this.state.rules)
      // return isValid
      return true;
    }, _this.handlerChangeValue = function (newValue) {
      var cen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var value = null;
      var realValue = null;
      if (cen) {
        realValue = newValue;
        if (typeof newValue === 'boolean') {
          value = newValue;
        } else if (typeof newValue === 'number') {
          value = !(newValue === 0);
        } else {
          value = false;
          realValue = false;
        }
      } else {
        value = newValue;
        if (typeof _this.state.realValue === 'number') {
          realValue = value ? 1 : 0;
        } else {
          realValue = value;
        }
      }

      var name = _this.props.inputProps.name;
      _this.setState({
        value: value,
        realValue: realValue
      });
      if (_this.props.changed) {
        _this.props.changed(name, realValue);
      }
    }, _this.handlerChangeProps = function () {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || newValue === null) {
        _this.setState(function (state) {
          if (newValue === null) {
            return {
              _localProps: {}
            };
          } else {
            return {
              _localProps: _extends({}, state._localProps, newValue)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ disabled: value });
    }, _this.changeValue = function (el, state) {
      _this.handlerChangeValue(state, false);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkSwitch, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.updateProps) {
        var value = this.props.inputProps.value;
        var newValue = false;
        if (typeof value === 'boolean') {
          newValue = value;
        } else if (typeof value === 'number') {
          newValue = !(value === 0);
        }
        this.setState({ value: newValue, realValue: value, updateProps: false });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.inputProps.value !== undefined) {
        this.setState({ updateProps: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value !== undefined) {
        var value = this.props.inputProps.value;
        var newValue = false;
        if (typeof value === 'boolean') {
          newValue = value;
        } else if (typeof value === 'number') {
          newValue = !(value === 0);
        }

        this.setState({ value: newValue, realValue: value });
        if (this.props.changed) {
          var name = this.props.inputProps.name;
          this.props.changed(name, value);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
    }
    // SET LOCAL CHANGE VALUE

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps, {
        value: this.state.value
      });

      var _props$position = props.position,
          position = _props$position === undefined ? 'center' : _props$position,
          localProps = objectWithoutProperties(props, ['position']);
      // const _className = 'form-control ' + className

      return React__default.createElement(
        'div',
        { className: 'text-' + position },
        React__default.createElement(Switch, _extends({}, localProps, { onChange: this.changeValue }))
      );
    }
  }]);
  return RkSwitch;
}(React.Component);

// import Switch from 'react-bootstrap-switch'

var RkCheckbox = function (_Component) {
  inherits(RkCheckbox, _Component);

  function RkCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkCheckbox.__proto__ || Object.getPrototypeOf(RkCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cbId: Math.random().toString(16).slice(2),
      tooltip: false,
      value: false,
      touched: false,
      updateProps: false,
      _localProps: {}
    }, _this.handlerTouched = function () {}, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({ value: false });
      if (_this.props.changed) {
        _this.props.changed(name, false);
      }
    }, _this.handlerIsValidate = function () {
      return true;
    }, _this.handlerChangeValue = function (newValue) {
      var name = _this.props.inputProps.name;
      var localValue = null;
      if (newValue === undefined) {
        _this.setState(function (state) {
          localValue = !state.value;
          if (_this.props.changed) {
            _this.props.changed(name, localValue);
          }
          return {
            value: localValue
          };
        });
        return;
      } else if (typeof newValue === 'boolean') {
        localValue = newValue;
      } else {
        localValue = false;
      }
      _this.setState({ value: localValue });

      if (_this.props.changed) {
        _this.props.changed(name, localValue);
      }
    }, _this.handlerChangeProps = function () {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || newValue === null) {
        _this.setState(function (state) {
          if (newValue === null) {
            return {
              _localProps: {}
            };
          } else {
            return {
              _localProps: _extends({}, state._localProps, newValue)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ disabled: value });
    }, _this.changeValue = function () {
      _this.handlerChangeValue();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkCheckbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      if (this.props.inputProps.value !== undefined) {
        var value = this.props.inputProps.value ? this.props.inputProps.value : false;
        this.handlerChangeValue(value);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
    }
    // SET LOCAL CHANGE VALUE

  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps);

      var _props$label = props.label,
          label = _props$label === undefined ? 'test' : _props$label,
          _props$position = props.position,
          position = _props$position === undefined ? 'left' : _props$position,
          _props$color = props.color,
          color = _props$color === undefined ? null : _props$color,
          _props$disabled = props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$className = props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$style = props.style,
          style = _props$style === undefined ? null : _props$style;

      return React__default.createElement(
        'div',
        { className: 'checkbox text-' + position + (color ? ' checkbox-' + color : '') + ' ' + className, style: style },
        React__default.createElement(reactstrap.Input, { id: this.state.cbId, type: 'checkbox', onChange: this.changeValue, checked: this.state.value, disabled: disabled }),
        React__default.createElement(
          'label',
          { htmlFor: this.state.cbId },
          label
        )
      );
    }
  }]);
  return RkCheckbox;
}(React.Component);

RkCheckbox.propTypes = {
  name: PropTypes.string,
  inputProps: PropTypes.object,
  getFunctions: PropTypes.func,
  changed: PropTypes.func
};

var RkRadio = function (_Component) {
  inherits(RkRadio, _Component);

  function RkRadio() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkRadio.__proto__ || Object.getPrototypeOf(RkRadio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: null,
      valid: undefined,
      touched: false,
      message: '',
      showMessage: false,
      rules: {},
      _localProps: {}
    }, _this.handlerTouched = function () {
      if (_this.state.touched) {
        _this.setState({ touched: false, valid: undefined });
      } else {
        var value = _this.state.value;

        var _checkValidity = checkValidity(value, _this.state.rules),
            isValid = _checkValidity.isValid,
            msgError = _checkValidity.msgError;

        _this.setState({
          touched: true,
          valid: isValid,
          message: msgError,
          showMessage: true
        });
      }
    }, _this.handlerReset = function () {
      var name = _this.props.inputProps.name;
      _this.setState({
        value: null,
        valid: undefined,
        touched: false,
        message: '',
        showMessage: false
      });
      if (_this.props.changed) {
        _this.props.changed(name, null);
      }
    }, _this.handlerIsValidate = function () {
      var value = _this.state.value;

      var _checkValidity2 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity2.isValid;

      return isValid;
    }, _this.handlerChangeValue = function (newValue) {
      var name = _this.props.inputProps.name;
      var value = newValue;

      var _checkValidity3 = checkValidity(value, _this.state.rules),
          isValid = _checkValidity3.isValid,
          msgError = _checkValidity3.msgError;

      _this.setState({
        value: value,
        valid: isValid,
        message: msgError,
        showMessage: true
      });
      if (_this.props.changed) {
        _this.props.changed(name, value);
      }
    }, _this.handlerChangeProps = function () {
      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var rules = (typeof newRules === 'undefined' ? 'undefined' : _typeof(newRules)) === 'object' ? _extends({}, newRules) : _extends({}, _this.props.rules);
      if ((typeof newProps === 'undefined' ? 'undefined' : _typeof(newProps)) === 'object' || newProps === null) {
        _this.setState(function (state) {
          if (newProps === null) {
            return {
              rules: rules,
              _localProps: {}
            };
          } else {
            return {
              rules: rules,
              _localProps: _extends({}, state._localProps, newProps)
            };
          }
        });
      }
    }, _this.handlerDisabledInput = function (value) {
      _this.handlerChangeProps({ disabled: value });
    }, _this.changeValue = function (value) {
      _this.handlerChangeValue(value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkRadio, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // INIT VALUES BY DEFAULT
      var value = this.props.inputProps.value;

      if (value !== undefined) {
        var localValue = value ? value : null;
        this.handlerChangeValue(localValue);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // SET HANDLER FUNCTIONS
      if (this.props.inputProps.name) {
        var name = this.props.inputProps.name;
        this.props.getFunctions(name, function () {
          return _this2.handlerTouched();
        }, function () {
          return _this2.handlerReset();
        }, function () {
          return _this2.handlerIsValidate();
        }, this.handlerDisabledInput, this.handlerChangeValue, this.handlerChangeProps);
      }
      // INIT RULES
      var rules = this.props.rules ? this.props.rules : {};
      this.setState({ rules: rules });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props.inputProps, this.state._localProps);

      var valid = void 0;
      var invalid = void 0;
      // let touched = false
      if (this.state.valid !== undefined) {
        valid = this.state.valid;
        invalid = !this.state.valid ? !this.state.valid : undefined;
      }

      var conteClassName = 'rk-radio ' + (invalid ? 'is-invalid' : '') + (valid ? 'is-valid' : '');

      var _props$options = props.options,
          options = _props$options === undefined ? [] : _props$options,
          _props$position = props.position,
          position = _props$position === undefined ? 'left' : _props$position,
          _props$color = props.color,
          color = _props$color === undefined ? null : _props$color,
          _props$disabled = props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$className = props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$style = props.style,
          style = _props$style === undefined ? null : _props$style;

      var name = this.props.inputProps.name;

      var _options = Array.isArray(options) ? options : [];
      var radios = _options.map(function (it, key) {
        var _color = color ? 'radio-' + color : '';
        var _value = it;

        if ((typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object') {
          _color = it.color ? 'radio-' + it.color : _color;
          _value = it.value ? it.value : undefined;
        }

        var _name = name + '_' + key;
        return React__default.createElement(
          'div',
          { className: 'radio text-' + position + ' ' + _color + ' ' + className, key: key },
          React__default.createElement(reactRadioGroup.Radio, { value: _value, id: _name, disabled: disabled }),
          React__default.createElement(
            'label',
            { htmlFor: _name },
            _value
          )
        );
      });

      return React__default.createElement(
        RkValidate,
        { tooltip: this.props.tooltip, show: this.state.showMessage, message: this.state.message, valid: valid },
        React__default.createElement(
          reactRadioGroup.RadioGroup,
          {
            name: 'fruit',
            className: conteClassName,
            style: style,
            selectedValue: this.state.value,
            onChange: this.changeValue },
          radios
        )
      );
    }
  }]);
  return RkRadio;
}(React.Component);

RkRadio.propTypes = {
  name: PropTypes.string,
  inputProps: PropTypes.object,
  rules: PropTypes.object,
  getFunctions: PropTypes.func,
  changed: PropTypes.func,
  tooltip: PropTypes.bool
};

var RkFormInput = function (_Component) {
  inherits(RkFormInput, _Component);

  function RkFormInput() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkFormInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkFormInput.__proto__ || Object.getPrototypeOf(RkFormInput)).call.apply(_ref, [this].concat(args))), _this), _this.changed = function (name, value) {
      _this.props.changed(name, value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkFormInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('----- ----- UPDATE -------');
      console.log(this.props);
      console.log('--- --- --------- -------');
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.render;
    }
  }, {
    key: 'selectTypeInput',
    value: function selectTypeInput(inputProps, rules) {
      var _inputProps$type = inputProps.type,
          type = _inputProps$type === undefined ? 'text' : _inputProps$type,
          input = objectWithoutProperties(inputProps, ['type']);

      var opt = null;
      switch (type) {
        case 'multiSelect':
          opt = React__default.createElement(RkMultiSelect, { inputProps: input, rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'multiSelectTag':
          opt = React__default.createElement(RkMultiSelectTag, { inputProps: input, rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'multiSelectAdd':
          opt = React__default.createElement(RkMultiSelectAdd, { inputProps: input, rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'switch':
          opt = React__default.createElement(RkSwitch, { inputProps: input, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'checkbox':
          opt = React__default.createElement(RkCheckbox, { inputProps: input, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'radio':
          opt = React__default.createElement(RkRadio, { inputProps: input, rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'datetime':
          opt = React__default.createElement(RkDatetime, { inputProps: input, rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
          break;
        case 'plainText':
          opt = React__default.createElement(
            reactstrap.Input,
            { inputProps: input, plaintext: true },
            input.value
          );
          break;
        default:
          opt = React__default.createElement(RkInput, { type: type, inputProps: _extends({}, input, { type: type }), rules: rules, changed: this.changed, getFunctions: this.props.inputFunctions, tooltip: this.props.tooltip });
      }

      return opt;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var field = this.props.fields;
      if (field.length === undefined) {
        field = [this.props.fields];
      }
      var formGroups = [];
      field.map(function (item, key) {
        var _ref2 = item.formGroup ? item.formGroup : {},
            _ref2$inputSize = _ref2.inputSize,
            inputSize = _ref2$inputSize === undefined ? null : _ref2$inputSize,
            _ref2$labelSize = _ref2.labelSize,
            labelSize = _ref2$labelSize === undefined ? null : _ref2$labelSize,
            formGroupProps = objectWithoutProperties(_ref2, ['inputSize', 'labelSize']);

        var _ref3 = item.label ? item.label : {},
            _ref3$labelText = _ref3.labelText,
            labelText = _ref3$labelText === undefined ? null : _ref3$labelText,
            labelProps = objectWithoutProperties(_ref3, ['labelText']);

        var inputProps = _extends({}, item.input);
        var rules = _extends({}, item.rules);
        var inputTag = _this2.selectTypeInput(inputProps, rules);
        if (formGroupProps && formGroupProps.row) {
          inputTag = React__default.createElement(
            reactstrap.Col,
            inputSize,
            inputTag
          );
        } else {
          labelSize = labelSize === null ? { sm: 12 } : labelSize;
        }
        var labelTag = labelText ? React__default.createElement(
          reactstrap.Label,
          _extends({}, labelProps, labelSize),
          labelText
        ) : null;

        var itemSize = item.size;

        var formGroup = React__default.createElement(
          reactstrap.Col,
          _extends({}, itemSize, { key: key }),
          React__default.createElement(
            reactstrap.FormGroup,
            formGroupProps,
            labelTag,
            inputTag
          )
        );

        formGroups.push(formGroup);
      });

      var resultFormGroup = null;
      if (formGroups.length > 1) {
        resultFormGroup = React__default.createElement(
          reactstrap.Col,
          null,
          React__default.createElement(
            reactstrap.Row,
            null,
            formGroups
          )
        );
      } else {
        resultFormGroup = formGroups[0];
      }

      return React__default.createElement(
        reactstrap.Row,
        null,
        resultFormGroup
      );
    }
  }]);
  return RkFormInput;
}(React.Component);

var RkForm = function (_Component) {
  inherits(RkForm, _Component);

  function RkForm() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RkForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RkForm.__proto__ || Object.getPrototypeOf(RkForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: {},
      tooltip: false,
      disabled: false
    }, _this.inputFunctions = function (name, eventTouched, eventReset, eventIsValid, disableInput, changeValue, changeProps) {
      _this.setState(function (state) {
        return {
          items: _extends({}, state.items, defineProperty({}, name, _extends({}, state.items[name], {
            $touch: eventTouched,
            $reset: eventReset,
            $isValid: eventIsValid,
            $disable: disableInput,
            $change: changeValue,
            $changeProps: changeProps
          })))
        };
      });
    }, _this.changeInputForm = function (key, value) {
      var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      console.log('changeInput');
      console.log(key, value);
      if (_this.state.items[key]) {
        _this.state.items[key].$change(value, extra);
      }
    }, _this.changeInputProps = function (key, value) {
      var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      console.log('changeInput');
      console.log(key, value);
      if (_this.state.items[key]) {
        _this.state.items[key].$changeProps(value, extra);
      }
    }, _this.touchForm = function () {
      Object.keys(_this.state.items).map(function (it) {
        _this.state.items[it].$touch();
      });
    }, _this.disableAllForm = function (value) {
      console.log('disableAllForm');
      console.log(value);
      Object.keys(_this.state.items).map(function (it) {
        _this.state.items[it].$disable(value);
      });
      _this.setState({ disabled: value });
    }, _this.resetForm = function () {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      console.log('RESET FORM');
      console.log(option);
      if (option === '_all_') {
        Object.keys(_this.state.items).map(function (it) {
          console.log(it);
          _this.state.items[it].$reset();
          _this.state.items[it].$changeProps(null);
        });
        _this.setState({ disabled: false });
      } else {
        Object.keys(_this.state.items).map(function (it) {
          _this.state.items[it].$reset();
        });
      }
    }, _this.validateForm = function () {
      var isValidate = true;
      var keys = Object.keys(_this.state.items);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var valid = _this.state.items[key].$isValid();
        if (valid === false) {
          isValidate = false;
          break;
        }
      }
      return isValidate;
    }, _this.inputChanged = function (name, value) {
      var formName = _this.props.name;
      _this.props.inputChanged(formName, name, value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RkForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // SET FORM FUNCTIONS
      var formName = this.props.name;
      var _function = {
        $touch: function $touch() {
          return _this2.touchForm();
        },
        $reset: this.resetForm,
        $isValid: function $isValid() {
          return _this2.validateForm();
        },
        $disable: this.disableAllForm,
        $change: this.changeInputForm,
        $changeProps: this.changeInputProps
      };
      this.props.inputFormHandler(formName, _function);
    }

    // GET FUNCTION BY INPUTS

    // CHANGE VALUE

    // CHANGE INPUT PROPS

    // RESET ALL INPUTS FORM

    // DISABLE ALL FORM

    // TOUCH ALL INPUTS FORM

    // VALID ALL INPUTS FORM

    // SET CHANGE VALUES FORM

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          inputs = _props.inputs,
          render = _props.render;

      var FormInputs = inputs;
      var _inputs = Object.keys(FormInputs).map(function (key) {
        var fInput = null;
        if (key[0] === '_' && key[1] === '_') {
          fInput = Object.keys(FormInputs[key]).map(function (iKey) {
            return FormInputs[key][iKey] = _extends({}, FormInputs[key][iKey], {
              input: _extends({}, FormInputs[key][iKey]['input'], {
                name: iKey
              })
            });
          });
        } else {
          FormInputs[key]['input'] = _extends({}, FormInputs[key]['input'], {
            name: key
          });
          fInput = FormInputs[key];
        }
        return React__default.createElement(RkFormInput, { key: key, tooltip: _this3.state.tooltip, fields: fInput, render: render, changed: _this3.inputChanged, inputFunctions: _this3.inputFunctions });
      });

      return React__default.createElement(
        'form',
        { className: 'rkForm form-horizontal ' + (this.state.disabled ? 'rkForm-disabled' : ''), autoComplete: 'off' },
        _inputs,
        children ? React__default.createElement(
          'div',
          null,
          children
        ) : null
      );
    }
  }]);
  return RkForm;
}(React.Component);

RkForm.propTypes = {
  name: PropTypes.string,
  inputs: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  inputFormHandler: PropTypes.func,
  inputChanged: PropTypes.func,
  render: PropTypes.bool
  // isLoading: PropTypes.bool
};


RkForm.defaultProps = {
  // isLoading: false,
  render: false
};

module.exports = RkForm;
//# sourceMappingURL=index.js.map
