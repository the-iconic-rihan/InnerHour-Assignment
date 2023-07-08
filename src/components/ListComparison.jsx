import React, { useState } from 'react';
import '../styles/ListComparison.css'
const ListComparison = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState(null);

  const computeDifferences = () => {
    const arrayA = listA.split(',').map(item => item.trim());
    const arrayB = listB.split(',').map(item => item.trim());

    const uniqueToA = arrayA.filter(item => !arrayB.includes(item));
    const uniqueToB = arrayB.filter(item => !arrayA.includes(item));
    const commonItems = arrayA.filter(item => arrayB.includes(item));
    const combinedItems = [...new Set([...arrayA, ...arrayB])];

    setResult({
      uniqueToA,
      uniqueToB,
      commonItems,
      combinedItems
    });
  };

  return (
    <div className="list-comparison-container">
      <h2>Compare Lists A and B</h2>
      <div className="list-inputs">
        <div className="list-input">
          <label>List A:</label>
          <input type="text" value={listA} onChange={e => setListA(e.target.value)} />
        </div>
        <div className="list-input">
          <label>List B:</label>
          <input type="text" value={listB} onChange={e => setListB(e.target.value)} />
        </div>
      </div>
      <button className="compute-button" onClick={computeDifferences}>Compute</button>

      {result && (
        <div className="result-container">
          <h3>Results:</h3>
          <p>Items present only in A: {result.uniqueToA.join(', ')}</p>
          <p>Items present only in B: {result.uniqueToB.join(', ')}</p>
          <p>Items present in both A and B: {result.commonItems.join(', ')}</p>
          <p>Items combining both A and B (unique): {result.combinedItems.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ListComparison;
