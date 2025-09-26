const express = require('express');
const router = express.Router();
const path = require('path');

// Clean URLs for static pages
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'about.html'));
});

router.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'privacy.html'));
});

router.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'terms.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'contact.html'));
});

// Redirect .html URLs to clean URLs
router.get('/about.html', (req, res) => {
  res.redirect(301, '/about');
});

router.get('/privacy.html', (req, res) => {
  res.redirect(301, '/privacy');
});

router.get('/terms.html', (req, res) => {
  res.redirect(301, '/terms');
});

router.get('/contact.html', (req, res) => {
  res.redirect(301, '/contact');
});

module.exports = router;
