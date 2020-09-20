const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
require('../environment/setup');

app.use(cookieParser());
app.use(require('./routes'));

// const { IS_PRODUCTION } = require('./environment/utils');
// if (IS_PRODUCTION) {
app.use(express.static(path.resolve('../../../client/build')));
// }

const PORT = 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
