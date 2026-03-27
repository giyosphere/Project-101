import React from 'react';
import Box from '@mui/material/Box';
import ProductCard from './ProductCards';


const sampleProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 10 },
  { id: 2, name: 'Product 2', price: 200, stock: 5 },
  { id: 3, name: 'Product 3', price: 3450, stock: 4 },
  { id: 4, name: 'Product 4', price: 800, stock: 8 },
  { id: 5, name: 'Product 6', price: 1100, stock: 16 },
  { id: 6, name: 'Product 6', price: 850, stock: 16 },
  { id: 7, name: 'Product 7', price: 326, stock: 8 },
  { id: 8, name: 'Product 3', price: 150, stock: 2},
  { id: 9, name: 'Product 3', price: 150, stock: 2},
  { id: 10, name: 'Product 3', price: 150, stock: 2},
  { id: 11, name: 'Product 8', price: 150, stock: 2}
  
];

export default function ProductList({ searchQuery, onAddToCart}) {
  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
          onAddToCart = {() =>  onAddToCart(items)}
        />
      ))}
    </Box>
  );
}