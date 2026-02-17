import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Finance Service is running' });
});

app.get('/finance', (req, res) => {
  // TODO: Fetch financial data
  res.json({ finance: {} });
});

app.listen(PORT, () => {
  console.log(`Finance Service running on port ${PORT}`);
});
