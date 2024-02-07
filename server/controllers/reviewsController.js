const pool = require('../config/db.js');

const getReviews = async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
    
        try {
          const guery = `SELECT idreviews,title,text,user,date,recommendation,stars FROM reviews`;
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
};

const deleteReview = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    query = `DELETE FROM reviews WHERE idreviews =?`;
    
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
};

const addReview = async (req, res) => {
  const { title, text, stars, recommendation,login } = req.body;
  res.send('Príspevok úspešne odoslaný.');

  pool.getConnection((err, connection) => {
    try {
      if (err) throw err;
      const query = `INSERT INTO reviews (title, text, user, stars, recommendation, date) VALUES(?,?,?,?,?, NOW());`;
      connection.query(query, [title, text, login, stars, recommendation], (err, result) => {
      connection.release();
      if (err) throw err;
      console.log('Pridane');
    });
      res.end();
    } catch (err) {
      console.log(err);
    }
  })
};

const editReview = async (req, res) => {
  const { title, text, stars, recommendation, idreview } = req.body;
  res.send('Príspevok úspešne odoslaný.');

  pool.getConnection((err, connection) => {
    try {
      if (err) throw err;
      const query = `UPDATE reviews SET title=?, text=?, stars=?, recommendation=?, date=NOW() where idreviews=?;`;
      connection.query(query, [title, text, stars, recommendation,idreview], (err, result) => {
      connection.release();
      if (err) throw err;
      console.log('Pridane');
    });
      res.end();
    } catch (err) {
      console.log(err);
    }
  })
};

module.exports = {
  getReviews,
  addReview,
  editReview,
  deleteReview
};
