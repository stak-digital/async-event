'use strict';

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, '__esModule', { value: true });

var AsyncEvent = function () {
    function AsyncEvent(_ref) {
        var status = _ref.status,
            errorMessage = _ref.errorMessage;

        _classCallCheck(this, AsyncEvent);

        this.status = status;
        this.errorMessage = errorMessage;
    }

    _createClass(AsyncEvent, [{
        key: 'markAsExecuting',
        value: function markAsExecuting() {
            return new AsyncEvent({
                status: 'executing',
                errorMessage: null
            });
        }
    }, {
        key: 'resolve',
        value: function resolve() {
            return new AsyncEvent({
                status: 'success',
                errorMessage: null
            });
        }
    }, {
        key: 'reject',
        value: function reject(error) {
            return new AsyncEvent({
                status: 'error',
                errorMessage: error
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            return new AsyncEvent({
                status: 'ready',
                errorMessage: null
            });
        }
    }, {
        key: 'isReady',
        get: function get() {
            return this.status === 'ready';
        }
    }, {
        key: 'hasError',
        get: function get() {
            return this.status === 'error';
        }
    }, {
        key: 'isExecuting',
        get: function get() {
            return this.status === 'executing';
        }
    }, {
        key: 'isSuccessful',
        get: function get() {
            return this.status === 'success';
        }
    }]);

    return AsyncEvent;
}();

function createAsyncEvent() {
    return new AsyncEvent({
        status: 'ready',
        errorMessage: null
    });
}

exports['default'] = createAsyncEvent;
exports.AsyncEvent = AsyncEvent;
