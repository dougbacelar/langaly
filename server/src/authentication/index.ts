import './env/setup';
import express from 'express';
import passport from 'passport';
import { facebookRouter } from './facebook';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(passport.initialize());
app.use(facebookRouter);

app.listen(PORT, () => {
  console.log(`auth server is running at port ${PORT}`);
});
