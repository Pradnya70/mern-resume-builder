<div id="resumePreview" className="preview-container" style={{ fontFamily: template.font, color: template.color }}>
        <div className="resume-section">
          <h3><b>Personal Information</b></h3>
          <p>Name: {personalInfo.name}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <p>Address: {personalInfo.address}</p>
          <p>Description: {personalInfo.description}</p>
        </div>

        {profilePhoto && (
          <div className="resume-section">
            <h3><b>Profile Photo</b></h3>
            <img src={URL.createObjectURL(profilePhoto)} alt="Profile" style={{ width: '100px', height: '100px' }} />
          </div>
        )}

        <div className="resume-section">
          <h3><b>Experience</b></h3>
          {experience.map((exp, index) => (
            <div key={index}>
              <p>Company: {exp.company}</p>
              <p>Role: {exp.role}</p>
              <p>Duration: {exp.duration}</p>
              <p>Description: {exp.description}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3><b>Projects</b></h3>
          {projects.map((proj, index) => (
            <div key={index}>
              <p>Title: {proj.title}</p>
              <p>Description: {proj.description}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3><b>Certifications</b></h3>
          {certifications.map((cert, index) => (
            <div key={index}>
              <p>Name: {cert.name}</p>
              <p>Issuer: {cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
        <Education
        data={education}
        onChange={setEducation}
        onAdd={addEducation}
        onUpdate={updateEducation}
        onDelete={deleteEducation}
      />
          <h3><b>Education</b></h3>
          {education.map((edu, index) => (
            <div key={index}>
              <p>Institution: {edu.institution}</p>
              <p>Degree: {edu.degree}</p>
              <p>Year: {edu.year}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3><b>Skills</b></h3>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>

        <div className="resume-section">
          <h3><b>Languages</b></h3>
          {languages.map((language, index) => (
            <p key={index}>{language}</p>
          ))}
        </div>
      </div>