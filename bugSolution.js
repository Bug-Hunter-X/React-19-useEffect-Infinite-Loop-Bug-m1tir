```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; // Add a mounted flag

    if (mounted && count > 5) { // Check the mounted flag
      setCount(0);
    }

    return () => { // Cleanup function
      mounted = false; // Set mounted to false when the component unmounts or updates
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```