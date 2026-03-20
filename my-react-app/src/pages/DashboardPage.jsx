import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function DashboardPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Welcome to POS System!
      </Typography>
    </Box>
  );
}