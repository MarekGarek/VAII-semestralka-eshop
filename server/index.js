const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const session = require('express-session');

const app = express();

const sessionSecret = 'fallback-secret';

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3600000,
    },
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',routesHandler);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});