// components/Hero.jsx
import { Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        scrollMarginTop:'64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: '#7a1f1f',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/placeholder-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', textShadow: '2px 2px 6px black' }}>
        Al Haram Food Point
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, textShadow: '1px 1px 4px black' }}>
        Kudwala ka Sadaa Aur Mazedaar Khana
      </Typography>
    </Box>
  );
}

export default Hero;