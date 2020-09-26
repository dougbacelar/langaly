import './env/setup';
import './typeOverrides';
import express from 'express';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { hasStringProperty, isNonNullObject } from './typeGuards';

const app = express();
const PORT = 8080;

app.use(express.json());

const validateCookieMiddleware: express.RequestHandler = (req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie || '');

  try {
    const jwtPayload =
      cookies.langalyticket &&
      jwt.verify(cookies.langalyticket, process.env.ACCESS_TOKEN_SECRET);

    if (!isNonNullObject(jwtPayload)) {
      throw new Error('Could not decode token properly');
    }
    if (
      !hasStringProperty(jwtPayload, 'userId') ||
      jwtPayload.userId.trim() === ''
    ) {
      throw new Error('Token is missing necessary information');
    }
    req.user = jwtPayload;
  } catch (error) {
    return res.redirect('/login');
  }
  next();
};

app.get('/loggedin', validateCookieMiddleware, (req, res) => {
  res.send(`<h1>bro you in...</h1>`);
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>pls login...</h1>
    <a href="http://localhost:8000/auth/facebook">facebook</a>`);
});

app.listen(PORT, () => {
  console.log(`auth server is running at port ${PORT}`);
});
