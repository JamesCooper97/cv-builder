import React, { useState, useEffect } from 'react';

interface SkillsProps {
  skills: string[];
  onUpdate: (updatedSkills: string[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, onUpdate }) => {
  const [currentSkills, setCurrentSkills] = useState(skills);

  useEffect(() => {
    setCurrentSkills(skills);
  }, [skills]);

  const handleAdd = () => {
    setCurrentSkills([...currentSkills, '']);
    onUpdate([...currentSkills, '']);
  };

  const handleChange = (index: number, value: string) => {
    const updatedSkills = [...currentSkills];
    updatedSkills[index] = value;
    setCurrentSkills(updatedSkills);
    onUpdate(updatedSkills);
  };

  return (
    <div>
      <h2>Skills</h2>
      {currentSkills.map((skill, index) => (
        <input
          key={index}
          value={skill}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder="Skill"
        />
      ))}
      <button onClick={handleAdd}>Add Skill</button>
    </div>
  );
};

export default Skills;
