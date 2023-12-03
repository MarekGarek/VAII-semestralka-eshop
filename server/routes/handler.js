const express = require('express');
const router = express.Router();
const pool = require('../config/db.js');


router.get('/blog', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;

      try {
        const guery = `SELECT title,text,read_time,date,blog_type,url FROM blog`;
        connection.query(guery, (err, result) => {
          connection.release();
          if (err) throw err;
          res.json(result);
        });
      } catch (error) {
        console.log(error);
        res.end();
      }
    });
});

// add post to blog 21:00 https://www.youtube.com/watch?v=t4ZAdwPZe9A

module.exports = router;