## Usage

```javascript
import AsyncEvent from '@stak-digital/async-event';

const apiRequest = new AsyncEvent;

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

## API

### AsyncEvent
```
new AsyncEvent;
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