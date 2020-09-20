const express = require('express');
const passport = require('passport');
const app = express();
const cookieParser = require('cookie-parser');
require('../environment/setup');

app.use(cookieParser());
app.use(passport.initialize());
app.use(require('./routes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
