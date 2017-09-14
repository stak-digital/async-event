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
	
});

