import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'QHSE Service is running' });
});

app.get('/qhse', (req, res) => {
  // TODO: Fetch QHSE data
  res.json({ qhse: {} });
});

app.listen(PORT, () => {
  console.log(`QHSE Service running on port ${PORT}`);
});
