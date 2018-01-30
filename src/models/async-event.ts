interface IAsyncEvent {
    status: string
    error?: string
    isExecuting: boolean
    isSuccessful: boolean
    isReady: boolean
    markAsExecuting: () => any
    resolve: () => any
    reject: (error: string) => any
    reset: () => any
}

export default class AsyncEvent implements IAsyncEvent {
    status: string;
    error?: string;
    isExecuting: boolean;
    isSuccessful: boolean;
    isReady: boolean;

	constructor() {
		this.status = 'ready';
		this.error = null;
		this.isExecuting = false;
		this.isSuccessful = false;
		this.isReady = true;
	}

	get hasError() : boolean {
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

	reject(error : string) {
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