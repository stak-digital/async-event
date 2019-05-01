# async-event 
[![Build Status](https://travis-ci.org/stak-digital/async-event.svg?branch=master)](https://travis-ci.org/stak-digital/async-event) [![codecov](https://codecov.io/gh/stak-digital/async-event/branch/master/graph/badge.svg)](https://codecov.io/gh/stak-digital/async-event)

An immutable micro-library for state management of async events

## Usage

```javascript
import createAsyncEvent from '@stak-digital/async-event';

const apiRequest = createAsyncEvent();

async function apiCall() {
    apiRequest.markAsExecuting();
    
    try {
        await fetch('/some-url')
    
        apiRequest.resolve();
    } catch (e) {
        apiRequest.reject(e);
    }
}
```

This unlocks the ability to easily manage loading/loaded states in your view.

React:
```jsx
class App extends React.Component() {
    constructor() {
        super();
        
        this.state = {
            apiRequestEvent: createAsyncEvent()
        };
    }
    
    async handleButtonClicked() {
        this.setState({
            apiRequestEvent: this.state.apiRequestEvent.markAsExecuting()
        });
            
        try {
            await fetch('/some-url')
        
            this.setState({
                apiRequestEvent: this.state.apiRequestEvent.resolve()
            });
        } catch (e) {
            this.setState({
                apiRequestEvent: this.state.apiRequestEvent.reject(e)
            });
        }
    }
    
    render() {
        return (
            <div>
                {this.state.apiRequestEvent.isExecuting && (
                    <Spinner />
                )}
                {this.state.apiRequestEvent.hasError && (
                    <span>
                        Something went wrong!
                    </span>
                )}
                
                <button 
                    onClick={this.handleButtonClicked} 
                    disabled={this.state.apiRequestEvent.isExecuting}
                >
                    Click me for magic
                </button>
            </div>	
        );
    }
}
```

## API

### createAsyncEvent
```
import createAsyncEvent
```

### Returns

AsyncEvent

### Properties

| Property | Type | Default |
| -------- | ---- | ------- |
| status | string | `'ready'` |
| errorMessage | boolean or null | `null` |
| isExecuting | boolean | false |
| isSuccessful | boolean | false |
| isReady | boolean | true |
| hasError | boolean | false |

### Methods

`markAsExecuting`

```
status - 'executing'
errorMessage - null
isExecuting - true
hasError - false
isReady - false
isSuccessful - false
```

`resolve`

```
status - 'success'
errorMessage - null
isExecuting - false
hasError - false
isReady - false
isSuccessful - true
```

`reject`

Arguments

| Property | Type | Example |
| -------- | ---- | ------- |
| errorMessage | string | `'Internal Server Error'` |

```
status - 'success'
errorMessage - null
isExecuting - false
hasError - true
isReady - false
isSuccessful - true
```

`reset`

```
status - 'ready'
errorMessage - null
isExecuting - false
hasError - false
isReady - true
isSuccessful - false
```