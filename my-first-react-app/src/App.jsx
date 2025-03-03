/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import { useState, useEffect } from 'react';

function App() {
  // State for counter
  const [count, setCount] = useState(0);

  // State for user input (name & age)
  const [user, setUser] = useState({ name: '', age: '' });

  // State for list of users
  const [users, setUsers] = useState([]);

  // useEffect: Runs when component mounts (simulating API fetch)
  useEffect(() => {
    console.log("App mounted! Fetching users...");
    setUsers([
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 }
    ]);
  }, []);

  return (
    <>
      <h1>React State Management</h1>

      {/* Counter */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>

      {/* User Input */}
      <div>
        <h2>Enter Your Details</h2>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={user.name} 
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Enter your age" 
          value={user.age} 
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        {user.name && user.age && (
          <p>Hello {user.name}, you are {user.age} years old.</p>
        )}
      </div>

      {/* List of Users */}
      <div>
        <h2>Users List</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.age} years old</li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </>
  );
}

export default App;

