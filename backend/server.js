const express = require('express');
const axios = require('axios');
const redis = require('redis');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// Redis client
const redisClient = redis.createClient();
redisClient.connect().then(() => console.log('Redis connected'));

// Datadog Integration
app.get('/datadog/metrics', async (req, res) => {
  try {
    const response = await axios.get('https://api.datadoghq.com/api/v2/metrics', {
      params: req.query,
      headers: {
        'DD-API-KEY': process.env.DATADOG_KEY,
        'DD-APPLICATION-KEY': process.env.DATADOG_APP_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Datadog API Error' });
  }
});

// ServiceNow Integration
app.get('/servicenow/incidents', async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.SN_INSTANCE}/api/now/table/incident`,
      {
        auth: {
          username: process.env.SN_USER,
          password: process.env.SN_PASS
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'ServiceNow API Error' });
  }
});

// Grafana Proxy
app.use('/grafana', createProxyMiddleware({
  target: process.env.GRAFANA_URL,
  changeOrigin: true,
  pathRewrite: { '^/grafana': '' },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Authorization', `Bearer ${process.env.GRAFANA_TOKEN}`);
  }
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
