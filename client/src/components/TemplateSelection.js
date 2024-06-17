import React, { useState } from 'react';

const TemplateSelection = ({ onChange }) => {
  const [template, setTemplate] = useState({ font: 'Arial', color: '#000000' });

  const handleFontChange = (e) => {
    const newTemplate = { ...template, font: e.target.value };
    setTemplate(newTemplate);
    onChange(newTemplate);
  };

  const handleColorChange = (e) => {
    const newTemplate = { ...template, color: e.target.value };
    setTemplate(newTemplate);
    onChange(newTemplate);
  };

  return (
    <div>
      <h3>Template Selection</h3>
      <div>
        <label>Font: </label>
        <select value={template.font} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div>
        <label>Color: </label>
        <input type="color" value={template.color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default TemplateSelection;
