// @flow
import AsyncEvent from './models/async-event.js';

/**
 *
 * @returns {AsyncEvent}
 */
export default function createAsyncEvent() : AsyncEvent {
	return new AsyncEvent();
}
