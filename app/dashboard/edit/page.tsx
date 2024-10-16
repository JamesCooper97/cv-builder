'use client';

import { useEffect, useState } from 'react';
import Certifications from '../components/editor/cv_sections/Certifications';
import Skills from '../components/editor/cv_sections/Skills';
import Summary from '../components/editor/cv_sections/Summary/Summary';
import Name from '../components/editor/cv_sections/Contact/Name';
import EditPageStyles from './edit.module.css';
import { DraggableCore } from 'react-draggable';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Poppins } from 'next/font/google';


export default function EditPage() {
  const [sections, setSections] = useState({
    name: 'Enter Name',
    summary: 'Enter Summary Here',
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
    <TransformWrapper 
      panning={{excluded: ["textarea", "input", "h1", "h2", "h3", "p"]}}
      initialScale={0.9}
      minScale={0.5}
      initialPositionX={200}
      initialPositionY={100}
      limitToBounds={false}
      maxPositionX={5}
      doubleClick={{disabled: true}}
    >
      <TransformComponent
        wrapperStyle={{
          width: "100%",
          height: "100%",
        }}>
         <div className='width=100%'>
          {/* <DraggableCore 
            enableUserSelectHack={false}
            > */}
            <div className={EditPageStyles.page}>
              <Name 
                name={sections.name}
                onUpdate={(updatedName) =>
                  setSections({ ...sections, name: updatedName})
                }
              />
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
              <button onClick={saveSections}>Save All</button>
            </div>
            
          {/* </DraggableCore> */}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};