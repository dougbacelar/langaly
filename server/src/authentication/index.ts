import './env/setup';
import express from 'express';
import cookie from 'cookie';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { facebookRouter } from './facebook';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(passport.initialize());
app.use(facebookRouter);

const isNonNullObject = (potentialObject: unknown): potentialObject is object =>
  typeof potentialObject === 'object' && potentialObject !== null;

const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> => {
  // typescript does not support type guarding object properties yet
  // https://fettblog.eu/typescript-hasownproperty/
  // https://github.com/microsoft/TypeScript/issues/21732
  return obj.hasOwnProperty(prop);
};

function hasStringProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, string> {
  if (!hasOwnProperty(obj, prop)) {
    return false;
  }
  return typeof obj[prop] === 'string';
}

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
    <a href="/auth/facebook">facebook</a>`);
});

app.listen(PORT, () => {
  console.log(`auth server is running at port ${PORT}`);
});
