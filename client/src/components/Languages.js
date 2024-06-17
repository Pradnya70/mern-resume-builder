import React, { useState } from 'react';

const Languages = ({ data, onAdd, onDelete }) => {
  const [language, setLanguage] = useState('');

  const handleAdd = () => {
    onAdd(language);
    setLanguage('');
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h3>Languages</h3>
      {data.map((language, index) => (
        <div key={index}>
          <p>{language}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
      <button onClick={handleAdd}>Add Language</button>
    </div>
  );
};

export default Languages;
