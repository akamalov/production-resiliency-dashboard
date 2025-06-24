import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/datadog/metrics?metric=system.cpu.user')
      .then(res => res.json())
      .then(data => {
        setMetrics(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">System Metrics</Typography>
            <div style={{ height: '300px' }}>
              <Line 
                data={{
                  labels: metrics?.series?.[0]?.pointlist?.map(p => new Date(p[0]).toLocaleTimeString()),
                  datasets: [{
                    label: 'CPU Usage',
                    data: metrics?.series?.[0]?.pointlist?.map(p => p[1]),
                    borderColor: 'rgb(75, 192, 192)',
                  }]
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
