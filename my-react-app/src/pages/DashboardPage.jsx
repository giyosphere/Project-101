import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Layout from '../components/common/Layout';

const stats = [
  { label: 'Total Revenue', value: '₱0.00' },
  { label: 'Total Orders', value: '0' },
  { label: 'Total Items Sold', value: '0'},
  { label: 'Total Products', value: '0'}
];

export default function DashboardPage() {
  return (
    <Layout>
      <Typography variant="h4" mb={3}>Dashboard</Typography>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap'}}>
        {stats.map((stat) => (
          <Card key={stat.label} sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h5" mt={1}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}