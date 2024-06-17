import React, { useState } from 'react';

const Skills = ({ data, onAdd, onDelete }) => {
  const [skill, setSkill] = useState('');

  const handleAdd = () => {
    onAdd(skill);
    setSkill('');
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Skills</h3>
      {data.map((skill, index) => (
        <div key={index}>
          <p>{skill}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
      <button onClick={handleAdd}>Add Skill</button>
    </div>
  );
};

export default Skills;
