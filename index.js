'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {AsyncEvent} AsyncEvent
 * @property {string} status
 * @property {boolean|null} error
 * @property {boolean} isExecuting
 * @property {boolean} isSuccessful
 * @property {boolean} isReady
 * @method {function} markAsExecuting
 * @method {function} resolve
 * @method {function} reject
 * @method {function} reset
 */

/**
 * @returns AsyncEvent
 */
var AsyncEvent = function () {
	function AsyncEvent() {
		_classCallCheck(this, AsyncEvent);

		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isSuccessful = false;
		this.isReady = true;
	}

	_createClass(AsyncEvent, [{
		key: 'markAsExecuting',
		value: function markAsExecuting() {
			return _extends({}, this, {
				status: 'executing',
				error: null,
				isExecuting: true,
				isReady: false,
				isSuccessful: false
			});
		}
	}, {
		key: 'resolve',
		value: function resolve() {
			return _extends({}, this, {
				status: 'success',
				error: null,
				isExecuting: false,
				isReady: false,
				isSuccessful: true
			});
		}
	}, {
		key: 'reject',
		value: function reject(error) {
			return _extends({}, this, {
				status: 'error',
				error: error,
				isExecuting: false,
				isReady: false,
				isSuccessful: false
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			return _extends({}, this, {
				status: 'ready',
				error: null,
				isExecuting: false,
				isReady: true,
				isSuccessful: false
			});
		}
	}, {
		key: 'hasError',
		get: function get() {
			return this.status === 'error';
		}
	}]);

	return AsyncEvent;
}();

function createAsyncEvent() {
	return new AsyncEvent();
}

var event = createAsyncEvent();

console.log(event);

module.exports = createAsyncEvent;
