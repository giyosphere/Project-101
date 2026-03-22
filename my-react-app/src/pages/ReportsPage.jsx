import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '../components/common/Layout';




export default function Reportspage(){
  return(
<Layout>
  <Box sx={{display: 'flex', flexDirection: 'column', color: 'firebrick'}}>
    <Typography variant="h1">
    Reports
    </Typography>
    <Typography variant="p">
      List of all the reports
    </Typography>
  </Box>
</Layout>
    
  )
}