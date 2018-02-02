const router = require('express').Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const user = require('../models/user-models');

const authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/');
	}
	else{
		next();
	}
};

router.get('/', authCheck, function(req, res){
	res.render('quiz');
});

router.post('/', urlencodedParser, function(req, res){
	console.log('POST:');
	console.log(req.body);
	var sum = 0;
	for(var key in req.body){
		sum+=parseInt(req.body[key])
	}
	sum*=5;
	if(sum<100){
		sum = 100;
	}
	var obj = {'score': sum};
	console.log(req.user._id)
	console.log(req.user.energyPoints);
	user.update({_id: req.user._id}, {
        energyPoints: req.user.energyPoints + sum
    },function(err, numberAffected, rawResponse) {
    	if(err){
    		console.log('Energy Point ERR')
    	}
    	else{
    		console.log('Energy Points Updated')
    	}
    });
	console.log(obj);
	res.render('quizresp',{
		Score: obj
	})
});


module.exports = router;