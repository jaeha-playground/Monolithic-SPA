import React, { useState } from 'react';
import '../App.css';

function Button() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
}

export default Button;
