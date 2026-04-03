import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout({ children }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);

       

  return (

  
    <Box sx={{ display: 'flex' }}>
       {isMobile && (
            <Box sx={{position: 'fixed',top: 10, left: 10, zIndex: 1300}}>
              <MenuIcon onClick={() => setOpen(true)} sx={{ cursor: 'pointer', fontSize: 32 }} />
            </Box>
          )}
      <Sidebar open={open} setOpen={setOpen} />

      <Box component="main" sx={{ 
        flexGrow: 1,
        p: 3,
        mt: isMobile ? 1 : 2,
        ml: isMobile ? 0 : '270px',
        width: isMobile ? '100%' : `calc(100% - 270px)`,
        overflow: 'auto',
     

       }}>
        {children}
      </Box>

    </Box>
  );
}