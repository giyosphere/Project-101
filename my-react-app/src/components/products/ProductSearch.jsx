import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function ProductSearch({ onSearch }) {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        id="product-search"
        label="Search Product"
        variant="outlined"
        sx={{width: '300px'}}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Box>
  );
}