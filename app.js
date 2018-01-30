var express = require('express');
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')
var bodyParser = require('body-parser');
var path = require('path');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys:[keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

//connect to database
mongoose.connect(keys.mongodb.dbURI, ()=>{
	console.log('connected to mongodb')
});


app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname +'/public'))

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

var first_name = 'Rohan'

app.get('/', function(req, res){
	res.render('index')
});

/*
app.get('/welcome', function(req, res){
	res.render('welcome', {
		name: first_name
	})
});*/

app.get('/quiz', function(req, res){
	res.render('quiz')
});

app.post('/quiz', urlencodedParser, function(req, res){
	console.log('POST:');
	console.log(req.body);
	res.render('quiz')
});

app.listen(3000, function(){
	console.log('Server started on port 3000')
});