import expect from 'expect';
import createAsyncEvent from '../src';
import AsyncEvent from '../src/models/async-event';

describe('createAsyncEvent', () => {

	test('it should exist', () => {

		expect(
			createAsyncEvent
		).toExist();

	});

	test('it should return an AsyncEvent', () => {

		expect(
			createAsyncEvent()
		).toBeA(AsyncEvent);

	});

	test('it should return the correct initial state', () => {
		const event = createAsyncEvent();

		expect(
			event.status
		).toBe('ready');

		expect(
			event.error
		).toBe(null);
		expect(
			event.isExecuting
		).toBe(false);
		expect(
			event.isSuccessful
		).toBe(false);
		expect(
			event.isReady
		).toBe(true);

	});

	test('it should set to executing correctly', () => {
		const event = createAsyncEvent().markAsExecuting();

		expect(
			event.status
		).toBe('executing');

		expect(
			event.error
		).toBe(null);
		expect(
			event.isExecuting
		).toBe(true);
		expect(
			event.isSuccessful
		).toBe(false);
		expect(
			event.isReady
		).toBe(false);

	});

	test('it should resolve correctly', () => {
		const event = createAsyncEvent().resolve();

		expect(
			event.status
		).toBe('success');

		expect(
			event.error
		).toBe(null);
		expect(
			event.isExecuting
		).toBe(false);
		expect(
			event.isSuccessful
		).toBe(true);
		expect(
			event.isReady
		).toBe(false);

	});

	test('it should reject correctly', () => {
		const event = createAsyncEvent().reject('e');

		expect(
			event.status
		).toBe('error');

		expect(
			event.error
		).toBe('e');

		expect(
			event.isExecuting
		).toBe(false);

		expect(
			event.isSuccessful
		).toBe(false);

		expect(
			event.isReady
		).toBe(false);

	});

	test('reset should return the initial state', () => {
		const event = createAsyncEvent().reset();

		expect(
			event.status
		).toBe('ready');

		expect(
			event.error
		).toBe(null);
		expect(
			event.isExecuting
		).toBe(false);
		expect(
			event.isSuccessful
		).toBe(false);
		expect(
			event.isReady
		).toBe(true);

	});

	// test('if it has an error, hasError should return true', () => {
	// 	const event = createAsyncEvent().reject('e');
	//
	// 	expect(
	// 		event.hasError
	// 	).toBe(true);
	// });
	//
	// test('if it has no error, hasError should return false', () => {
	// 	const event = createAsyncEvent();
	// 	console.log(event.hasError);
	//
	//
	// 	expect(
	// 		event.hasError
	// 	).toBe(false);
	// });

});

