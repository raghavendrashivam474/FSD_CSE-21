import React, { useState } from 'react';
import UserProfile from './components/UserProfile.jsx'; // Make sure the path matches your file structure

function App() {
  const [activeId, setActiveId] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>UseEffect App</h1>
      
      {/* Buttons to switch between different user IDs */}
      <button onClick={() => setActiveId(1)}>Load User 1</button>
      <button onClick={() => setActiveId(2)}>Load User 2</button>
      <button onClick={() => setActiveId(3)}>Load User 3</button>
      <button onClick={() => setActiveId(4)}>Load User 4</button>
      <button onClick={() => setActiveId(5)}>Load User 5</button>
      {/* Passing the activeId state down as the userId prop */}
      <UserProfile userId={activeId} />
    </div>
  );
}

export default App;