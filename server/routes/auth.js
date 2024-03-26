const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
 async function(accessToken, refreshToken, profile, done) {
    const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profileImage: profile.photos[0].value
    }

    try{
        let user = await User.findOne({googleId: profile.id})
        if(user){
            done(null, user)
        } else {
            user = await User.create(newUser)
            done(null, user)
        }
    }catch(e){
        console.log(e)
    }
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

//Persist user data
passport.serializeUser(function(user, done){
    done(null, user.id);
})

//Retrieve user data from session
passport.deserializeUser(async function(id, done){
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});


//Log out/Delete User Session
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if(error){
            console.log(error)
            res.send("Error occured while logging out")
        } else {
            res.redirect('/')
        }
    })
})


module.exports = router