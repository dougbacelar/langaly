const express = require('express');
const router = express.Router();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env['FACEBOOK_CLIENT_ID'],
      clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
      callbackURL: '/auth/facebook/redirect',
    },
    function(accessToken, refreshToken, profile, done) {
      // TODO query DB for user with profile ID
      // If user exists, pass it to done callback. Update any missing info on DB.
      // Else, create user on DB and pass it to done callback
      console.log('profile', profile);

      return done(null, profile);
    }
  )
);

passport.serializeUser(function(user, cb) {
  console.log('serializing user obj', user);
  cb(null, user); // replace user with user.id when DB is set up
});

passport.deserializeUser(function(obj, cb) {
  console.log('deserializing obj', obj);

  cb(null, obj); // query user by ID from the DB
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
  '/auth/facebook/redirect',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: 'http://localhost:3000',
  })
  // ,
  // function(req, res) {
  //   console.log('Successful authentication, redirect home.');
  //   res.send('logged in!');
  //   // res.redirect('/');
  // }
);

router.get('/login', (req, res) => {
  res.send('logging you in...');
});

module.exports = router;
