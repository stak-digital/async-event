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

	/**
	 * @returns {AsyncAction}
	 */
	markAsExecuting() {
		this.status = 'executing';
		this.error = null;
		this.isExecuting = true;
		this.isReady = false;
		this.isSuccessful = false;
	}

	/**
	 * @returns {AsyncAction}
	 */
	resolve() {
		this.status = 'success';
		this.error = null;
		this.isExecuting = false;
		this.isReady = false;
		this.isSuccessful = true;
	}

	/**
	 * @param {Error} error
	 * @returns {AsyncAction}
	 */
	reject(error) {
		this.status = 'errir';
		this.error = error;
		this.isExecuting = false;
		this.isReady = false;
		this.isSuccessful = false;
	}

	/**
	 * @returns {AsyncAction}
	 */
	reset() {
		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isReady = true;
		this.isSuccessful = false;
	}
}