const pool = require('../config/db.js');

const getProducts = async (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    try {
      const query = `SELECT img, name, pieces, price FROM products;`;
      connection.query(query, (err, results) => {
        connection.release();
        if (err) throw err;
        res.json(results);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
};

module.exports = {
  getProducts
};
