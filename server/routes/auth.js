const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

//Google Login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));


//Retrieve User Data
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure', 
    successRedirect: '/dashboard'
  })
);

//failure routing
router.get('/login-failure', (req, res)=>{
    res.send('Something went wrong')
})

module.exports = router