// @flow
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
export default class AsyncEvent {
	constructor() : AsyncEvent {
		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isSuccessful = false;
		this.isReady = true;
	}

	get hasError() : boolean {
		return this.status === 'error';
	}

	markAsExecuting() : AsyncEvent {
		return {
			...this,
			status: 'executing',
			error: null,
			isExecuting: true,
			isReady: false,
			isSuccessful: false
		};
	}

	resolve() : AsyncEvent {
		return {
			...this,
			status: 'success',
			error: null,
			isExecuting: false,
			isReady: false,
			isSuccessful: true
		};
	}

	reject(error : string) : AsyncEvent {
		return {
			...this,
			status: 'error',
			error: error,
			isExecuting: false,
			isReady: false,
			isSuccessful: false
		};
	}

	reset() : AsyncEvent {
		return {
			...this,
			status: 'ready',
			error: null,
			isExecuting: false,
			isReady: true,
			isSuccessful: false
		};
	}
}