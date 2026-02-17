import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Team Service is running' });
});

app.get('/team', (req, res) => {
  // TODO: Fetch from database
  res.json({ members: [] });
});

app.post('/team', (req, res) => {
  // TODO: Create team member in database
  res.json({ message: 'Team member added' });
});

app.listen(PORT, () => {
  console.log(`Team Service running on port ${PORT}`);
});
