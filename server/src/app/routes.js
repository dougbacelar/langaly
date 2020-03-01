const express = require('express');
const router = express.Router();
const path = require('path');
const { IS_PRODUCTION } = require('../environment/utils');

router.get('/hi', (req, res) => {
  console.log('\nIS_PRODUCTION', IS_PRODUCTION);
  console.log('req.cookies', req.cookies);
  res.send(req.cookies);

  // res.send('greetings');
  // const fileToServe = IS_PRODUCTION
  //   ? '../client/build/index.html'
  //   : '../client/public/index.html';

  // if (IS_PRODUCTION) {
  // res.sendFile(path.resolve('../client/build/index.html'));
  // } else {
  // console.log(req.url);

  // res.writeHead(302, { Location: 'localhost:3000/' });
  // res.location('http://localhost:3000/');
  // res.end();
  // res.redirect(302, 'http://localhost:3000/');
  // }
});

//production mode
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', (req, res) => {
//     res.sendfile(path.join((__dirname = 'client/build/index.html')));
//   });
// }
// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });

module.exports = router;
