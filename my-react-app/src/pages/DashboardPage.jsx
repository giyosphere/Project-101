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
import Grid from '@mui/material/Grid';  
import cartIcon from '@/components/common/carticon';

const stats = [
  { label: 'Total Revenue', value: '₱0.00', icon: <cartIcon size={24} /> },
  { label: 'Total Orders', value: '0', icon: <ShoppingCartIcon sx={{color: '#2e7d32'}}/> },
  { label: 'Total Items Sold', value: '0', icon: <InventoryIcon sx={{color: '#0288d1' }}/>},
  { label: 'Total Products', value: '0', icon: <CategoryIcon sx={{color: '#9c27b0'}}/>},
  { label: 'Low Stock', value: '0', icon: <WarningIcon sx={{color: '#f57c00'}}/>},
  { label: 'Out of stock', value: '0', icon: <RemoveShoppingCartIcon sx={{ color: '#d32f2f'}}/>  },
];

export default function DashboardPage() {
  return (
    <Layout>
      <Typography variant="h3" mb={3}>Dashboard</Typography>

    
        <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={stat.label}>
          <Card key={stat.label} sx={{ minWidth: 200 }}>
            <CardContent>
             
              <Box sx={{display: 'flex', flexDirection:'column', gap: 3}}>
              <Box sx={{bgcolor: 'white', marginRight: 25, borderRadius: '1cap', padding: 2, boxShadow:' 5px 5px lightgrey', border: 'solid 0.1px'
              }}>
              {stat.icon}
              </Box>
              <Typography variant="h6" color="grey">
                {stat.label}
              </Typography>
            </Box>
              <Typography variant="h5" mt={1}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}

      </Grid>
    </Layout>
  );
}