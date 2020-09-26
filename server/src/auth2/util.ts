import { Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_COOKIE_AGE = 120000; // 2 minutes;

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

type AuthenticatedUser = {
  id: string;
  email: string;
  provider: string;
};

const validateUser = (user: unknown): user is AuthenticatedUser => {
  if (!isNonNullObject(user)) {
    console.info('Failed to validate: user is not an object');
    return false;
  }
  if (!hasStringProperty(user, 'provider') || user.provider.trim() === '') {
    console.info('Failed to validate: user does not have a provider');
    return false;
  }
  if (!hasStringProperty(user, 'id') || user.id.trim() === '') {
    console.info('Failed to validate: user does not have an id', user.provider);
    return false;
  }
  if (!hasStringProperty(user, 'email') || user.email.trim() === '') {
    console.info(
      'Failed to validate: user does not have an email',
      user.provider
    );
    return false;
  }
  return true;
};

export const getAccessToken = (user: { id: string }): string => {
  try {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '90 days',
    });
  } catch (error) {
    // jwt.sign can throw and fail silently. Add log for better debugging.
    console.error('Failed to generate JWT.', error);
    return '';
  }
};

export const createAuthenticationCallback = (res: Response) => (
  error: unknown,
  user: unknown,
  info: unknown
) => {
  if (!validateUser(user)) {
    return res.redirect('../../login');
  }
  // TODO query DB for langalyUser with user.id and user.provider
  // If user exists, use its id and save it in access token
  // Else, create user on DB and pass new user id to access token

  const accessToken = getAccessToken({ id: user.id });
  if (!accessToken) {
    return res.redirect('../../login');
  }
  console.log(
    'authenticated and created token! running callback for user: ',
    user
  );

  res.cookie('authtest', accessToken, {
    expires: new Date(Date.now() + JWT_COOKIE_AGE),
    httpOnly: false,
    sameSite: 'strict', // strict prevents cookie from being sent to other sites
    secure: false, // set this to true to send cookie via HTTPS only
  });
  res.redirect('/loggedin');
};
