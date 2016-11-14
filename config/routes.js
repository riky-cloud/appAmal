var home = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app, newpassport) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);
    app.get('/test', home.test);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    // app.post('/post', newpassport.authenticate('posting', function(req, res){
        // res.render('render');
    // }));
    app.post('/post', function(req, res, next ){
      newpassport.authenticate('posting', function(err, user) {
        if (err) { return next(err) }
        if (!user) { return res.json( { message: info.message }) }
        res.json(user);
      })(req, res, next);
  });

    app.post('/signup', newpassport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', newpassport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


}
