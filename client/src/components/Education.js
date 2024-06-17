import React, { useState } from 'react';

const Education = ({ data, onAdd, onUpdate, onDelete }) => {
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');

  const handleAdd = () => {
    onAdd({ institution, degree, year });
    setInstitution('');
    setDegree('');
    setYear('');
  };

  const handleUpdate = (index) => {
    onUpdate(index, { institution, degree, year });
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Education</h3>
      {data.map((edu, index) => (
        <div key={index}>
          <p>Institution: {edu.institution}</p>
          <p>Degree: {edu.degree}</p>
          <p>Year: {edu.year}</p>
          <button onClick={() => handleUpdate(index)}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
      <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={handleAdd}>Add Education</button>
    </div>
  );
};

export default Education;
