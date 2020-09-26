import './env/setup';
import express from 'express';
import passport from 'passport';
import { facebookRouter } from './facebook';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(passport.initialize());
app.use(facebookRouter);

app.get('/loggedin', (req, res) => {
  res.send('bro you in...');
});

app.get('/login', (req, res) => {
  res.send('pls login...');
});

app.listen(PORT, () => {
  console.log(`auth2 is running at port ${PORT}`);
});
