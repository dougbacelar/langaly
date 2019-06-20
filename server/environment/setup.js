const setupEnvironmentVariables = () => {
  const activeEnv =
    process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

  // eslint-disable-next-line no-console
  console.log(`Using environment config: '${activeEnv}'`);

  require('dotenv').config({
    path: `./environment/.env.${activeEnv}`,
  });
};

module.exports = setupEnvironmentVariables();
