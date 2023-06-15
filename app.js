const path = require('path');
const express = require('express');
const routes = require('./config/routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

require('./utils/passport')(passport);

const app = express();

app.use(session({
    secret: 'secret', 
    resave: true,
    saveUninitialized: true
  }));

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'app/views'));

//app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(3000, () => console.log('Server started on port 3000'));