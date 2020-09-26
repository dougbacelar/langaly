import './env/setup';
import express from 'express';
import { validateUserMiddleware } from './middlewares/validateUser';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/loggedin', validateUserMiddleware, (req, res) => {
  res.send(`<h1>bro you in...</h1>`);
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>pls login...</h1>
    <a href="http://localhost:8000/auth/facebook">facebook</a>`);
});

app.listen(PORT, () => {
  console.log(`auth server is running at port ${PORT}`);
});
