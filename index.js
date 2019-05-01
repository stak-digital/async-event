'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class AsyncEvent {
    constructor({ status, errorMessage }) {
        this.status = status;
        this.errorMessage = errorMessage;
    }
    markAsExecuting() {
        return new AsyncEvent({
            status: 'executing',
            errorMessage: null
        });
    }
    resolve() {
        return new AsyncEvent({
            status: 'success',
            errorMessage: null
        });
    }
    reject(error) {
        return new AsyncEvent({
            status: 'error',
            errorMessage: error
        });
    }
    reset() {
        return new AsyncEvent({
            status: 'ready',
            errorMessage: null
        });
    }
    get isReady() {
        return this.status === 'ready';
    }
    get hasError() {
        return this.status === 'error';
    }
    get isExecuting() {
        return this.status === 'executing';
    }
    get isSuccessful() {
        return this.status === 'success';
    }
}
function createAsyncEvent() {
    return new AsyncEvent({
        status: 'ready',
        errorMessage: null
    });
}

exports['default'] = createAsyncEvent;
exports.AsyncEvent = AsyncEvent;
