import React, { useState, useEffect } from 'react';
import { Grid, Card, Typography, CircularProgress } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Card>
          <Typography variant="h4" gutterBottom>
            Production Resiliency Dashboard
          </Typography>
        </Card>
      </Grid>
      <Dashboard />
    </Grid>
  );
}

export default App;
