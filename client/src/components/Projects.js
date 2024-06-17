import React, { useState } from 'react';

const Projects = ({ data, onAdd, onUpdate, onDelete }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  const handleUpdate = (index) => {
    onUpdate(index, { title, description });
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Projects</h3>
      {data.map((proj, index) => (
        <div key={index}>
          <p>Title: {proj.title}</p>
          <p>Description: {proj.description}</p>
          <button onClick={() => handleUpdate(index)}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAdd}>Add Project</button>
    </div>
  );
};

export default Projects;
