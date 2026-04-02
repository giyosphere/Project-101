import React from 'react';
import Box from '@mui/material/Box';

import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: '270px', width: 'calc(100% - 280px)', overflow: 'auto' }}>
        {children}
      </Box>

    </Box>
  );
}