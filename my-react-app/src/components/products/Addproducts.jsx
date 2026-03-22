import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '../common/Button';




export default function Addproducts({open, onClose}){

 const[name, setName]= React.useState('');
 const[price, setPrice] = React.useState('');
 const[stock, setStock] = React.useState('');



 
  return(

  
<Dialog sx={{width: '100%'}} open={open} onClose={onClose}>
<DialogTitle>Add Product</DialogTitle>
 <DialogContent sx={{display: 'flex',margin: '10px', gap: '20px', marginTop: '10px', flexDirection: 'column', overflow: 'visible'}}>
   
   <TextField
   label="Product Name"
   value={name}
   onChange={(e) => setName(e.target.value)}
   />
   
   <TextField
   label="Price"
   type="number"
   value={price}
   onChange={(e) => setPrice(e.target.value) }
   />

   <TextField
   label="Stock"
   type="number"
   value={stock}
   onChange={(e) => setStock(e.target.value)}
   />

   <DialogActions>
    <Button variant="contained" label="Add Product" onClose={onClose} />
    <Button variant="contained" label="Cancel" onClose={onclose}/>
   </DialogActions>

 </DialogContent>
</Dialog>


  )
}