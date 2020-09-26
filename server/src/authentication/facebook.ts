import { Router } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-facebook';
import { createAuthenticationCallback } from './util';

export const facebookRouter = Router();

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['emails'],
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, {
        id: profile.id,
        email: profile.emails?.[0].value,
        provider: 'facebook',
      });
    }
  )
);

facebookRouter.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

facebookRouter.get('/auth/facebook/callback', (req, res, next) => {
  passport.authenticate(
    'facebook',
    { failureRedirect: 'http://localhost:8080/login' },
    createAuthenticationCallback(res)
  )(req, res, next);
});
