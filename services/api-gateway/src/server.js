import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Service URLs
const SERVICES = {
  auth: process.env.AUTH_SERVICE_URL || 'http://auth-service:3001',
  projects: process.env.PROJECTS_SERVICE_URL || 'http://projects-service:3002',
  team: process.env.TEAM_SERVICE_URL || 'http://team-service:3003',
  finance: process.env.FINANCE_SERVICE_URL || 'http://finance-service:3004',
  qhse: process.env.QHSE_SERVICE_URL || 'http://qhse-service:3005',
  notifications: process.env.NOTIFICATIONS_SERVICE_URL || 'http://notifications-service:3006',
};

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'API Gateway is running' });
});

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICES.auth}/login`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICES.auth}/register`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

// Projects Routes
app.get('/api/projects', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICES.projects}/projects`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICES.projects}/projects`, req.body, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

// Team Routes
app.get('/api/team', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICES.team}/team`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

app.post('/api/team', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICES.team}/team`, req.body, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

// Finance Routes
app.get('/api/finance', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICES.finance}/finance`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

// QHSE Routes
app.get('/api/qhse', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICES.qhse}/qhse`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

// Notifications Routes
app.get('/api/notifications', async (req, res) => {
  try {
    const response = await axios.get(`${SERVICES.notifications}/notifications`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
