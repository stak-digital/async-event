'use strict';

'use strict';

function createAsyncEvent() {
    return {
        status: 'ready',
        error: null,
        isExecuting: false,
        isSuccessful: false,
        isReady: true,
        markAsExecuting: function markAsExecuting() {
            return Object.assign({}, this, { status: 'executing', isExecuting: true, isReady: false });
        },
        resolve: function resolve() {
            return Object.assign({}, this, { status: 'success', error: null, isExecuting: false, isReady: false, isSuccessful: true });
        },
        reject: function reject(error) {
            return Object.assign({}, this, { status: 'error', error: error, isExecuting: false, isReady: false, isSuccessful: false });
        },
        reset: function reset() {
            return Object.assign({}, this, { status: 'ready', error: null, isExecuting: false, isReady: true, isSuccessful: false });
        }
    };
}

module.exports = createAsyncEvent;
