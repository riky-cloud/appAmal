var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var user = require('../models/home');

exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

}

exports.home = function(req, res) {


	res.render('home.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,

	 });

}


exports.signup = function(req, res) {

	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}

}


exports.login = function(req, res) {
	if (req.session.user) {
		res.redirect('/home');
	} else {
		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}
}

exports.test = function(req, res) {
	user.find({}, function(err, data) {
		console.log(data);
		res.render('test')
	})

}
