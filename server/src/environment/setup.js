const { ACTIVE_ENV } = require('./utils');

const setupEnvironmentVariables = () => {
  // eslint-disable-next-line no-console
  console.log(`Using environment config: '${ACTIVE_ENV}'`);

  require('dotenv').config({
    path: `./src/environment/.env.${ACTIVE_ENV}`,
  });
};

module.exports = setupEnvironmentVariables();
