import React, { useEffect, useState } from 'react';

const BinarySearch = ({ array, target, setCurrentStep, setStart, setMid, setEnd, setDiscarded, setResultMessage }) => {
  useEffect(() => {
    if (array.length > 0 && target !== null) {
      binarySearch(array, target);
    }
  }, [array, target]);

  const binarySearch = async (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    setDiscarded([]);
    setResultMessage(''); // Clear previous result message

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      setStart(start);
      setMid(mid);
      setEnd(end);
      setCurrentStep(mid);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause for visualization

      if (arr[mid] === target) {
        setCurrentStep(null); // Clear the current step after finding the target
        setResultMessage(`Target found at index ${mid}`);
        return mid;
      } else if (arr[mid] < target) {
        const newDiscarded = Array.from({ length: mid - start + 1 }, (_, i) => start + i);
        setDiscarded((prev) => [...prev, ...newDiscarded]);
        start = mid + 1;
      } else {
        const newDiscarded = Array.from({ length: end - mid + 1 }, (_, i) => mid + i);
        setDiscarded((prev) => [...prev, ...newDiscarded]);
        end = mid - 1;
      }
    }

    setCurrentStep(null); // Clear the current step if target is not found
    setResultMessage('Target not found');
    return -1;
  };

  return null;
};

export default BinarySearch;