import express from 'express';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { hasStringProperty, isNonNullObject } from '../typeGuards';

export const validateUserMiddleware: express.RequestHandler = (
  req,
  res,
  next
) => {
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

declare global {
  namespace Express {
    interface User {
      userId: string;
    }

    interface Request {
      user?: User;
    }
  }
}
