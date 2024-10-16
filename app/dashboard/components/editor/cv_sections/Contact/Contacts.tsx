import { useRef } from "react";
import contactStyles from './contact.module.css'

interface ContactProps {
    contact: object;
    onUpdate: (updatedName: string) => void;
  }
  
const Contact: React.FC<ContactProps> = ({ contact, onUpdate }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    
    const handleBlur = () => {
      if (contentRef.current) {
        const updatedName = contentRef.current.innerText;
        //setCurrentName(updatedName)
        onUpdate(updatedName); // Trigger the parent update
      }
    };
  
    return (
        <div className={contactStyles.contacts_container}>
            <h1
              ref={contentRef}
              contentEditable="true"
              onBlur={handleBlur}
              suppressContentEditableWarning={true}
            ></h1>
        </div>
    );
  };
  
  export default Contact;