import React, { useState, useEffect } from 'react';

interface Certification {
  id: number;
  name: string;
  date: string;
}

interface CertificationsProps {
  certifications: Certification[];
  onUpdate: (updatedCerts: Certification[]) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ certifications, onUpdate }) => {
  const [certs, setCerts] = useState(certifications);

  useEffect(() => {
    setCerts(certifications);
  }, [certifications]);

  const handleAdd = () => {
    const newCert = { id: Date.now(), name: '', date: '' };
    setCerts([...certs, newCert]);
    onUpdate([...certs, newCert]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedCerts = [...certs];
    updatedCerts[index] = { ...updatedCerts[index], [field]: value };
    setCerts(updatedCerts);
    onUpdate(updatedCerts);
  };

  return (
    <div>
      <h2>Certifications</h2>
      {certs.map((cert, index) => (
        <div key={cert.id}>
          <input
            value={cert.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            placeholder="Certification Name"
          />
          <input
            value={cert.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
            placeholder="Date"
          />
        </div>
      ))}
      <button onClick={handleAdd}>Add Certification</button>
    </div>
  );
};

export default Certifications;