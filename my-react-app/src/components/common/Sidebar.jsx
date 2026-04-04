import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  
import LogOutIcon from '@mui/icons-material/Logout';
import Logo from './logo';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';






const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard'},
  { text: 'POS', icon: <PointOfSaleIcon />, path: '/pos' },
  { text: 'Products', icon: <InventoryIcon />, path: '/products' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
  { text: 'Reports', icon: <BarChartIcon />, path:'/reports' },
];





export default function Sidebar({open, setOpen}) {



const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

const navigate = useNavigate(); 
const { logout } = useAuth();

  const handlelogout = () => {
    logout();
    navigate('/')

  };


  // Responsive state for mobile view

  
  return (

    <Drawer 
    variant={isMobile ? 'temporary' : 'permanent'} 
    anchor="left"
    open={isMobile ? open : true}
    onClose={() => setOpen(false)}
    
    >
      <Box>
          <Logo size={220}/>
      </Box> 
    
      <List sx={{ width: 220}}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}> 
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))} 


        <ListItem disablePadding>
          <ListItemButton onClick={handlelogout}>
            <ListItemIcon>
              <LogOutIcon/>
            
            </ListItemIcon>
              <ListItemText primary="Logout"/>
          </ListItemButton>
        </ListItem>
      </List>

    </Drawer>
  );



}

