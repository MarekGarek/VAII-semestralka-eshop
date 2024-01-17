const bcrypt = require('bcrypt');
const pool = require('../config/db.js');

const sendRegisterForm = async (req, res) => {
    const { name, surName, email, login, password } = req.body;
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            pool.getConnection((err, connection) => {
                const query = `INSERT INTO users (name, surName, email, login, password, isAdmin) VALUES(?,?,?,?,?,'N');`;
                connection.query(query, [name, surName, email, login, hash], (err, result) => {
                    connection.release();

                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            return res.status(400).json({ success: false, message: 'Login už existuje. Zvoľte iný login.' });
                        } else {
                            console.error(err);
                            return res.status(500).json({ success: false, message: 'Error pri registrácií' });
                        }
                    }

                    return res.status(200).json({ success: true, message: 'Úspešne si sa zaregistroval!' });
                });
            });
        });
    });
};

module.exports = {
    sendRegisterForm
};
