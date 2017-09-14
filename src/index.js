/**
 * @typedef {AsyncEvent} AsyncEvent
 * @property {string} status
 * @property {boolean|null} error
 * @property {boolean} isExecuting
 * @property {boolean} isSuccessful
 * @property {boolean} isReady
 */

/**
 * @returns AsyncAction
 */
class AsyncEvent {
	constructor() {
		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isSuccessful = false;
		this.isReady = true;
	}

	get hasError() {
		return this.error === true;
	}

	markAsExecuting() {
		return {
			...this,
			status: 'executing',
			error: null,
			isExecuting: true,
			isReady: false,
			isSuccessful: false
		};
	}

	resolve() {
		return {
			...this,
			status: 'success',
			error: null,
			isExecuting: false,
			isReady: false,
			isSuccessful: true
		};
	}

	reject(error) {
		return {
			...this,
			status: 'error',
			error: error,
			isExecuting: false,
			isReady: false,
			isSuccessful: false
		};
	}

	reset() {
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

export default function() {
	return new AsyncEvent();
}