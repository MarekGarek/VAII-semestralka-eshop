const pool = require('../config/db.js');

const handleLogin = async (req, res) => {
    const { login, password} = req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err;

        try {
            if (!login || !password) {
                return res.status(400);     //nezadany login alebo heslo
            }

            const query = `SELECT login,password,isAdmin from users WHERE login = ?`;
            connection.query(query, [login] , (err, results) => {
                connection.release();
                if (err) throw err;
                if (results.length === 0 || results[0].password != password) {
                    return res.status(401); // ziaden zaznam -> zly/neexistujuci login || nespravne heslo
                }
                res.json(results[0].isAdmin);
            });

        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    })
};

module.exports = {
    handleLogin
  };