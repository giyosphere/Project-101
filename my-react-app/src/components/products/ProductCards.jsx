import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '../common/Button';



export default function ProductCard({ name, price, stock, onAddToCart }) {
  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ₱{price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
      
        

      </CardContent>
      <CardActions>
        { onAddToCart ? (
          <Button label="Add to cart" variant='contained' onClick={onAddToCart}/>
        ) 
        : (
            <>
             <Button label="Edit" variant= 'contained'/>
             <Button label="Delete" variant='contained'/>

            </>
         
        )}
      </CardActions>
        
    </Card>
  );
}
