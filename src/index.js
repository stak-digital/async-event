'use strict';

class AsyncEvent {
    constructor() {
        this.status = 'ready';
        this.error = null;
        this.isExecuting = false;
        this.isSuccessful = false;
        this.isReady = true;
    }
    get hasError() {
        return this.status === 'error';
    }
    markAsExecuting() {
        this.status = 'executing';
        this.error = null;
        this.isExecuting = true;
        this.isReady = false;
        this.isSuccessful = false;
        return this;
    }
    resolve() {
        this.status = 'success';
        this.error = null;
        this.isExecuting = false;
        this.isReady = false;
        this.isSuccessful = true;
        return this;
    }
    reject(error) {
        this.status = 'error';
        this.error = error;
        this.isExecuting = false;
        this.isReady = false;
        this.isSuccessful = false;
        return this;
    }
    reset() {
        this.status = 'ready';
        this.error = null;
        this.isExecuting = false;
        this.isReady = true;
        this.isSuccessful = false;
        return this;
    }
}

function createAsyncEvent() {
    return new AsyncEvent();
}

module.exports = createAsyncEvent;
