const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/telegram', (req, res) => {
  res.render('telegram');
});

router.get('/pdf', (req, res) => {
  res.render('pdf');
});

router.post('/confirm', (req, res) => {
  const { name, code } = req.body;
  res.render('thankyou', { name, code });
});

module.exports = router;