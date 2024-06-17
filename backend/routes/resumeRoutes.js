const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user (or update an existing user)
router.post('/', async (req, res) => {
  try {
    const { personalInfo, experience, projects, certifications, education, skills, languages } = req.body;
    const user = new User({ personalInfo, experience, projects, certifications, education, skills, languages });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get user data
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update user data
router.put('/:id', async (req, res) => {
  try {
    const { personalInfo, experience, projects, certifications, education, skills, languages } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { personalInfo, experience, projects, certifications, education, skills, languages },
      { new: true }
    );
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete user data
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted');
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
