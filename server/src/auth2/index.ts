import { setupEnvironmentVariables } from './env/setup';
setupEnvironmentVariables();
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 8000;
app.use(express.json());

app.post('/', (req, res) => {
  const user = req.body?.user;
  if (!user) {
    throw new Error('No user found');
  }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || '', {
    expiresIn: '90 days',
  });
  res.json({ accessToken });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
