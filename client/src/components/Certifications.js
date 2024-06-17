import React, { useState } from 'react';

const Certifications = ({ data, onAdd, onUpdate, onDelete }) => {
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');

  const handleAdd = () => {
    onAdd({ name, issuer });
    setName('');
    setIssuer('');
  };

  const handleUpdate = (index) => {
    onUpdate(index, { name, issuer });
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Certifications</h3>
      {data.map((cert, index) => (
        <div key={index}>
          <p>Name: {cert.name}</p>
          <p>Issuer: {cert.issuer}</p>
          <button onClick={() => handleUpdate(index)}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Issuer" value={issuer} onChange={(e) => setIssuer(e.target.value)} />
      <button onClick={handleAdd}>Add Certification</button>
    </div>
  );
};

export default Certifications;
