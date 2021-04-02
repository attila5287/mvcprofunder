const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

const { Project, User } = require('../models');
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../views/layouts/main.html'));
  } catch (error) {
    res.status(500).json(err);
  }
});
router.get('/r', async (req, res) => {
  try {
    const pros = await Project.findAll({ include: { all: true } });
    res.status(200).json(pros);
  } catch (error) {
    res.status(400).json(err);
  }
});

module.exports = router;
