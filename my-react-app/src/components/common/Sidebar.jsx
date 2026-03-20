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

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'POS', icon: <PointOfSaleIcon /> },
  { text: 'Products', icon: <InventoryIcon /> },
  { text: 'Orders', icon: <ShoppingCartIcon /> },
  { text: 'Reports', icon: <BarChartIcon /> },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List sx={{ width: 220, mt: 8 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}