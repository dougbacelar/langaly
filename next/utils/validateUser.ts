import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { NextPageContext } from 'next';
import { hasStringProperty, isNonNullObject } from './typeGuards';

export const getJwtPayload = (
  context: NextPageContext
): { userId: string } | null => {
  const cookies = cookie.parse(context.req?.headers?.cookie || '');
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
    return jwtPayload;
  } catch (error) {
    return null;
  }
};

export const validateUser = (context: NextPageContext) => {
  const jwtPayload = getJwtPayload(context);

  if (!jwtPayload) {
    context.res?.writeHead(302, { Location: '/login' });
    context.res?.end();
  }
  return jwtPayload;
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
