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
| error | boolean or null | `null` |
| isExecuting | boolean | false |
| isSuccessful | boolean | false |
| isReady | boolean | true |
| hasError | boolean | false |

### Methods

`markAsExecuting`

```
status - 'executing'
error - null
isExecuting - true
isReady - false
isSuccessful - false
```

`resolve`

```
status - 'success'
error - null
isExecuting - false
isReady - false
isSuccessful - true
```

`reject`

Arguments

| Property | Type | Example |
| -------- | ---- | ------- |
| error | string | `'Internal Server Error'` |

```
status - 'success'
error - null
isExecuting - false
isReady - false
isSuccessful - true
```

`reset`

```
status - 'ready'
error - null
isExecuting - false
isReady - true
isSuccessful - false
```