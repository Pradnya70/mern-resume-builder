import React, { useState } from 'react';

const PersonalInfo = ({ onChange }) => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '', address: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = { ...info, [name]: value };
    setInfo(updatedInfo);
    onChange(updatedInfo);
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <input type="text" name="name" placeholder="Name" value={info.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={info.address} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={info.description} onChange={handleChange} />
    </div>
  );
};

export default PersonalInfo;
