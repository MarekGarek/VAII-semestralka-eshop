const pool = require('../config/db.js');

const getBlogs = async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
    
        try {
          const guery = `SELECT title,text,read_time,date,blog_type,img,id_blog FROM blog`;
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

const addBlog = async (req, res) => {
    const image = req.files.blogImg[0].buffer.toString('base64');
    const { title, text, read_time, blog_type } = req.body;
    res.send('Príspevok úspešne odoslaný.');
  
    pool.getConnection((err, connection) => {
      try {
        if (err) throw err;
        const login = "admin";
        const query = `INSERT INTO blog (title, text, read_time, blog_type, img, login, date) VALUES(?,?,?,?,?,?, NOW());`;
        connection.query(query, [title, text, read_time, blog_type,image,login], (err, result) => {
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

const editBlog = async (req, res) => {
    const image = req.files.blogImg[0].buffer.toString('base64');
    const { title, text, read_time, blog_type, id_blog } = req.body;
    res.send('Príspevok úspešne odoslaný.');
  
    pool.getConnection((err, connection) => {
      try {
        if (err) throw err;
        const login = "admin";
        const query = `UPDATE blog SET title=?, text=?, read_time=?, blog_type=?, img=?, login=?, date=NOW() where id_blog=?;`;
        connection.query(query, [title, text, read_time, blog_type,image,login,id_blog], (err, result) => {
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

const deleteBlog = async (req, res) => {
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
};

module.exports = {
  getBlogs,
  addBlog,
  editBlog,
  deleteBlog
};
