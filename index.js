'use strict';

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            this.status = 'executing';
            this.error = null;
            this.isExecuting = true;
            this.isReady = false;
            this.isSuccessful = false;
            return this;
        }
    }, {
        key: 'resolve',
        value: function resolve() {
            this.status = 'success';
            this.error = null;
            this.isExecuting = false;
            this.isReady = false;
            this.isSuccessful = true;
            return this;
        }
    }, {
        key: 'reject',
        value: function reject(error) {
            this.status = 'error';
            this.error = error;
            this.isExecuting = false;
            this.isReady = false;
            this.isSuccessful = false;
            return this;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.status = 'ready';
            this.error = null;
            this.isExecuting = false;
            this.isReady = true;
            this.isSuccessful = false;
            return this;
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

module.exports = createAsyncEvent;
