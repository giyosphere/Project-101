import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '../components/common/Layout';
import ProductSearch from '../components/products/ProductSearch';
import ProductList from '../components/products/ProductList';
import Button from '../components/common/Button';
import Addproducts from '../components/products/Addproducts';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Products</Typography>
        <Button label="Add Product" variant="contained" onClick={() => setOpen(true)} />
      </Box>

      <ProductSearch onSearch={(query) => setSearchQuery(query)} />
      <ProductList searchQuery={searchQuery} />

      <Addproducts open={open} onClose={() => setOpen(false)}>
      
      </Addproducts>
    </Layout>

  
    
  );
}