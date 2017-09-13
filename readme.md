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