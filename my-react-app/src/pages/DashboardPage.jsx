import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import WarningIcon from '@mui/icons-material/Warning';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import Layout from '../components/common/Layout';


const stats = [
  { label: 'Total Revenue', value: '₱0.00', icon: <AttachMoneyIcon sx={{width: 50, height: 50}}/> },
  { label: 'Total Orders', value: '0', icon: <ShoppingCartIcon sx={{width: 50, height: 50}}/> },
  { label: 'Total Items Sold', value: '0', icon: <InventoryIcon sx={{width: 50, height: 50}}/>},
  { label: 'Total Products', value: '0', icon: <CategoryIcon sx={{width: 50, height: 50}}/>},
  { label: 'Low Stock', value: '0', icon: <WarningIcon sx={{width: 50, height: 50}}/>},
  { label: 'Out of stock', value: '0', icon: <RemoveShoppingCartIcon sx={{width: 50, height: 50}}/>},
];

export default function DashboardPage() {
  return (
    <Layout>
      <Typography variant="h3" mb={3}>Dashboard</Typography>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap'}}>
        {stats.map((stat) => (
          <Card key={stat.label} sx={{ minWidth: 200 }}>
            
            <CardContent>
              <Box sx={{display: 'flex', flexDirection:'column'}}>
              {stat.icon}
              <Typography variant="h6" color="blue">
                {stat.label}
              </Typography>
            </Box>
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