import React, { useState, useEffect } from 'react';

interface SummaryProps {
  summary: string;
  onUpdate: (updatedSummary: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ summary, onUpdate }) => {
  console.log("Init summary: " + summary);
  const [currentSummary, setCurrentSummary] = useState(summary);
  console.log("Summary1: " + currentSummary)
  
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
      <p>{ currentSummary }</p>
      <textarea
        value={currentSummary}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Add your summary here"
      />
    </div>
  );
};

export default Summary;
