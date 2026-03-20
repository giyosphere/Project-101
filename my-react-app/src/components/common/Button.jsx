import React from 'react';
import MuiButton from '@mui/material/Button';

export default function Button({ label, onClick, variant = 'contained', fullWidth = false, type = 'button' }) {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
      sx={{ mt: 1 }}
    >
      {label}
    </MuiButton>
  );
}