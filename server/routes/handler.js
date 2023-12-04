const express = require('express');
const router = express.Router();
const pool = require('../config/db.js');
const cors = require('cors');

router.use(cors());

router.get('/blog', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;

      try {
        const guery = `SELECT title,text,read_time,date,blog_type,url,id_blog FROM blog`;
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

router.post('/data', (req, res) => {
    const { title, text, url, read_time, blog_type } = req.body;
    res.send('Príspevok úspešne odoslaný.');
    
    //console.log(title, text, url, read_time, blog_type);
    //TODO formularovy check na strane servera

    pool.getConnection((err, connection) => {
      try {
        if (err) throw err;
        const login = "admin";
        const query = `INSERT INTO blog (title, text, read_time, blog_type, url, login, date) VALUES(?,?,?,?,?,?, NOW());`;
        connection.query(query, [title, text, read_time, blog_type,url,login], (err, result) => {
        connection.release();
        if (err) throw err;
        console.log('Pridane');
      });
        res.end();
      } catch (err) {
        console.log(err);
      }
    })

});


module.exports = router;