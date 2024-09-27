'use client';

import { useEffect, useState } from 'react';
import Certifications from '../components/editor/cv_sections/Certifications';
import Skills from '../components/editor/cv_sections/Skills';
import Summary from '../components/editor/cv_sections/Summary';
import EditPageStyles from './edit.module.css';

export default function EditPage() {
  const [sections, setSections] = useState({
    summary: '',
    skills: [] as string[],
    certifications: [] as { id: number; name: string; date: string }[],
  });

  // Fetch initial data
  useEffect(() => {
    async function fetchSections() {
      let response = await fetch('/api/sections');
      let data = await response.json();
      console.log("data", data);
      setSections(data.sections);
    };
    fetchSections();
  }, []);

  // Save updated data to the server
  const saveSections = async () => {
    await fetch('/api/sections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sections),
    });
  };

  console.log(sections.summary);

  return (
    <div className={EditPageStyles.page}>
      <h1>Edit Your CV</h1>

      <Summary
        summary={sections.summary}
        onUpdate={(updatedSummary) =>
          setSections({ ...sections, summary: updatedSummary })
        }
      />
      <Skills
        skills={sections.skills}
        onUpdate={(updatedSkills) => setSections({ ...sections, skills: updatedSkills })}
      />
      <Certifications
        certifications={sections.certifications}
        onUpdate={(updatedCerts) =>
          setSections({ ...sections, certifications: updatedCerts })
        }
      />

      <button onClick={saveSections}>Save</button>
    </div>
  );
};
