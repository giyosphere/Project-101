import icon from "../../assets/icons/POSlogo.png";
import Box from '@mui/material/Box';

export default function Logo({size = 600}) {
  return (
  <Box
    component="img"
    src={icon}
    alt="logo"
    sx={{ width: size }}
  />
 
  );
}