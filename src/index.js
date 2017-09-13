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
export default class AsyncEvent {
	constructor() {
		super();

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
		this.status = 'executing';
		this.error = null;
		this.isExecuting = true;
		this.isReady = false;
		this.isSuccessful = false;
	}

	resolve() {
		this.status = 'success';
		this.error = null;
		this.isExecuting = false;
		this.isReady = false;
		this.isSuccessful = true;
	}

	reject(error) {
		this.status = 'errir';
		this.error = error;
		this.isExecuting = false;
		this.isReady = false;
		this.isSuccessful = false;
	}

	reset() {
		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isReady = true;
		this.isSuccessful = false;
	}
}