const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const port = 3000;

require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

app.use(passport.initialize());
app.use(passport.session());