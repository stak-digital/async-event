export interface IAsyncEvent {
    status: string
    error?: string
    isExecuting: boolean
    isSuccessful: boolean
    isReady: boolean,
    markAsExecuting: () => IAsyncEvent
    resolve: () => IAsyncEvent
	reject: (error : string) => IAsyncEvent
    reset: () => IAsyncEvent
}

export default function createAsyncEvent() : IAsyncEvent {
	return {
		status: 'ready',
		error: null,
		isExecuting: false,
		isSuccessful: false,
		isReady: true,
        markAsExecuting() {
            return {
				...this,
                status: 'executing',
                isExecuting: true,
                isReady: false
            };
        },
		resolve() {
            return {
				...this,
                status: 'success',
                error: null,
                isExecuting: false,
                isReady: false,
                isSuccessful: true
            };
        },
		reject(error : string) {
            return {
				...this,
                status: 'error',
                error: error,
                isExecuting: false,
                isReady: false,
                isSuccessful: false
            };
        },
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
    };
}
