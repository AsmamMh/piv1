import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Projects Service is running' });
});

app.get('/projects', (req, res) => {
  // TODO: Fetch from database
  res.json({ projects: [] });
});

app.post('/projects', (req, res) => {
  // TODO: Create project in database
  res.json({ message: 'Project created' });
});

app.listen(PORT, () => {
  console.log(`Projects Service running on port ${PORT}`);
});
