const express = require('express');
const passport = require('passport');
const app = express();
const PORT = 4000;

require('../environment/setup');

app.use(passport.initialize());
app.use(passport.session()); // Restore authentication state, if any, from the session.

app.use(require('./app/routes'));
app.use(require('./authentication/routes'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
