const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

const ACTIVE_ENV =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || ENV.DEVELOPMENT;

const IS_PRODUCTION = ACTIVE_ENV === ENV.PRODUCTION;

module.exports = {
  ACTIVE_ENV,
  IS_PRODUCTION,
};
