import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';  
import Button from '../common/Button';
import { Box } from '@mui/material';

export default function CartItem({ name, price, quantity, onIncrease, onDecrease, onRemove }) {








return(

<Box sx={{display: 'flex', alignItems: 'center', gap: 2, marginBottom: 1}}>
<Card sx={{mb: 1}}>
  <CardContent>
    <Typography variant="h6">{name}</Typography>
    <Typography variant="body2" color="text.secondary">
      ₱{price}
      </Typography>
    <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginTop: 1}}>
    <Button label="+" variant='contained' onClick={onIncrease}/>
    <Typography variant="body2" color="text.secondary">
       {quantity}
    </Typography>
    <Button label="-" variant='contained' onClick={onDecrease}/>
    <Button label="x" variant='contained' onClick={onRemove}/> 
  </Box>
  </CardContent>
</Card>
  </Box>



)


}