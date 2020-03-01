const express = require('express');
const passport = require('passport');
const path = require('path');
const app = express();
const PORT = 4000;
const cookieParser = require('cookie-parser')

app.use(cookieParser())
// const { IS_PRODUCTION } = require('./environment/utils');
require('./environment/setup');

// if (IS_PRODUCTION) {
app.use(express.static(path.resolve('../client/build')));
// }

app.use(passport.initialize());

app.use(require('./app/routes'));
app.use(require('./authentication/routes'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
