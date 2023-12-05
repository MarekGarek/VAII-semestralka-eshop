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

router.post('/post/data', (req, res) => {
    const { title, text, url, read_time, blog_type } = req.body;
    res.send('Príspevok úspešne odoslaný.');
    
    if (!validate(title, text, url, read_time, blog_type)) {
        res.end();
    }

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

router.put('/put/data', (req, res) => {
  const { title, text, url, read_time, blog_type, id_blog } = req.body;
  res.send('Príspevok úspešne odoslaný.');
  
  //TODO formularovy check na strane servera

  pool.getConnection((err, connection) => {
    try {
      if (err) throw err;
      const login = "admin";
      const query = `UPDATE blog SET title=?, text=?, read_time=?, blog_type=?, url=?, login=?, date=NOW() where id_blog=?;`;
      connection.query(query, [title, text, read_time, blog_type,url,login,id_blog], (err, result) => {
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

router.delete('/blog/delete/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  query = `DELETE FROM blog WHERE id_blog =?`;

  pool.getConnection((err, connection) => {
    try {
      if (err) throw err;
      connection.query(query, [id], (err, result) => {
        connection.release();
        if (err) throw err;
        console.log('Zmazane');
      });
      res.end();
    } catch (err) {
      console.log(err);
    }
  })

});

function validate(title, text, url, read_time, blog_type) {
  if (title === '' || text === '' || url === '' || read_time === '' || blog_type === '')
    return false;

  if (title.length > 150 || text.length > 5000 || blog_type.length > 25 || url.length > 200)
    return false;

  if (typeof title !== 'string' || typeof text!== 'string' || typeof url!== 'string' || typeof read_time!== 'int' || typeof blog_type!== 'string')
    return false;  

  return true;
}


module.exports = router;