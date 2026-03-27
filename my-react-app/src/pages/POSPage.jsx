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
  setCart([...cart, items])
  console.log(cart)
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


          <Box sx={{ display: 'flex', flexDirection:'column', width: 350, gap: 2}}>
            <Box>
              <Card sx={{width: 300, height: 300}}>
                <CardContent>
                  <Typography variant='h6'>Ordered Summary</Typography>
                </CardContent>
              </Card>
              </Box>

              <Box>
                <Card sx={{width: 300, height: 100}}>
                  <CardContent>
                    <Typography variant='h6' >
                      Total
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
          </Box>

     </Box>



    
    </Layout>
  )


  
}
