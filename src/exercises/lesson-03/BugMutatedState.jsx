// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    // remove count++;
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The state variable was being changed directly by count, so React wasn't being notified correctly. Using setCount(count + 1) updates the state through React, which triggers a re-render.
