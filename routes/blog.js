const express = require('express');
const router = express.Router();
const path = require('path');

// Blog index and posts with clean URLs
router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'blog', 'index.html'));
});

// Individual blog post routes
router.get('/blog/:slug', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'blog', `${req.params.slug}.html`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Blog post not found');
  }
});

// Redirect .html blog URLs to clean URLs
router.get('/blog/index.html', (req, res) => {
  res.redirect(301, '/blog');
});

router.get('/blog/:slug.html', (req, res) => {
  res.redirect(301, `/blog/${req.params.slug}`);
});

module.exports = router;
