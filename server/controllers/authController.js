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
                if (results.length === 0) {
                  return res.status(401).json({ success: false, message: 'Zadali ste zlé meno alebo heslo.' });
                }

                bcrypt.compare(password, results[0].password, function(err, resultCompare) {
                    if(resultCompare) {
                        req.session.user = {...results[0]};
                        res.json(results[0].isAdmin);
                    }
                });
                
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Server error.' });
        }
    })
};

const logOut = async (req, res) => {
    try {
      await req.session.destroy();
      res.clearCookie('connect.sid');
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  }  

const isLogged = async (req, res) => {
    try {
      if(req.session.user) {
        return res.json({ valid: true , user: req.session.user});
      } else {
        return res.json({ valid: false});
      }
    } catch (err) {
      console.log(err);
    }
  } 

module.exports = {
    handleLogin,
    logOut,
    isLogged
  };