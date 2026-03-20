import React from 'react';
import MuiModal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from './Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Modal({ open, onClose, title, children, onConfirm }) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          {title}
        </Typography>

        {children}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
          <Button label="Cancel" variant="outlined" onClick={onClose} />
          <Button label="Confirm" variant="contained" onClick={onConfirm} />
        </Box>
      </Box>
    </MuiModal>
  );
}