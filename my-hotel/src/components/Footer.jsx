// components/Footer.jsx
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: '#2b1b0e', color: '#fff' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Al Haram Food Point — All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;