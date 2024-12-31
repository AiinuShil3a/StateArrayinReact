import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const handleAddOrUpdate = (newItem) => {
    setData((prevData) => {
      const existingIndex = prevData.findIndex(item => item.id === newItem.id);
      if (existingIndex !== -1) {
        // Update the rank if the ID exists
        const updatedData = [...prevData];
        updatedData[existingIndex] = {
          ...updatedData[existingIndex],
          rank: newItem.rank,
        };
        return updatedData;
      } else {
        // Add new item if ID does not exist
        return [...prevData, newItem];
      }
    });
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', data);
  };

  return (
    <div>
      <h1>Manage State with useState</h1>
      <button
        onClick={() => handleAddOrUpdate({ id: 1, key: 'A', rank: 1 })}
      >
        Add/Update ID 1
      </button>
      <button
        onClick={() => handleAddOrUpdate({ id: 2, key: 'B', rank: 2 })}
      >
        Add/Update ID 2
      </button>
      <button
        onClick={() => handleAddOrUpdate({ id: 1, key: 'A', rank: 3 })}
      >
        Update ID 1 (Change Rank)
      </button>
      <button
        onClick={() => handleAddOrUpdate({ id: 2, key: 'B', rank: 5 })}
      >
        Update ID 2 (Change Rank)
      </button>
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <h2>Current State</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
