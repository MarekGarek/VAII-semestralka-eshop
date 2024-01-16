const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
const homeController = require('../controllers/homeController');
const blogController = require('../controllers/blogController');
const registerController = require('../controllers/registerController');
const authController = require('../controllers/authController');

const upload = multer({ storage: multer.memoryStorage() });

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true, //cookies
};

router.use(cors(corsOptions));

// home page
router.get('/get/products', homeController.getProducts);

// blog page + edit page
router.get('/get/blog', blogController.getBlogs);
router.post('/post/data',
upload.fields([{ name: 'blogImg', maxCount: 1 }, { name: 'title' }, { name: 'text' }, { name: 'number' }, { name: 'blog_type' }]),
blogController.addBlog);
router.put('/put/data',
upload.fields([{ name: 'blogImg' }, { name: 'title' }, { name: 'text' }, { name: 'number' }, { name: 'blog_type' }]),
blogController.editBlog);
router.delete('/blog/delete/:id', blogController.deleteBlog);

// register page
router.post('/post/register', registerController.sendRegisterForm);

// login page 
router.post('/post/auth', authController.handleLogin);

module.exports = router;