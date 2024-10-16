import React, { useState, useEffect, useRef } from 'react';
import summaryStyles from './summary.module.css'

interface SummaryProps {
  summary: string;
  onUpdate: (updatedSummary: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ summary, onUpdate }) => {
  const [currentSummary, setCurrentSummary] = useState(summary);
  
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
      <textarea className={summaryStyles.text_input} 
        value={currentSummary} 
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Summary;
