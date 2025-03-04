import { useState } from "react";
import "./UseState.css";

function UseState() {
  // Theme State
  const [theme, setTheme] = useState("light");
  
  // Counter State
  const [count, setCount] = useState(0);

  // Toggle Theme Handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Hook Practice</h1>

      {/* Toggle Theme Button */}
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Counter Section */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  );
}

export default UseState;
