//declaration
const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
var login = require('./controllers/login');
var adminhome = require('./controllers/adminhome');
var memberhome = require('./controllers/memberhome');
var admin = require('./controllers/admin');
var member = require('./controllers/member');
var register = require('./controllers/register');
var addprivatecar = require('./controllers/addprivatecar');
var addmicro = require('./controllers/addmicro');
var addpickup= require('./controllers/addpickup');

var logout = require('./controllers/logout');

const path = require('path');
const app 			= express();


//config
app.set('view engine', 'ejs');

//middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use('/login', login);
app.use('/adminhome', adminhome);
app.use('/memberhome', memberhome);
app.use('/admin', admin);
app.use('/member', member);
app.use('/register', register);
app.use('/logout', logout);
app.use('/addprivatecar', addprivatecar);
app.use('/addmicro', addmicro);
app.use('/addpickup', addpickup);

app.use(express.static(path.join(__dirname, 'public')));


//route
app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});