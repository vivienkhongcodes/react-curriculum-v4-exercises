import { useRef } from 'react';
// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  // Create a ref that will later point to the input.element
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
