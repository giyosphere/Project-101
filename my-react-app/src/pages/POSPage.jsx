import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Layout from "../components/common/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, {useState} from 'react';
import ProductList from '../components/products/ProductList';



export default function Pospage(){
  
  const [cart, setCart] = useState([])

  const addToCart = (items) =>{
  setCart(...cart, items)
  }

  return(
    <Layout>
       <Typography variant="h3">
        Point of sales
      </Typography>
     
     <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
          <Box sx={{flex: 2}}>
          <ProductList onAddToCart={addToCart} />
          </Box>


          <Box sx={{ width: 350}}>
              
          </Box>

     </Box>



    
    </Layout>
  )


  
}
