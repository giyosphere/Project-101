import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Layout from "../components/common/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Car } from "lucide-react";

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
    <Box sx={{display: 'flex', flexDirection: 'column', m: '10px'}}>
          <Card key={stat.label} sx={{minWidth: 800, minHeight: 200, overflow: 'visible'}}>
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
