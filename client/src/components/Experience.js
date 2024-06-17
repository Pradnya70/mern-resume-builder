import React, { useState } from 'react';

const Experience = ({ data, onAdd, onUpdate, onDelete }) => {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    onAdd({ company, role, duration, description });
    setCompany('');
    setRole('');
    setDuration('');
    setDescription('');
  };

  const handleUpdate = (index) => {
    onUpdate(index, { company, role, duration, description });
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Experience</h3>
      {data.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Role: {exp.role}</p>
          <p>Duration: {exp.duration}</p>
          <p>Description: {exp.description}</p>
          <button onClick={() => handleUpdate(index)}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAdd}>Add Experience</button>
    </div>
  );
};

export default Experience;
