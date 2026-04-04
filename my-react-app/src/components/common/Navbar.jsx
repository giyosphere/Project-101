import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({open, setOpen}) {

  return(
    <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black'}}>
    <Toolbar>
   <Box sx={{ flexGrow: 1 }}>
  
    </Box>
    <ShoppingCartIcon sx={{ cursor: 'pointer' }} />
    </Toolbar>


  </AppBar>

  );
}