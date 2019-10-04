'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _operator = require('./operator');

var _operator2 = _interopRequireDefault(_operator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Operators = [];
Operators.push(new _operator2.default('equal', function (a, b) {
  return a === b;
}));
Operators.push(new _operator2.default('notEqual', function (a, b) {
  return a !== b;
}));
Operators.push(new _operator2.default('in', function (a, b) {
  return b.indexOf(a) > -1;
}));
Operators.push(new _operator2.default('notIn', function (a, b) {
  return b.indexOf(a) === -1;
}));

Operators.push(new _operator2.default('contains', function (a, b) {
  return a.indexOf(b) > -1;
}, Array.isArray));
Operators.push(new _operator2.default('doesNotContain', function (a, b) {
  return a.indexOf(b) === -1;
}, Array.isArray));

var containsOnly = function containsOnly(a, b) {
  var allowed = {};

  b.forEach(function (name) {
    allowed[name] = true;
  });

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      if (!allowed[name]) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

Operators.push(new _operator2.default('containsOnly', containsOnly, Array.isArray));

var everyEquals = function everyEquals(a, b) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = a[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var element = _step2.value;

      if (b !== element) return false;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
};

Operators.push(new _operator2.default('everyEquals', everyEquals, Array.isArray));

var dimensionsContain = function dimensionsContain(a, b) {
  var allowed = {};

  b.forEach(function (name) {
    allowed[name] = true;
  });

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = a[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var dimension = _step3.value;

      var found = false;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = dimension[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var name = _step4.value;

          if (allowed[name]) {
            found = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (found) continue;
      return false;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return true;
};

Operators.push(new _operator2.default('dimensionsContain', dimensionsContain, Array.isArray));

var everyTrue = function everyTrue(a, b) {
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = a[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var element = _step5.value;

      if (!b(element)) return false;
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return true;
};

Operators.push(new _operator2.default('everyTrue', everyTrue, Array.isArray));

function numberValidator(factValue) {
  return Number.parseFloat(factValue).toString() !== 'NaN';
}
Operators.push(new _operator2.default('lessThan', function (a, b) {
  return a < b;
}, numberValidator));
Operators.push(new _operator2.default('lessThanInclusive', function (a, b) {
  return a <= b;
}, numberValidator));
Operators.push(new _operator2.default('greaterThan', function (a, b) {
  return a > b;
}, numberValidator));
Operators.push(new _operator2.default('greaterThanInclusive', function (a, b) {
  return a >= b;
}, numberValidator));

exports.default = Operators;