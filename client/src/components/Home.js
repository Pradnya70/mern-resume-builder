import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import ProfilePhoto from './ProfilePhoto';
import TemplateSelection from './TemplateSelection';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import "../App.css"; // Import the App.css for styling

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', address: '', description: '' });
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [template, setTemplate] = useState({ font: 'Arial', color: '#000000' });

  const handlePersonalInfoChange = (info) => setPersonalInfo(info);
  const handleExperienceChange = (exp) => setExperience(exp);
  const handleProjectsChange = (proj) => setProjects(proj);
  const handleCertificationsChange = (cert) => setCertifications(cert);
  const handleEducationChange = (edu) => setEducation(edu);
  const handleSkillsChange = (skill) => setSkills(skill);
  const handleLanguagesChange = (lang) => setLanguages(lang);
  const handleProfilePhotoChange = (photo) => setProfilePhoto(photo);
  const handleTemplateChange = (temp) => setTemplate(temp);

  const handleDownload = () => {
    const input = document.getElementById('resumePreview');
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      }).catch(error => {
        console.error("Error creating canvas:", error);
      });
    } else {
      console.error("No element with id 'resumePreview' found.");
    }
  };

  const addExperience = (newExp) => setExperience([...experience, newExp]);
  const updateExperience = (index, newExp) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = newExp;
    setExperience(updatedExperience);
  };
  const deleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const addProject = (newProj) => setProjects([...projects, newProj]);
  const updateProject = (index, newProj) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = newProj;
    setProjects(updatedProjects);
  };
  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const addCertification = (newCert) => setCertifications([...certifications, newCert]);
  const updateCertification = (index, newCert) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = newCert;
    setCertifications(updatedCertifications);
  };
  const deleteCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const addEducation = (newEdu) => setEducation([...education, newEdu]);
  const updateEducation = (index, newEdu) => {
    const updatedEducation = [...education];
    updatedEducation[index] = newEdu;
    setEducation(updatedEducation);
  };
  const deleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const addSkill = (newSkill) => setSkills([...skills, newSkill]);
  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addLanguage = (newLang) => setLanguages([...languages, newLang]);
  const deleteLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="form-container">
      <h1>Resume Builder</h1>
      <ProfilePhoto onChange={handleProfilePhotoChange} />
      <PersonalInfo onChange={handlePersonalInfoChange} />
      <Experience
        data={experience}
        onAdd={addExperience}
        onUpdate={updateExperience}
        onDelete={deleteExperience}
      />
      <Projects
        data={projects}
        onAdd={addProject}
        onUpdate={updateProject}
        onDelete={deleteProject}
      />
      <Certifications
        data={certifications}
        onAdd={addCertification}
        onUpdate={updateCertification}
        onDelete={deleteCertification}
      />
      <Education
        data={education}
        onAdd={addEducation}
        onUpdate={updateEducation}
        onDelete={deleteEducation}
      />
      <Skills
        data={skills}
        onAdd={addSkill}
        onDelete={deleteSkill}
      />
      <Languages
        data={languages}
        onAdd={addLanguage}
        onDelete={deleteLanguage}
      />
      <TemplateSelection onChange={handleTemplateChange} />
      <button onClick={handleDownload}>Download Resume</button>

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

        {experience.length > 0 && (
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
        )}

        {projects.length > 0 && (
          <div className="resume-section">
            <h3><b>Projects</b></h3>
            {projects.map((proj, index) => (
              <div key={index}>
                <p>Title: {proj.title}</p>
                <p>Description: {proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {certifications.length > 0 && (
          <div className="resume-section">
            <h3><b>Certifications</b></h3>
            {certifications.map((cert, index) => (
              <div key={index}>
                <p>Name: {cert.name}</p>
                <p>Issuer: {cert.issuer}</p>
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div className="resume-section">
            <h3><b>Education</b></h3>
            {education.map((edu, index) => (
              <div key={index}>
                <p>Institution: {edu.institution}</p>
                <p>Degree: {edu.degree}</p>
                <p>Year: {edu.year}</p>
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <div className="resume-section">
            <h3><b>Skills</b></h3>
            {skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        )}

        {languages.length > 0 && (
          <div className="resume-section">
            <h3><b>Languages</b></h3>
            {languages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
