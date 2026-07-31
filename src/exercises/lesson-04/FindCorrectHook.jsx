import { useState } from 'react';
// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0); // ← incorrect implementation

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
