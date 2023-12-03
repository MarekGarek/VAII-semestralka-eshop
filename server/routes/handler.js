const express = require('express');
const router = express.Router();

router.get('/blog', (req, res) => {
  const blog_post = [{
    title: 'Title',
    text: 'This is the first blog post.',
    read_time: 2,
    date: '2020-01-01 00:00:00',
    blog_type: 'Fitness recepty'
  }]

  res.json(blog_post);
});


module.exports = router;