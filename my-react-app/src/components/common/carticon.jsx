import icon from "../../assets/icons/carticon.png";
import Box from '@mui/material/Box';

export default function cartIcon({size = 600}) {
  return (
  <Box
    component="img"
    src={icon}
    alt="logo"
    sx={{ width: size }}
  />
 
  );
}