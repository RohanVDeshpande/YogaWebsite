const router = require('express').Router();

const authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/');
	}
	else{
		next();
	}
};

router.get('/', authCheck, (req,res)=>{
	//res.send('you are logged in, this is your profile -' +req.user.username);
	res.render('welcome', {
		name: req.user.username
	})
});

module.exports = router;