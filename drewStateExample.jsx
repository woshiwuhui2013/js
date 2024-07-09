import React, { useState } from 'react';
import { Mermaid } from "mermaid";

const StateMachineFlowchart = () => {
  const [states, setStates] = useState([
    { id: 'A', type: 'initial' },
    { id: 'B', type: 'normal' },
    { id: 'C', type: 'final' }
  ]);

  const [newStateId, setNewStateId] = useState('');
  const [newStateType, setNewStateType] = useState('normal');

  const addState = () => {
    if (newStateId) {
      setStates([...states, { id: newStateId, type: newStateType }]);
      setNewStateId('');
    }
  };

  const generateMermaidDiagram = () => {
    let diagram = 'graph LR\n';
    states.forEach((state, index) => {
      if (index < states.length - 1) {
        diagram += `${state.id} --> ${states[index + 1].id}\n`;
      }
      if (state.type === 'initial') {
        diagram += `style ${state.id} fill:#5d9, stroke:#333, stroke-width:2px\n`;
      } else if (state.type === 'final') {
        diagram += `style ${state.id} fill:#f9d, stroke:#333, stroke-width:2px\n`;
      }
    });
    return diagram;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">State Machine Flowchart</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newStateId}
          onChange={(e) => setNewStateId(e.target.value)}
          placeholder="Enter new state ID"
          className="mr-2 p-2 border rounded"
        />
        <select
          value={newStateType}
          onChange={(e) => setNewStateType(e.target.value)}
          className="mr-2 p-2 border rounded"
        >
          <option value="normal">Normal</option>
          <option value="initial">Initial</option>
          <option value="final">Final</option>
        </select>
        <button onClick={addState} className="p-2 bg-blue-500 text-white rounded">
          Add State
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Current States:</h3>
        <ul>
          {states.map((state, index) => (
            <li key={index}>{`${state.id} (${state.type})`}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Mermaid chart={generateMermaidDiagram()} />
      </div>
    </div>
  );
};

export default StateMachineFlowchart;