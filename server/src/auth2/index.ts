import './env/setup';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 8000;
app.use(express.json());

app.post('/', (req, res) => {
  const user = req.body?.user;
  if (!user) {
    res.status(400).json({ error: 'invalid request' });
  }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || '', {
    expiresIn: '90 days',
  });
  res.json({ accessToken });
});

app.listen(PORT, () => {
  console.log(`auth2 is running at port ${PORT}`);
});
