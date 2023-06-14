const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./config/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '/app/views'));
//app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => console.log('Server started on port 3000'));