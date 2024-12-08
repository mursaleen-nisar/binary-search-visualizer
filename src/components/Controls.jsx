import React, { useState } from 'react';

const Controls = ({ setArray, setTarget }) => {
  const [size, setSize] = useState(10);
  const [targetValue, setTargetValue] = useState('');

  const generateArray = () => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
    setArray(newArray);
  };

  return (
    <div className="mb-8">
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Array Size"
        className="border p-2 mr-2"
        required
      />
      <button onClick={generateArray} className="bg-green-500 text-white p-2 mr-2">Generate Array</button>
      <input
        type="number"
        value={targetValue}
        onChange={(e) => setTargetValue(e.target.value)}
        placeholder="Target Value"
        className="border p-2 mr-2"
        required
      />
      <button onClick={() => setTarget(Number(targetValue))} className="bg-blue-500 text-white p-2">Set Target</button>
    </div>
  );
};

export default Controls;