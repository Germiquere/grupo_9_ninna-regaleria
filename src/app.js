const express = require('express');
const session = require('express-session');
const methodOverride =  require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');

const main = require('./routes/main');
const mainLogin = require('./routes/users');
const mainProduct = require('./routes/product');

const app = express();

const  userLogedMiddleware = require('./middlewares/userLogedMiddleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({ secret: 'SECRET' }))
app.use(cookieParser())
app.use(userLogedMiddleware);

app.use('/', main);
app.use('/', mainLogin);
app.use('/', mainProduct);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});