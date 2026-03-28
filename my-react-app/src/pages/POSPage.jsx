import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Layout from "../components/common/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, {useState} from 'react';
import ProductList from '../components/products/ProductList';



export default function Pospage(){
  
  const [cart, setCart] = useState([])

  const addToCart = (product) =>{
  const existingItem = cart.find((item) => item.id === product.id);


  if(existingItem){
   setCart(cart.map((item) =>{
    if (item.id === product.id) {
          return{...item, quantity: item.quantity +1};
        }
        return item;
      }));
      
   } else {
    setCart([...cart, {...product, quantity: 1}])
  
   }

  };
  

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  

  return(
    <Layout>
      
      <Typography variant="h3" sx={{color: '#2FA4D7'}}>
        Point of sales
      </Typography>
     
     <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, height: '95vh'}}>

       
          <Box sx={{flex: 2, overflowY: 'auto'}}>
          <ProductList onAddToCart={addToCart} />
          </Box>

         
          <Box sx={{ display: 'flex', flexDirection:'column', width: 350, gap: 2}}>
            
            
                <Box>
              <Card sx={{width: 350, height: 350}}>
                <CardContent sx={{height: '100%'}}>
                  <Typography variant='h6'sx={{color: '#84B179'}}>Ordered Summary</Typography>

                 { cart.map((item) => (
                   <Box sx={{display: 'flex', flexDirection:'row', gap: 2 }} key={item.id}>
                  <Typography>
                    {item.quantity}
                  </Typography>
                  <Typography>
                    {item.name}
                  </Typography>
                    <Typography sx={{ ml: 10
                    }}>
                    ₱{(item.price * item.quantity).toLocaleString('en-PH', {minimumFractionDigits: 2})}
                  </Typography>
                
                 </Box>
                 ))}
                

                </CardContent>
              </Card>
              </Box>
            
          
             
              <Box>
                <Card sx={{width: 350, height: 100}}>
                  <CardContent>
                    <Typography variant='h6' sx={{color: '#84B179'}} >
                     Total:
                    </Typography>

                    <Typography>
                      {total.toLocaleString('en-PH', { minimumFractionDigits: 2})}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

          </Box>

     </Box>



    
    </Layout>
  )


}

