'use strict';

'use strict';

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
        this.status = 'ready';
        this.error = null;
        this.isExecuting = false;
        this.isSuccessful = false;
        this.isReady = true;
    }
    Object.defineProperty(AsyncEvent.prototype, "hasError", {
        get: function get() {
            return this.status === 'error';
        },
        enumerable: true,
        configurable: true
    });
    AsyncEvent.prototype.markAsExecuting = function () {
        this.status = 'executing';
        this.error = null;
        this.isExecuting = true;
        this.isReady = false;
        this.isSuccessful = false;
        return this;
    };
    AsyncEvent.prototype.resolve = function () {
        this.status = 'success';
        this.error = null;
        this.isExecuting = false;
        this.isReady = false;
        this.isSuccessful = true;
        return this;
    };
    AsyncEvent.prototype.reject = function (error) {
        this.status = 'error';
        this.error = error;
        this.isExecuting = false;
        this.isReady = false;
        this.isSuccessful = false;
        return this;
    };
    AsyncEvent.prototype.reset = function () {
        this.status = 'ready';
        this.error = null;
        this.isExecuting = false;
        this.isReady = true;
        this.isSuccessful = false;
        return this;
    };
    return AsyncEvent;
}();

/**
 *
 * @returns {AsyncEvent}
 */
function createAsyncEvent() {
    return new AsyncEvent();
}

module.exports = createAsyncEvent;
