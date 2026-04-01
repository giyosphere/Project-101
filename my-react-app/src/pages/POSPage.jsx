import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Layout from "../components/common/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, {useState} from 'react';
import ProductList from '../components/products/ProductList';
import CartItem from '../components/cart/cart';



export default function Pospage(){
  
  const [cart, setCart] = useState([])
  

  const addToCart = (product) =>{
  const existingItem = cart.find((item) => item.id === product.id);


  if(existingItem){
   setCart(cart.map((item) => {
    if (item.id === product.id) {
          return{...item, quantity: item.quantity +1};
        }
        return item;
      }));
      
   } else {
    setCart([...cart, {...product, quantity: 1}])
  
   }

  };




const onIncrease = (productId) => {
const existingItem = cart.find((item) => item.id === productId);

if(existingItem){
   setCart(cart.map((item) => {
    if (item.id === productId) {
          return{...item, quantity: item.quantity + 1};
        }
        return item;
      }));
}
}

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

         
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto'}}>

              <Box>
              <Typography variant='h6' sx={{color: '#84B179'}}>Items</Typography>
              {cart.map((item) => (
                <CartItem 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => onIncrease(item.id)}
                />
              ))}
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
