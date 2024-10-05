import React, { useState, useEffect } from 'react';
import summaryStyles from './summary.module.css'

interface SummaryProps {
  summary: string;
  onUpdate: (updatedSummary: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ summary, onUpdate }) => {

  const [currentSummary, setCurrentSummary] = useState(summary);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    setCurrentSummary(summary);
  }, [summary]);

  const handleChange = (value: string) => {
    setCurrentSummary(value);
    onUpdate(value);
  };

  console.log("Summary2: " + currentSummary)
  return (
    <div>
      <h2>Summary</h2>
      {isEditing ? 
      <div>
        <textarea className="text-input" 
          value={currentSummary} 
          onChange={(e) => handleChange(e.target.value)} 
          onDoubleClick={() => setCurrentSummary('')} />
          <button onClick={() => 
          setIsEditing(false)}>
            Save
          </button>
      </div> : <p onClick={() => setIsEditing(true)}>{currentSummary}</p>}
    </div>
  );
};

export default Summary;
