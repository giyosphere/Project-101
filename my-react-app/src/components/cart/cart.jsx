import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';  
import Button from '../common/Button';
import { Box } from '@mui/material';

export default function CartItem({ id, name, price, quantity, onIncrease, onDecrease, onRemove }) {




return(

<Box sx={{display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1}}>
<Card sx={{mb: 1}}>
  <CardContent>
    <Typography variant="h6">{name}</Typography>
    <Typography  variant="body2" color="text.secondary">
      ₱{price}
      </Typography>
    <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginTop: 1}}>
      
    <Button label="+" variant='contained' onClick={() => onIncrease(id)}/>
    <Typography sx={{fontWeight: 900, color: 'green'}} variant="body2" color="text.secondary">
       {quantity}
    </Typography>
    <Box sx={{display: 'flex', flexDirection:'row', gap: 4}}>
      <Button label="-" variant='contained' onClick={onDecrease}/>
      <Button label="x" variant='contained' onClick={onRemove}/> 
    </Box>
    
  </Box>
  </CardContent>
</Card>
  </Box>



)


}