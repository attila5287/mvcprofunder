const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const { Project, User } = require('../models');

router.use('/api', apiRoutes);

// route to get all dishes
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const proData = await Project.findAll({ include: { all: true } }).catch(
    (err) => {
      res.json(err);
    }
  );
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it.
  const all = proData.map((p) => p.get({ plain: true }));
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  // res.status(200).json(all);
  res.render('all', { all, loggedIn: req.session.loggedIn, });
});


// Login route from ex 16
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// Login route from ex 16
router.get('/newproject', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('newproject');
});



router.get('/pros', async (req, res) => {
  try {
    const pros = await Project.findAll({ include: { all: true } });
    // res.status( 200 ).json( pros );
    const all = pros.map((p) => p.get({ plain: true }));
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json(err);
  }
});

module.exports = router;
