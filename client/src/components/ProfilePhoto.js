import React, { useState } from 'react';

const ProfilePhoto = ({ onChange }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    onChange(file);
  };

  return (
    <div>
      <h3>Profile Photo</h3>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={URL.createObjectURL(photo)} alt="Profile" style={{ width: '100px', height: '100px' }} />}
    </div>
  );
};

export default ProfilePhoto;
