interface IAsyncEvent {
    status: string
    error?: string
    isExecuting: boolean
    isSuccessful: boolean
    isReady: boolean
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

	toJs() : Partial<IAsyncEvent> {
		return {
            status: this.status,
			error: this.error,
			isExecuting: this.isExecuting,
			isSuccessful: this.isSuccessful,
			isReady: this.isReady,
			hasError: this.hasError,

		};
	}

	get hasError() : boolean {
		return this.status === 'error';
	}

	markAsExecuting() {
		return {
			...this.toJs(),
			status: 'executing',
			isExecuting: true,
			isReady: false
		};
	}

	resolve() {
		return {
			...this.toJs(),
			status: 'success',
			error: null,
			isExecuting: false,
			isReady: false,
			isSuccessful: true
		};
	}

	reject(error : string) {
		return {
			...this.toJs(),
            status: 'error',
            error: error,
            isExecuting: false,
            isReady: false,
            isSuccessful: false
		};
	}

	reset() {
		return {
			...this.toJs(),
            status: 'ready',
			error: null,
			isExecuting: false,
			isReady: true,
			isSuccessful: false
		};
	}
}