const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalInfoSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  description: String,
});

const ExperienceSchema = new Schema({
  company: String,
  role: String,
  duration: String,
  description: String,
});

const ProjectSchema = new Schema({
  title: String,
  description: String,
});

const CertificationSchema = new Schema({
  name: String,
  issuer: String,
});

const EducationSchema = new Schema({
  institution: String,
  degree: String,
  year: String,
});

const SkillSchema = new Schema({
  skill: String,
});

const LanguageSchema = new Schema({
  language: String,
});

const UserSchema = new Schema({
  personalInfo: PersonalInfoSchema,
  experience: [ExperienceSchema],
  projects: [ProjectSchema],
  certifications: [CertificationSchema],
  education: [EducationSchema],
  skills: [SkillSchema],
  languages: [LanguageSchema],
});

module.exports = mongoose.model('User', UserSchema);
