import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { hasStringProperty, isNonNullObject } from './typeGuards';

const JWT_COOKIE_AGE = 60000; // 1 minutes;

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

export const getAccessToken = (user: { userId: string }): string => {
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
    return res.redirect('http://localhost:3000/login');
  }
  // TODO query DB for langalyUser with user.id and user.provider
  // If user exists, use its id and save it in access token
  // Else, create user on DB and pass new user id to access token

  const accessToken = getAccessToken({ userId: user.id });
  if (!accessToken) {
    return res.redirect('http://localhost:3000/login');
  }
  console.log(
    'authenticated and created token! running callback for user: ',
    user
  );

  res.cookie('langalyticket', accessToken, {
    expires: new Date(Date.now() + JWT_COOKIE_AGE),
    httpOnly: true,
    sameSite: 'strict', // strict prevents cookie from being sent to other sites
    secure: false, // set this to true to send cookie via HTTPS only
  });
  res.redirect('http://localhost:3000/');
};
