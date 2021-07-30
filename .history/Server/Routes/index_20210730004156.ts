/**
 * Module dependencies.
 *  File name: index.ts, 
    Author's: Ofovwe Ewere,Gagandeep Kaur,  Qiuqi Lu, Duy Hieu Nguyen, Farishta Sultani
    Web App name: The Favorite Tournament List App first release
    Date: July 17, 2021
 */
// modules required for routing
import express from 'express';
const router = express.Router();
export default router;
import passport from 'passport';

import mongoose from 'mongoose';

// define the tournament model
import tournament from '../Models/tournaments';

// create an instance of the User model
import User from '../Models/user';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    tournaments: ''
   });
});

/* GET - display login page - with /login . */
router.get('/login', (req, res, next) => {
   if(!req.user)
    {
        return res.render('content/index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }

    return res.redirect('/');
 });

/* POST - process login page when user clicks Login Button */
router.post('/login', (req, res, next) => {
   passport.authenticate('local', (err, user, info) => {
      // are there server errors?
      if(err)
      {
          console.error(err);
          return next(err);
      }

      // are there login errors?
      if(!user)
      {
          req.flash('loginMessage', 'Authentication Error');
          return res.redirect('/login');
      }

      req.login(user, (err) =>
      // are there db errors?
      {
          if(err)
          {
              console.error(err);
              return next(err);
          }

          return res.redirect('/');

      });
  })(req, res, next);
   
 });

/* GET - display register page - with /register . */
router.get('/register', (req, res, next) => {
   if(!req.user)
    {
        return res.render('content/index', { title: 'Register', page: 'register', messages: req.flash('registerMessage') });
    }
    return res.redirect('/');
 });

/* POST - process register page when user clicks Register Button */
router.post('/register', (req, res, next) => {
   // instantiate a new User Object
   let newUser = new User
   ({
       username: req.body.username,
       emailAddress: req.body.emailAddress,
       displayName: req.body.FirstName + " " + req.body.LastName
   });

   User.register(newUser, req.body.password, (err) =>
   {
       if(err)
       {
           console.error('Error: Inserting New User');
           if(err.name == "UserExistsError")
           {
               console.error('Error: User Already Exists');
           }
           req.flash('registerMessage', 'Registration Error');

           return res.redirect('/register');
       }

       // after successful registration - login the user
       return passport.authenticate('local')(req, res, () =>{
           return res.redirect('/');
       });
   });
 });

/* GET - process the logout page - with /logout . */
router.get('/logout', (req, res, next) => {
   req.logout();

    res.redirect('/login');
 });

//module.exports = router;
