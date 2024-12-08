import React, { useEffect, useState } from 'react';
import Array from './components/Array';
import Controls from './components/Controls';
import BinarySearch from './components/BinarySearch';
import ColorRepresent from './components/ColorRepresent';

const App = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  const [start, setStart] = useState(null);
  const [mid, setMid] = useState(null);
  const [end, setEnd] = useState(null);
  const [discarded, setDiscarded] = useState([]);
  const [resultMessage, setResultMessage] = useState('');
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Binary Search Visualizer</h1>
      <Array array={array} start={start} mid={mid} end={end} discarded={discarded} />
      <ColorRepresent />
      <Controls setArray={setArray} setTarget={setTarget} />
      <BinarySearch
        array={array}
        target={target}
        setCurrentStep={setCurrentStep}
        setStart={setStart}
        setMid={setMid}
        setEnd={setEnd}
        setDiscarded={setDiscarded}
        setResultMessage={setResultMessage}
      />
      {resultMessage && <div className="text-xl bg-zinc-200 py-2 px-4 rounded-md">{resultMessage}</div>}
    </div>
  );
};

export default App;