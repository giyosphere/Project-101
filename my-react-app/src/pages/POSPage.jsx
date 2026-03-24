import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Layout from "../components/common/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const statpos = [
  { label: 'Ordered Items'},
  { label: 'Payment Summary'},
  { label: 'Total'}
]
export default function Pospage(){
  return(
    
    <Layout>
       <Typography variant="h3">
        Point of sales
      </Typography>



    {statpos.map((stat) => (  
    <Box sx={{display: 'flex', flexDirection: 'row', m: '10px'}}>
          <Card key={stat.label} sx={{minWidth: 300, minHeight: 200}}>
            <CardContent>
              <Typography>
               {stat.label}
              </Typography>
            </CardContent>
          </Card>    
    </Box>


    ))}
    </Layout>
  )
}
