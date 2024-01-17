const pool = require('../config/db.js');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { login, password} = req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err;

        try {
            if (!login || !password) {
                console.log('test');
                return res.status(400).json({ success: false, message: 'Nezadali ste meno alebo heslo.' });     //nezadany login alebo heslo
            }

            const query = `SELECT login,password,isAdmin from users WHERE login = ?`;
            connection.query(query, [login] , (err, results) => {
                connection.release();
                if (err) throw err;
                

                bcrypt.compare(password, results[0].password, function(err, resultCompare) {
                    if(resultCompare || results.length === 0) {
                        req.session.user = {...results[0]};
                        res.json(results[0].isAdmin);
                    } else {
                        return res.status(401).json({ success: false, message: 'Zadali ste zlé meno alebo heslo.' });
                    }
                });
                
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Server error.' });
        }
    })
};

module.exports = {
    handleLogin
  };