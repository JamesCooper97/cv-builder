import { useEffect, useRef, useState } from "react";
import contactStyles from './contact.module.css'

interface NameProps {
    name: string;
    onUpdate: (updatedName: string) => void;
  }
  
const Name: React.FC<NameProps> = ({ name, onUpdate }) => {
    const [currentName, setCurrentName] = useState(name);
    const contentRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   setCurrentName(currentName);
    // }, [currentName]);
    
    const handleBlur = () => {
      if (contentRef.current) {
        const updatedName = contentRef.current.innerText;
        //setCurrentName(updatedName)
        onUpdate(updatedName); // Trigger the parent update
      }
    };
  
    return (
      <div>
        <div className={contactStyles.Name}>
            <h1
              ref={contentRef}
              contentEditable="true"
              onBlur={handleBlur}
              suppressContentEditableWarning={true}
            >{name}</h1>
        </div>
      </div>
    );
  };
  
  export default Name;