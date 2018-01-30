import AsyncEvent from './models/async-event';

/**
 *
 * @returns {AsyncEvent}
 */
export default function createAsyncEvent() : AsyncEvent {
	return new AsyncEvent();
}
