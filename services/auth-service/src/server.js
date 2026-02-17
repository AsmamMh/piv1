import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Auth Service is running' });
});

app.post('/login', (req, res) => {
  // TODO: Implement login logic
  res.json({ message: 'Login endpoint' });
});

app.post('/register', (req, res) => {
  // TODO: Implement registration logic
  res.json({ message: 'Register endpoint' });
});

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
