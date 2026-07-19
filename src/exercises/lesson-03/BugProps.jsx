// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
// Lines 15-32 are all belonging to the BugProps component.
// Variable: message
// Function: handleChange
// returned JSX (<div>...</div>)

import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  let [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// Message was originally a regular Javascript variable, instead of React state. React did not track changes to it, so updating it did not re-render the component.  Using UseState and updating the state with setMessage allows React to re-render the component and display the updated greeting when the button is clicked.
