import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Notifications Service is running' });
});

app.get('/notifications', (req, res) => {
  // TODO: Fetch notifications
  res.json({ notifications: [] });
});

app.post('/notifications', (req, res) => {
  // TODO: Send notification
  res.json({ message: 'Notification sent' });
});

app.listen(PORT, () => {
  console.log(`Notifications Service running on port ${PORT}`);
});
